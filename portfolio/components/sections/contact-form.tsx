"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);

  try {
    const form = e.currentTarget;

    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar.");
    }

    setStatus("sent");
    form.reset();
  } catch (error) {
    console.error(error);
    alert("Erro ao enviar mensagem.");
  } finally {
    setLoading(false);
  }
}

  if (status === "sent") {
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-xl2 border border-line bg-white px-8 py-16 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal-dim text-signal">
          <Check size={22} />
        </div>
        <h3 className="font-display text-xl font-semibold text-ink">Mensagem enviada</h3>
        <p className="max-w-xs text-[14px] text-graphite">Obrigado pelo contato — respondo assim que possível.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl2 border border-line bg-white p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-ink">
          Nome
        </label>
        <Input id="name" name="name" placeholder="Seu nome" required />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink">
          Email
        </label>
        <Input id="email" name="email" type="email" placeholder="voce@empresa.com" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-ink">
          Mensagem
        </label>
        <Textarea id="message" name="message" placeholder="Como posso ajudar?" required />
      </div>
      <Button type="submit" className="w-full">
        Enviar mensagem <Send size={15} />
      </Button>
    </form>
  );
}
