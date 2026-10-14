import { IconTrophyFilled } from '@tabler/icons-react';
import Video from './Video';
import type { ProjectRepo } from '../../lib/projects';

export interface ProjectCardProps {
  name: string;
  tag: string;
  medal?: string;
  desc: string;
  video?: string;
  repos: ProjectRepo[];
}

export default function ProjectCard({ name, tag, medal, desc, video, repos }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative">
        {video
          ? <Video src={video} autoPlay loop muted playsInline />
          : <div className="aspect-[4/3] rounded-[22px] bg-[repeating-linear-gradient(135deg,var(--s1)_0_10px,var(--s2)_10px_20px)]" />}
        {medal && (
          <span className="absolute top-[10px] right-[10px] flex items-center gap-1 rounded-full bg-brand px-[10px] py-1 text-[13px] font-medium text-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
            <IconTrophyFilled size={14} /> {medal}
          </span>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[22px]">{name}</span>
        <span className="whitespace-nowrap rounded-full bg-[var(--chip)] px-[9px] py-0.5 text-[13px]">{tag}</span>
      </div>
      <span className="text-base text-[var(--muted)]">{desc}</span>
      {repos.length > 0 && (
        <div className="mt-auto flex flex-col gap-1 pt-1 text-[15px]">
          {repos.map(repo => (
            <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand">{repo.label} ↗</a>
          ))}
        </div>
      )}
    </div>
  );
}
