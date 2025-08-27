export interface InsightGrid {
  id: string;
  alt: string;
  title: string;
  date: string;
  image: string;
}
export interface InsightsSectionProps {
  items?: InsightGrid[];
  title?: string;
  subtitle?: string;
}