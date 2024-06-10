"use server";

import { deletePonto } from "@/lib/deletePonto";

export async function deleteRefreshment(data: FormData) {
  return await deletePonto(data.get("id")?.toString()!);
}
