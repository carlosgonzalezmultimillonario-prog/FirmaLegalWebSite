import { InsightGrid } from "@/types/insights.types";
import { IMAGES } from "@/assets/images";

export const insightsMock: InsightGrid[] = [
  {
    id: "litigation-case",
    title:
      "In a high-stakes business litigation case, our legal team secured a multi-million-dollar settlement.",
    date: "2025-07-24",
    alt:"",
    image: IMAGES.insights.library, 
  },
  {
    id: "divorce-case",
    title:
      "We helped a client navigate a divorce, achieving a fair division of assets.",
    date: "2025-07-24",
    alt:"",
    image: IMAGES.insights.abstract, 
  },
];
