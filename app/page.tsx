import PortfolioClient from "@/components/PortfolioClient";
import { portfolioData } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: portfolioData.meta.siteTitle,
  description: portfolioData.meta.siteDescription,
};

export default function Home() {
  return <PortfolioClient />;
}
