import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const Config = {
  // Strapi API related settings
  API_KEY: publicRuntimeConfig.API_KEY,
  BUILDING: publicRuntimeConfig.BUILDING,
  IMAGE_URL: publicRuntimeConfig.IMAGE_URL,
  NEXT_PUBLIC_API_URL: publicRuntimeConfig.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_GCP_API_KEY: publicRuntimeConfig.NEXT_PUBLIC_GCP_API_KEY,
  PAGE_SIZE: '12', //must be a string
  // Common URL links
  URL_INSTAGRAM: 'https://www.instagram.com/links.umeda/',
  URL_TWITTER: 'https://twitter.com/LinksUmeda',
};
