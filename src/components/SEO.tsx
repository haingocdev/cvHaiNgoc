import { useEffect } from 'react';
import type { SeoMeta } from '@/types';

export function SEO({ title, description, image = '/og-image.svg', url }: SeoMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attr, attrValue] = selector.includes('property=')
          ? ['property', selector.match(/property="([^"]+)"/)?.[1] ?? '']
          : ['name', selector.match(/name="([^"]+)"/)?.[1] ?? ''];
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    if (url) {
      setMeta('meta[property="og:url"]', 'content', url);
    }
  }, [title, description, image, url]);

  return null;
}
