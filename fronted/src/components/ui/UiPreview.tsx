"use client";

import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";

export default function UiPreview() {
  return (
    
    <Card
      sx={{
        maxWidth: 400,
        margin: "2rem auto",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography variant="h4" color="primary" gutterBottom>
          FirmaLegal
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Gestión de Documentos Digitales
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          Con FirmaLegal puedes crear, firmar y administrar contratos de manera
          segura, rápida y desde cualquier lugar.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Diseñado para profesionales y empresas.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", padding: "1rem" }}>
        <Button variant="contained" color="primary">
          Crear Documento
        </Button>
        <Button variant="outlined" color="secondary">
          Ver Más
        </Button>
      </CardActions>
    </Card>
  );
}
