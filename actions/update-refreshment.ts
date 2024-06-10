"use server";

import { updatePonto } from "@/lib/updatePonto";

export async function updateRefreshment(_: any, data: FormData) {
  const entries = data.entries();
  let next = entries.next();

  const ponto: { [key: string]: string } = {};

  while (!next.done) {
    const key = next.value[0];
    const value = next.value[1].toString();
    if (key === "id") {
      next = entries.next();
      continue;
    }
    ponto[key] = value;
    next = entries.next();
  }
  return await updatePonto(data.get("id")?.toString()!, ponto);
}
