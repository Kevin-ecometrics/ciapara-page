"use client";

import { useI18n } from "../../providers/i18nProvider";

export default function TextGallery() {
  const { t } = useI18n();

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto text-left">
        <h4 className="font-bold leading-[1.15] text-[#1A1916] text-lg md:text-xl">
          {t.aboutBio.mentors.text}
        </h4>
      </div>
    </section>
  );
}
