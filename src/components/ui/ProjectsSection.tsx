import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECT_IDS, PROJECT_VIDEOS, PROJECT_REPOS } from '../../lib/projects';
import ProjectCard from './ProjectCard';
import type { ProjectCardProps } from './ProjectCard';

interface ProjectEntry extends ProjectCardProps {
  key: string;
}

export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = useMemo(() => {
    const items: ProjectEntry[] = PROJECT_IDS.map(id => ({
      key: id,
      name: t(`sections.${id}_name`),
      tag: t(`sections.${id}_date`),
      desc: (t(`sections.${id}_bullets`, { returnObjects: true }) as string[])[0],
      video: PROJECT_VIDEOS[id],
      repos: PROJECT_REPOS[id] ?? [],
    }));
    items.push({
      key: 'achievement_1',
      name: t('sections.achievement_1_name'),
      tag: t('sections.achievement_1_date'),
      medal: `${t('sections.achievement_1_place')} · ${t('sections.achievement_1_label')}`,
      desc: (t('sections.achievement_1_bullets', { returnObjects: true }) as string[])[0],
      video: PROJECT_VIDEOS.achievement_1,
      repos: PROJECT_REPOS.achievement_1 ?? [],
    });
    return items;
  }, [t]);

  return (
    <section id="projects" className="flex flex-col flex-wrap gap-6 border-t border-[var(--line)] pt-7 pb-18 max-bp2:gap-3">
      <div className="flex-none font-mono text-[17px] tracking-[0.06em]">04 — {t('sections.projects_title')}</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-4">
        {projects.map(({ key, ...p }) => <ProjectCard key={key} {...p} />)}
      </div>
    </section>
  );
}
