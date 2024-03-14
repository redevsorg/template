import Image from "next/image";
import { OstDocument } from "redevsmanage";
import { getDocuments } from "redevsmanage/server";
import markdownToHtml from "../../lib/markdownToHtml";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

async function getData(): Promise<OstDocument[]> {
  const cards = getDocuments("homecards", ["title", "content", "slug"]);
  return cards;
}

export default async function Home() {
  const cards = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 px-10 py-5">
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  );
}
