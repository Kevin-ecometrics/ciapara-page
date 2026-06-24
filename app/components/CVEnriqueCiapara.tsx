"use client";

import { useI18n } from "../providers/i18nProvider";

export default function CVEnriqueCiapara() {
  const { t } = useI18n();

  return (
    <section className="px-6 pb-24 bg-white">
      <div className="mx-auto text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-4 leading-[1.15] text-[#1A1916]">
          {t.aboutBio.cv.title}
        </h1>
      </div>
      <div className="max-w-6xl mx-auto text-justify">
        <h4 className=" leading-[1.15] text-[#1A1916] text-xl md:text-2xl">
          {t.aboutBio.cv.body}
        </h4>
      </div>
    </section>
  );
}
