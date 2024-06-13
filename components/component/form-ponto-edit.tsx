"use client";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { saveRefreshment } from "@/actions/save-refreshment";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useFormState } from "react-dom";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import { updateRefreshment } from "@/actions/update-refreshment";
import { useRouter } from "next/navigation";
import { Ponto } from "@/hooks/useGetPontos";

const initialState = {
  error: false,
  sucesso: false,
};

function FormPontoEdit({ data }: { data: Ponto & { id: string } }) {
  const router = useRouter();
  const [state, setState] = useState<typeof initialState>(initialState);

  return (
    <form
      // action={formAction}

      onSubmit={async (evt) => {
        const formData = new FormData(evt.currentTarget);
        evt.preventDefault();
        setState({ error: false, sucesso: false });

        const result = await updateRefreshment({}, formData);

        setState(result);
        if (result.sucesso) {
          router.refresh();
        }
      }}
      method="post"
    >
      <div className="grid gap-4 py-4">
        <input type="hidden" name="id" value={data.id} />
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="name">
            Ponto
          </Label>
          <Input
            className="col-span-3"
            id="name"
            name="nome"
            placeholder="Nome do ponto de refrescamento"
            defaultValue={data.nome}
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="maxPeople">
            Total
          </Label>
          <Input
            className="col-span-3"
            id="maxPeople"
            placeholder="Número máximo de pessoas"
            type="number"
            name="numero_total_pessoas"
            defaultValue={data.numero_total_pessoas}
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="coordinates">
            Coordenadas
          </Label>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="border-2 border-slate-300 col-span-3"
                variant="secondary"
              >
                <GlobeIcon className="w-4 h-4 mr-2" />
                Coordenadas
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="">Coordenadas</DialogTitle>
                <DialogDescription>Selecione as coordenadas</DialogDescription>
              </DialogHeader>
              {/* <FormPonto /> */}
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="estado">
            Estado
          </Label>
          <Select name="estado" defaultValue={data.estado}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Selecione o estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="FUNCIONAL">FUNCIONAL</SelectItem>
                <SelectItem value="INDISPONÍVEL">INDISPONÍVEL</SelectItem>
                <SelectItem value="CHEIO">CHEIO</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <p
            className={cn(
              "col-span-4 text-center font-bold text-xs",
              state.sucesso && "text-green-600",
              state.error && "text-red-600"
            )}
          >
            {state.sucesso && "Dados actualizado"}
            {state.error && "Erro ao actualizar dados"}
          </p>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" variant={"default"}>
          Actualizar
        </Button>
        {/* <Button type="reset" variant={"outline"}>
          Limpar
        </Button> */}
      </DialogFooter>
    </form>
  );
}

export default FormPontoEdit;
