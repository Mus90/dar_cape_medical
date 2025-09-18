"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function LatestInsightsSection() {
  const t = useTranslations("latestInsights");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const items = [
    { key: "hpcsaGuide", href: `/${locale}/insights/hpcsa-registration` },
    { key: "trainingOverview", href: `/${locale}/insights/training-overview` }
  ] as const;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`items.${item.key}.excerpt`)}
                </p>
              </div>
              <div>
                <Link href={item.href} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  {tCommon("learnMore")}
                  <ArrowRightIcon className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
