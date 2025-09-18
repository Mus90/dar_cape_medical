"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const t = useTranslations("whyChooseUs");

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t("content")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
