export const CURRENT_ENV =
  process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;

export const isDev = CURRENT_ENV === 'development';
export const isTest = typeof window !== 'undefined' && window.isTest;
export const isProd = CURRENT_ENV === 'production' || isTest;
