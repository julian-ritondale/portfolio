export const PROJECT_IDS = ['project_1', 'project_2', 'project_4', 'project_6'] as const;

export const PROJECT_VIDEOS: Record<string, string> = {
  project_1: '/videos/pay-and-pray-demo.mp4',
  project_2: '/videos/snippet-searcher-demo.mp4',
  project_4: '/videos/sonora-demo.mp4',
  project_6: '/videos/agent-orchestra-demo.mp4',
  achievement_1: '/videos/scout-demo.mp4',
};

export interface ProjectRepo {
  label: string;
  url: string;
}

export const PROJECT_REPOS: Record<string, ProjectRepo[]> = {
  project_1: [{ label: 'GitHub', url: 'https://github.com/RugPull-Inc/pay-and-pray' }],
  project_2: [{ label: 'GitHub (Toolchain)', url: 'https://github.com/IngSisTeam3-2025/printscript' }],
  project_4: [
    { label: 'GitHub (Frontend)', url: 'https://github.com/julian-ritondale/sonora-ui' },
    { label: 'GitHub (Backend)', url: 'https://github.com/julian-ritondale/sonora-back' },
  ],
  project_6: [{ label: 'GitHub', url: 'https://github.com/DecoudJuan/Agent-Orchestra' }],
  achievement_1: [{ label: 'GitHub', url: 'https://github.com/scout-austral/scout-austral.github.io' }],
};
