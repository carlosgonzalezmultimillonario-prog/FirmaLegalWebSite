"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardActionArea, Typography, Box } from "@mui/material";
import { InsightGrid } from "@/types/insights.types";

type Props = { item: InsightGrid };

const InsightsCard: FC<Props> = ({ item }) => {
  return (
    <Card sx={{
      borderRadius: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      height: '100%'
    }}>
      <CardActionArea 
        component={Link} 
        href={`/insights/${item.id}`}
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{
          width: '100%',
          aspectRatio: '16 / 9',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Image
            src={item.image}
            alt={item.alt ?? item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ 
              objectFit: "cover"
            }}
          />
        </Box>
        <CardContent sx={{ 
          backgroundColor: 'background.paper',
          flexGrow: 1,
          width: '100%',
          p: 6,
          pb: 10,
          position: 'relative',
          zIndex: 1
        }}>
          <Typography 
            sx={{ 
              fontSize: '0.875rem',
              color: 'primary.main',
              mb: 2,
              fontWeight: 500
            }}
          >
            {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </Typography>
          <Typography 
            sx={{ 
              fontSize: '1.5rem',
              lineHeight: 1.3,
              color: '#2C1810',
              fontWeight: 400
            }}
          >
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InsightsCard;
