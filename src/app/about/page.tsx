import {
  Avatar,
  Button,
  Column,
  Grid,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.specialties.title,
      display: about.specialties.display,
      items: [],
    },
    {
      title: about.certifications.title,
      display: about.certifications.display,
      items: [],
    },
    {
      title: about.outside.title,
      display: about.outside.display,
      items: [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" aria-label={person.name} />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.locationLabel ?? person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                  aria-label="Schedule a call"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                              aria-label={item.name}
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Row
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                    border="neutral-medium"
                    radius="l"
                    overflow="hidden"
                    s={{ direction: "column" }}
                  >
                    {experience.logo && (
                      <Row
                        horizontal="center"
                        vertical="center"
                        padding="20"
                        style={{ width: "140px", flexShrink: 0, background: "#ffffff" }}
                        s={{ width: "100%" }}
                      >
                        <Media
                          fillWidth
                          objectFit="contain"
                          sizes="140px"
                          alt={`${experience.company} logo`}
                          src={experience.logo}
                        />
                      </Row>
                    )}
                    <Column fillWidth padding="20" gap="4">
                      <Row fillWidth horizontal="between" vertical="end" wrap marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (achievement: React.ReactNode, index: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${index}`}
                            >
                              {achievement}
                            </Text>
                          ),
                        )}
                      </Column>
                      {experience.images && experience.images.length > 0 && (
                        <Row fillWidth paddingTop="m" gap="12" wrap>
                          {experience.images.map((image, index) => (
                            <Row
                              key={index}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </Row>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Row
                    key={`${institution.name}-${index}`}
                    fillWidth
                    border="neutral-medium"
                    radius="l"
                    overflow="hidden"
                    s={{ direction: "column" }}
                  >
                    {institution.logo && (
                      <Row
                        horizontal="center"
                        vertical="center"
                        padding="20"
                        style={{ width: "140px", flexShrink: 0, background: "#ffffff" }}
                        s={{ width: "100%" }}
                      >
                        <Media
                          fillWidth
                          objectFit="contain"
                          sizes="140px"
                          alt={`${institution.name} logo`}
                          src={institution.logo}
                        />
                      </Row>
                    )}
                    <Column fillWidth padding="20" gap="4" vertical="center">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </Row>
                ))}
              </Column>
            </>
          )}

          {about.specialties.display && (
            <>
              <Heading
                as="h2"
                id={about.specialties.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.specialties.title}
              </Heading>
              {about.specialties.description && (
                <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
                  {about.specialties.description}
                </Text>
              )}
              <Grid columns="3" s={{ columns: "2" }} gap="12" fillWidth marginBottom="40">
                {about.specialties.items.map((item, index) => (
                  <Column
                    key={`${item.name}-${index}`}
                    border="neutral-medium"
                    radius="m"
                    overflow="hidden"
                    title={item.name}
                    aria-label={item.name}
                  >
                    <Row
                      fillWidth
                      horizontal="center"
                      vertical="center"
                      padding="16"
                      style={{ aspectRatio: "1", background: "#ffffff" }}
                    >
                      {item.image ? (
                        <Media
                          fillWidth
                          objectFit="contain"
                          sizes="160px"
                          alt={`${item.name} logo`}
                          src={item.image}
                        />
                      ) : item.icon ? (
                        <Icon name={item.icon} size="xl" />
                      ) : (
                        <Text variant="label-default-s" align="center" onBackground="neutral-strong">
                          {item.name}
                        </Text>
                      )}
                    </Row>
                    <Row fillWidth horizontal="center" paddingY="8" paddingX="4" background="neutral-alpha-weak">
                      <Text variant="label-default-s" align="center" onBackground="neutral-weak">
                        {item.name}
                      </Text>
                    </Row>
                  </Column>
                ))}
              </Grid>
            </>
          )}

          {about.certifications.display && (
            <>
              <Heading
                as="h2"
                id={about.certifications.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.certifications.title}
              </Heading>
              {about.certifications.description && (
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  marginBottom="m"
                >
                  {about.certifications.description}
                </Text>
              )}
              <Row wrap gap="8" marginBottom="16">
                {about.certifications.items.map((item, index) => (
                  <Tag key={`certification-${index}`} size="l">
                    {item}
                  </Tag>
                ))}
              </Row>
              <Row marginBottom="40">
                <Button
                  href={about.certifications.link}
                  label={about.certifications.linkLabel}
                  size="s"
                  variant="secondary"
                  suffixIcon="arrowUpRightFromSquare"
                />
              </Row>
            </>
          )}

          {about.outside.display && (
            <>
              <Heading as="h2" id={about.outside.title} variant="display-strong-s" marginBottom="m">
                {about.outside.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="40">
                {about.outside.description}
              </Text>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
