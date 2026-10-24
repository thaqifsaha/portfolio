import { getPosts } from "@/utils/utils";
import { Column, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** Render projects grouped under "Software" and "Hardware & Infrastructure" headings instead of a flat list */
  groupByCategory?: boolean;
}

function sortByDate(posts: ReturnType<typeof getPosts>) {
  return [...posts].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

function renderCards(posts: ReturnType<typeof getPosts>, priorityOffset = 0) {
  return posts.map((post, index) => (
    <ProjectCard
      priority={index + priorityOffset < 2}
      key={post.slug}
      href={`/work/${post.slug}`}
      images={post.metadata.images}
      title={post.metadata.title}
      description={post.metadata.summary}
      hasContent={post.content.trim() !== ""}
      avatars={
        post.metadata.team?.map((member) => ({
          src: member.avatar,
          "aria-label": member.name,
        })) || []
      }
      link={post.metadata.link || ""}
    />
  ));
}

export function Projects({ range, exclude, groupByCategory }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = sortByDate(allProjects);

  if (groupByCategory) {
    const software = sortedProjects.filter((post) => post.metadata.category !== "hardware");
    const hardware = sortedProjects.filter((post) => post.metadata.category === "hardware");

    return (
      <>
        {software.length > 0 && (
          <Column fillWidth gap="l" marginBottom="40" paddingX="l">
            <Heading as="h2" variant="display-strong-s">
              Software
            </Heading>
            <Column fillWidth gap="xl">
              {renderCards(software)}
            </Column>
          </Column>
        )}
        {hardware.length > 0 && (
          <Column fillWidth gap="l" marginBottom="40" paddingX="l">
            <Heading as="h2" variant="display-strong-s">
              Hardware &amp; Infrastructure
            </Heading>
            <Column fillWidth gap="xl">
              {renderCards(hardware)}
            </Column>
          </Column>
        )}
      </>
    );
  }

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {renderCards(displayedProjects)}
    </Column>
  );
}
