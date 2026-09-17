import type { Metadata } from "next";
import ServiceArticle from "@/components/ServiceArticle";
import { serviceMetadata } from "@/lib/services";

const slug = "pladur-ceuta";

export const metadata: Metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceArticle slug={slug} />;
}
