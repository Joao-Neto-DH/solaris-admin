import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { FilePenIcon } from "lucide-react";
import { getAllPontos } from "@/lib/getAllPontos";
import DeleteForm from "./delete-form";

async function RefreshTableData() {
  const { pontos, error, sucesso } = await getAllPontos();

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
              <TableCell>{ponto.ponto}</TableCell>
              <TableCell>{ponto.total}</TableCell>
              <TableCell>{ponto.coords}</TableCell>
              <TableCell>{ponto.estado}</TableCell>
              <TableCell>
                <Button size="icon" variant="ghost">
                  <FilePenIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
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
