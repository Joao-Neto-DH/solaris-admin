// "use client";

import { RefreshTable } from "@/components/component/refresh-table";

export default async function Home() {
  // console.log();
  // useEffect(() => {
  //   async function save() {
  //     try {
  //       console.log("SALVANDO");

  //       const result = await addDoc(collection(firebaseDB, "testa"), {
  //         name: "neto",
  //       });
  //       console.log("SALVO");

  //       console.log("ID", result.id);
  //     } catch (error) {
  //       console.log("ERRO");
  //       console.error(error);
  //     }
  //   }
  //   save();
  // }, []);
  return <RefreshTable />;
}
