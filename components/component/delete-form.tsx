"use client";

import { deleteRefreshment } from "@/actions/delete-refreshment";
import { Ponto } from "@/hooks/useGetPontos";
import React from "react";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

function DeleteForm({ ponto }: { ponto: Ponto }) {
  const router = useRouter();
  return (
    <form
      onSubmit={async (evt) => {
        const formData = new FormData(evt.currentTarget);
        evt.preventDefault();
        const { sucesso } = await deleteRefreshment(formData);

        if (sucesso) {
          router.refresh();
        }
      }}
      method="post"
    >
      <input type="hidden" name="id" value={ponto.id} />
      <Button size="icon" variant="ghost">
        <Trash2Icon className="w-4 h-4" />
        <span className="sr-only">Remove</span>
      </Button>
    </form>
  );
}

export default DeleteForm;
