"use server";

import { collection, addDoc } from "firebase/firestore";
import firebaseDB from "@/utils/db";

export async function saveRefreshment(prev: any, data: FormData) {
  // console.log("data", data);
  // console.log("prev", prev);

  const entries = data.entries();
  let next = entries.next();

  const ponto: { [key: string]: string } = {};

  while (!next.done) {
    const key = next.value[0];
    const value = next.value[1].toString();

    ponto[key] = value;

    next = entries.next();
  }

  try {
    const result = await addDoc(collection(firebaseDB, "testa"), ponto);

    return { message: "Ponto salvo", value: result.id, status: "ok" };
  } catch (error) {
    return {
      message: "Error ao salvar ponto ",
      status: "error",
      value: (error as Error).message,
    };
  }
}
