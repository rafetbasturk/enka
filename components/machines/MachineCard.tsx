"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Calendar, HardDrive } from "lucide-react";
import { Badge } from "../ui/badge";

interface MachineProps {
  specs: string;
  machine: {
    id: number;
    name: string;
    desc: string;
    model: string;
    specs: Record<string, string>;
    type?: string;
  };
  image: StaticImageData;
}

export function MachineCard({ specs, machine, image }: MachineProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -8 }}
    >
      <Card className="group relative overflow-hidden h-full bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30">
        <CardHeader className="p-0 overflow-hidden relative aspect-4/3">
          <Image
            src={image}
            alt={machine.name}
            fill
            className="object-contain transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="absolute top-0 right-4 z-10 flex flex-col gap-2 scale-90 origin-top-right group-hover:scale-100 transition-transform duration-500">
            <Badge className="bg-primary/90 text-white backdrop-blur-md border-none px-3 py-1 shadow-lg">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              {machine.model}
            </Badge>
          </div>

          {machine.type && (
            <div className="absolute bottom-4 left-4 z-10">
              <Badge
                variant="outline"
                className="bg-white/10 text-white backdrop-blur-md border-white/20 px-3 py-1"
              >
                <HardDrive className="w-3.5 h-3.5 mr-1.5" />
                {machine.type}
              </Badge>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-8 space-y-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-all duration-500 rounded-full" />
            <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {machine.name}
            </h3>
            <p className="text-sm text-muted-foreground font-semibold mt-2 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/30" />
              {machine.desc}
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-200/50 dark:border-white/5">
            <div className="flex items-center text-[10px] font-black text-primary/60 uppercase tracking-[0.2em]">
              <Settings2 className="w-3 h-3 mr-2" />
              {specs}
            </div>
            <ul className="grid grid-cols-1 gap-y-2.5">
              {Object.entries(machine.specs).map(([key, value]) => (
                <li
                  key={key}
                  className="flex items-start text-sm text-zinc-600 dark:text-zinc-400 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 mr-3 shrink-0 group-hover:bg-primary transition-colors duration-500" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        {/* Decorative corner accent */}
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500" />
      </Card>
    </motion.div>
  );
}
