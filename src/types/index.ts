export interface SEOProps {
  title?: string;
  description?: string;
  location?:string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}