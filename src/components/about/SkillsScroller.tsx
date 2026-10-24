"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Column, Icon, IconButton, Media, Row, Tooltip } from "@once-ui-system/core";
import type { About } from "@/types";
import styles from "./SkillsScroller.module.scss";

type SpecialtyItem = About["specialties"]["items"][number];

interface SkillsScrollerProps {
  items: SpecialtyItem[];
}

const ARROW_SCROLL_STEP = 240;
const EDGE_THRESHOLD = 4;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SkillsScroller({ items }: SkillsScrollerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ pointerId: -1, startX: 0, startScrollLeft: 0 });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > EDGE_THRESHOLD);
    setCanScrollRight(el.scrollLeft < maxScroll - EDGE_THRESHOLD);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByStep = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * ARROW_SCROLL_STEP,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByStep(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByStep(-1);
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollingForward = event.deltaY > 0;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft >= maxScroll - 1;

    if ((scrollingForward && atEnd) || (!scrollingForward && atStart)) {
      return;
    }

    event.preventDefault();
    el.scrollLeft += event.deltaY;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: el.scrollLeft,
    };
    setIsDragging(true);
    el.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragState.current.pointerId !== event.pointerId) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = event.clientX - dragState.current.startX;
    el.scrollLeft = dragState.current.startScrollLeft - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragState.current.pointerId !== event.pointerId) return;
    setIsDragging(false);
    trackRef.current?.releasePointerCapture(event.pointerId);
  };

  return (
    <Row className={styles.wrapper} fillWidth>
      <IconButton
        aria-label="Scroll left"
        icon="chevronLeft"
        variant="secondary"
        size="m"
        rounded
        onClick={() => scrollByStep(-1)}
        tabIndex={canScrollLeft ? 0 : -1}
        aria-hidden={!canScrollLeft}
        className={classNames(styles.arrow, styles.arrowLeft, {
          [styles.arrowHidden]: !canScrollLeft,
        })}
      />
      <Row
        ref={trackRef}
        as="ul"
        aria-label="Specialties"
        tabIndex={-1}
        fillWidth
        className={classNames(styles.track, { [styles.dragging]: isDragging })}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {items.map((item, index) => (
          <Column
            key={`${item.name}-${index}`}
            as="li"
            tabIndex={0}
            aria-label={item.name}
            className={styles.tile}
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            radius="m"
            horizontal="center"
            vertical="center"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex((current) => (current === index ? null : current))}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex((current) => (current === index ? null : current))}
          >
            {item.image ? (
              <Row style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                <Media
                  fillWidth
                  objectFit="contain"
                  aspectRatio="1"
                  sizes="112px"
                  alt={item.name}
                  src={item.image}
                />
              </Row>
            ) : item.icon ? (
              <Icon name={item.icon} size="xl" />
            ) : null}
            {activeIndex === index && (
              <Tooltip className={styles.tooltip} label={item.name} />
            )}
          </Column>
        ))}
      </Row>
      <IconButton
        aria-label="Scroll right"
        icon="chevronRight"
        variant="secondary"
        size="m"
        rounded
        onClick={() => scrollByStep(1)}
        tabIndex={canScrollRight ? 0 : -1}
        aria-hidden={!canScrollRight}
        className={classNames(styles.arrow, styles.arrowRight, {
          [styles.arrowHidden]: !canScrollRight,
        })}
      />
    </Row>
  );
}
