"use client";

import { FC } from "react";
import { Grid, Typography, Box } from "@mui/material";
import InsightsCard from "./insights-card.component";
import { Insight } from "@/types/insights.types";
import { INSIGHTS_MOCK } from "@/mocks/insights.mocks";

type Props = { items?: Insight[]; title?: string; subtitle?: string };

const InsightsSection: FC<Props> = ({
  items = INSIGHTS_MOCK,
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
        {items.map((it) => (
          <Grid key={it.id} item xs={12} md={6} lg={6}>
            <InsightsCard item={it} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InsightsSection;