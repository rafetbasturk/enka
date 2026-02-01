"use client";

import { motion } from "framer-motion";

export default function MapComponent() {
  return (
    <section className="w-full h-[400px] relative overflow-hidden rounded-3xl shadow-2xl border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12194.729127793807!2d28.914927048998635!3d40.171627143676155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca114da659c871%3A0xd2000faec3b4adfc!2sEn-Ka%20Makine%20Kal%C4%B1p!5e0!3m2!1str!2str!4v1769844160372!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none border-8 border-background/20 rounded-3xl" />
    </section>
  );
}
