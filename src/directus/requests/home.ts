import client from "../client";
import { readItems } from "@directus/sdk";

export async function getHomeData(): Promise<Record<string, any>[]> {
  await client.login(process.env.CMS_EMAIL as string, process.env.CMS_PASSWORD as string);
  const cards = await client.request(
    readItems('template_home_cards', {
      fields: ['*'],
    })
  );
  return cards;
}