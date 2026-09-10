export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const sitePath = (path: string) => `${siteBasePath}${path}`;
