import firebaseDB from "@/utils/db";
import { deleteDoc, doc } from "firebase/firestore";

export async function deletePonto(id: string) {
  try {
    await deleteDoc(doc(firebaseDB, "testa", id));

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
