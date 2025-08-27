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
      borderRadius: 3,
      overflow: "hidden",
      boxShadow: 3
    }}>

      <CardActionArea component={Link} href={`/insights/${item.id}`}>
        <Box sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 2"
        }}>
          <Image
            src={item.image}
            alt={item.alt ?? item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
        <CardContent>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
            {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </Typography>
          <Typography variant="h6" component="h3">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InsightsCard;
