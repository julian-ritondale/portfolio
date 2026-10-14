export const DOT_SHADES = ['var(--chip)', 'rgba(255,95,31,.3)', 'rgba(255,95,31,.55)', 'rgba(255,95,31,.8)', '#FF5F1F'];

export interface ContribDay {
  date: string;
  count: number;
  level: number;
}

export function githubCellsFallback(): string[] {
  let seed = 7;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  return Array.from({ length: 53 * 7 }, () => {
    const r = rnd();
    return DOT_SHADES[r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4];
  });
}

export function buildContributionCells(days: ContribDay[]): string[] {
  if (days.length === 0) return [];
  const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay();
  const padded: (ContribDay | null)[] = [...Array(firstWeekday).fill(null), ...days];
  while (padded.length % 7 !== 0) padded.push(null);
  return padded.map(d => (d ? DOT_SHADES[d.level] : 'transparent'));
}
