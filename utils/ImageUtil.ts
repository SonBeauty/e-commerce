import { Config } from '../config/config';

export const getImageURL = (link?: string, defaultUrl?: string) => {
  if (link) {
    if (/^http/.test(link)) {
      return link;
    }

    return `${Config.IMAGE_URL}${link}`;
  }

  return defaultUrl ? defaultUrl : '/assets/images/noimage.png';
};
