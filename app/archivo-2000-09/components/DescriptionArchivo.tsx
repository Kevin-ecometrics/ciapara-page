"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function DescriptionArchivo() {
  const { locale } = useI18n();

  if (locale === "en") {
    return (
      <div className="text-[#1A1916]/45 leading-relaxed text-sm space-y-4">
        {/* English description — add your text here */}
        <p></p>
      </div>
    );
  }

  return (
    <div className="text-[#1A1916]/45 leading-relaxed text-sm space-y-4">
      {/* Descripción en español — agrega tu texto aquí */}
      <p></p>
    </div>
  );
}
