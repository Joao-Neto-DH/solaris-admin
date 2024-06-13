import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { getAllPontos } from "@/lib/getAllPontos";
import DeleteForm from "./delete-form";
import FormPontoEdit from "./form-ponto-edit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { EditIcon } from "lucide-react";

async function RefreshTableData() {
  const { pontos, error, sucesso } = await getAllPontos();
  // console.log(pontos);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Ponto de Refrescamento</TableHead>
          <TableHead>Número Máximo de Pessoas</TableHead>
          <TableHead>Coordenadas</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Editar</TableHead>
          <TableHead>Remover</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sucesso &&
          pontos.map((ponto) => (
            <TableRow key={ponto.id}>
              <TableCell>{ponto.nome}</TableCell>
              <TableCell>{ponto.numero_total_pessoas}</TableCell>
              <TableCell>{ponto.coords}</TableCell>
              <TableCell>{ponto.estado}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="" variant="ghost">
                      <EditIcon className="w-4 h-4" />
                      {/* Coordenadas */}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="">Editar ponto</DialogTitle>
                      <DialogDescription>
                        Preencha os campos que deseja actualizar
                      </DialogDescription>
                    </DialogHeader>
                    <FormPontoEdit data={{ ...ponto }} />
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>
                <DeleteForm ponto={ponto} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default RefreshTableData;
