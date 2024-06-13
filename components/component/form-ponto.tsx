"use client";
import React, { useEffect, useRef, useState } from "react";

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
import { useMap } from "@/hooks/useMap";
import mapboxgl from "mapbox-gl";

const token =
  "pk.eyJ1Ijoic2t5LTIwMjQiLCJhIjoiY2x3eG5lcmZpMWNpNzJucjFoN2dwYnFiMSJ9.4IEOvqX3dGRZpyHPx-MD9g";
mapboxgl.accessToken = token;

const initialState = {
  message: "",
  status: "",
  value: "",
};

function FormPonto() {
  const [state, formAction] = useFormState(saveRefreshment, initialState);
  const { map } = useMap("map");
  const [config, setConfig] = useState({ showMap: false, point: "" });
  const refMarker = useRef<mapboxgl.Marker>(new mapboxgl.Marker());

  useEffect(() => {
    map &&
      map.on("click", (evt) => {
        setConfig((prev) => ({
          ...prev,
          point: `${evt.lngLat.lng};${evt.lngLat.lat}`,
        }));
        refMarker.current.setLngLat(evt.lngLat);
        refMarker.current.addTo(map);
      });
  }, [map]);

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
            name="nome"
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
            name="numero_total_pessoas"
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label className="text-right" htmlFor="coordinates">
            Coordenadas
          </Label>
          {/* <Dialog>
            <DialogTrigger asChild> */}
          <input type="hidden" name="coords" value={config.point} />
          <Button
            className="border-2 border-slate-300 col-span-3 overflow-hidden"
            variant="secondary"
            type="button"
            onClick={() => {
              setConfig((prev) => ({
                ...prev,
                showMap: !prev.showMap,
              }));
            }}
          >
            <GlobeIcon className="w-4 h-4 mr-2" />
            {config.point}
          </Button>
          {/* </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle className="">Coordenadas</DialogTitle>
            <DialogDescription>Selecione as coordenadas</DialogDescription>
            </DialogHeader>
            </DialogContent>
          </Dialog> */}
        </div>
        <div id="map" className={cn("max-h-40 min-h-40")}></div>
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
