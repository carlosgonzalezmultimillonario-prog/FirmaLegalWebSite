import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Box } from '@mui/material';
import ClientLayout from "./ClientLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hussaini Legal Group",
  description: "Web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientLayout>
          <Header />
          <Box
            component="main"
            sx={{
              minHeight: '80vh',
              overflow: 'hidden'
            }}
          >
            {children}
          </Box>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}