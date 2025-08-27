"use client";
import { FC } from "react";
import { Typography, Box } from "@mui/material";
import InsightsCard from "./InsightsCard";
import { InsightsSectionProps } from "@/types/insights.types";
import { insightsMock } from "@/mocks/insights.mocks";
import Grid from "@mui/material/Grid";


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


      <Grid container spacing={3}>
        {items.map((insight) => (
          <Grid key={insight.id} item xs={12} md={6}>
            <InsightsCard item={insight} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InsightsSection;
