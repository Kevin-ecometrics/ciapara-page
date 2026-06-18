"use client";

import { useI18n } from "../providers/i18nProvider";

export default function AboutIntro() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-10 px-6 mx-auto">
      <h3 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase mb-4 leading-[1.15] max-w-xl md:max-w-3xl lg:max-w-7xl indent-12 md:indent-32 text-[#1A1916]">
        "{t.about.quote}"
      </h3>
      <p className="font-normal md:text-xl mb-6 text-[#1A1916]">
        - {t.about.speaker}
      </p>

      <p className="leading-relaxed max-w-3xl mb-4 text-[#1A1916]/90">
        "{t.about.text}"
      </p>
      <p className="text-sm leading-relaxed max-w-xl text-[#1A1916]/70">
        - {t.about.speaker2}
      </p>
      <p className="text-sm leading-relaxed max-w-xl pl-2 text-[#1A1916]/70">
        ({t.about.date})
      </p>
    </div>
  );
}
