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
    <Box sx={{ 
        pt: 20, 
        pb: 0, 
        backgroundColor: 'primary.main',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
      <Box sx={{ maxWidth: '90%', mx: 'auto' }}>
        <Box sx={{ mb: 12, px: 6 }}>
          <Typography variant="h1" component="h2" 
            sx={{ 
              color: 'white',
              fontSize: '3.5rem',
              fontWeight: 300,
              mb: 2
            }}>
            {title}
          </Typography>
          <Typography 
            sx={{ 
              color: '#F3F0E9',
              fontSize: '1.125rem',
              opacity: 0.85,
              pl: 0.5
            }}>
            {subtitle}
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 4,
            mb: 8,
            maxWidth: '90%',
            mx: 'auto'
          }}
        >
          {items.map((insight) => (
            <Box 
              key={insight.id} 
              sx={{ 
                width: '100%'
              }}
            >
              <InsightsCard item={insight} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InsightsSection;