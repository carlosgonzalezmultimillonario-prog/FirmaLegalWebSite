"use client";
import { FC } from "react";
import { Typography, Box } from "@mui/material";
import InsightsCard from "./InsightsCard";
import { InsightGrid } from "@/types/insights.types";
import { insightsMock } from "@/mocks/insights.mocks";

type InsightsSectionProps = {
  items?: InsightGrid[];
  title?: string;
  subtitle?: string;
};

const InsightsSection: FC<InsightsSectionProps> = ({
  items = insightsMock,
  title = "Insights",
  subtitle = "Articles, Events & Recent Matters",
}) => {
  if (!items?.length) {
    return (
      <Box sx={{ py: 6 }}>
        <Typography variant="h6">No insights available.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
      
      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            md: 'repeat(2, 1fr)' 
          },
          gap: 3 
        }}
      >
        {items.map((insight) => (
          <InsightsCard key={insight.id} item={insight} />
        ))}
      </Box>
    </Box>
  );
};

export default InsightsSection;