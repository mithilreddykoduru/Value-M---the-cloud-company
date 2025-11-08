import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, noindex }) => {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    } else if (keywordsTag) {
      keywordsTag.remove();
    }
    
    // Handle noindex for robots
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (noindex) {
        if (robotsTag) {
            robotsTag.setAttribute('content', 'noindex, follow');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'robots';
            meta.content = 'noindex, follow';
            document.head.appendChild(meta);
        }
    } else {
        if (robotsTag) {
            // Revert to default crawler behavior (index, follow) by removing the tag
            robotsTag.remove();
        }
    }

    // Handle canonical URL to prevent duplicate content issues
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    // Using pathname will now work correctly with BrowserRouter
    const href = window.location.origin + window.location.pathname;
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', href);

  }, [title, description, keywords, noindex]);

  return null;
};

export default SEO;