"use client";
import { FC } from "react";
import { Typography, Box } from "@mui/material";
import InsightsCard from "./InsightsCard";
import { InsightsSectionProps } from "@/types/insights.types";
import { insightsMock } from "@/mocks/insights.mocks";
import { Grid } from "@mui/system";


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
         {/* Contenedor central único */}
      <Box sx={{ maxWidth: '90%', mx: 'auto' }}>
         {/* Título y subtítulo */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h1" component="h2" 
            sx={{ 
              color: 'white',
              fontSize: '8rem',
              fontWeight: 300,
              mb: 2
            }}>
            {title}
          </Typography>
          <Typography 
            sx={{ 
              color: 'white',
              fontSize: '1.5rem',
              opacity: 0.85,
              pl: 0.5
            }}>
            {subtitle}
          </Typography>
        </Box>
    
        <Grid container sx={{ mb: 8}}>
          {items.map((insight) => (
            <Grid 
              key={insight.id} 
              size={{ xs: 12, md: 6 }} 
            >
              <InsightsCard item={insight} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InsightsSection;