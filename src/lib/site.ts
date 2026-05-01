/** Public handles — change GitHub username here only. */
export const GITHUB_USERNAME = 'KssmLahari';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export function githubRepo(repo: string): string {
  return `${GITHUB_URL}/${repo.replace(/^\//, '')}`;
}
