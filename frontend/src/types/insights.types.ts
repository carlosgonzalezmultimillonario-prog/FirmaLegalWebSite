import { StaticImageData } from 'next/image';

export interface InsightGrid {
  id: string;
  alt: string;
  title: string;
  date: string;
  image: string | StaticImageData;
}
export interface InsightsSectionProps {
  items?: InsightGrid[];
  title?: string;
  subtitle?: string;
}

export interface InsightsCardProps {
  item: InsightGrid;
}