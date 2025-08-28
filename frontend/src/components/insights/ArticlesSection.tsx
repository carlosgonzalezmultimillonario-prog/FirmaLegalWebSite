"use client";

import { FC } from "react";
import { Typography, Box, Button } from "@mui/material";
import { ArticlesSectionProps } from "@/types/articles.types";


const ArticlesSection: FC<ArticlesSectionProps> = ({ items }) => {
  return (
    <Box sx={{ 
      pt: 20,
      pb: 12,
      backgroundColor: 'background.paper',
      position: 'relative',
      mt: -24,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: 'background.paper',
        zIndex: 0
      }
    }}>
      <Box sx={{ maxWidth: '90%', mx: 'auto', px: 6, position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            fontSize: '2.25rem',
            fontWeight: 400,
            mb: 8,
            color: '#2C1810',
            pl: 0.5
          }}
        >
          Articles
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)'
          },
          gap: 3,
          mb: 4
        }}>
          {items.map((article) => (
            <Box 
              key={article.id}
              sx={{
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                pb: 3
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: '0.875rem',
                  color: '#7A2222',
                  mb: 1,
                  fontWeight: 500
                }}
              >
                {new Date(article.date).toLocaleDateString("en-US", { 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '1.125rem',
                  lineHeight: 1.4,
                  color: '#2C1810',
                  mb: 2,
                  fontWeight: 400
                }}
              >
                {article.title}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '0.875rem',
                  color: '#666',
                  lineHeight: 1.6
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In pellentesque sit risus tristique laculis enim a
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'right' }}>
          <Button 
            variant="text"
            sx={{
              color: '#7A2222',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline'
              }
            }}
          >
            All Articles
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticlesSection;
