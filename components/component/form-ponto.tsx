"use client";
import React from "react";

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

import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useFormState } from "react-dom";
import { cn } from "@/lib/utils";

const initialState = {
  message: "",
  status: "",
  value: "",
};

function FormPonto() {
  const [state, formAction] = useFormState(saveRefreshment, initialState);

  return (
    <form action={formAction}>
      <div className="grid gap-4 py-4">
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="name">
            Ponto
          </Label>
          <Input
            className="col-span-3"
            id="name"
            name="ponto"
            placeholder="Nome do ponto de refrescamento"
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
            name="total"
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="coordinates">
            Coordenadas
          </Label>
          <Input
            className="col-span-3"
            id="coordinates"
            placeholder="Coordenadas (ex: -23.5505, -46.6333)"
            name="coords"
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="estado">
            Estado
          </Label>
          <Select name="estado">
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
              state.status === "ok" && "text-green-600",
              state.status !== "ok" && "text-red-600"
            )}
          >
            {state.message}
          </p>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" variant={"default"}>
          Salvar
        </Button>
        <Button type="reset" variant={"outline"}>
          Limpar
        </Button>
      </DialogFooter>
    </form>
  );
}

export default FormPonto;
