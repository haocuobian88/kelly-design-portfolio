import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/kelly-design-portfolio' : '',
  assetPrefix: isGitHubPages ? '/kelly-design-portfolio/' : undefined,
};

export default nextConfig;
