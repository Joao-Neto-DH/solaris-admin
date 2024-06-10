import { Ponto } from "@/hooks/useGetPontos";
import firebaseDB from "@/utils/db";
import { doc, updateDoc } from "firebase/firestore";

export async function updatePonto(id: string, data: Partial<Ponto>) {
  try {
    await updateDoc(doc(firebaseDB, "testa", id), data);

    return {
      error: false,
      sucesso: true,
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
      sucesso: false,
    };
  }
}
