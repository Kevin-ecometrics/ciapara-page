"use client";

import { motion } from "motion/react";

const expo = [0.16, 1, 0.3, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
};

const stats = [
  { num: "2001", label: "Año de fundación" },
  { num: "25+", label: "Años de oficio" },
  { num: "TIJ", label: "Tijuana, B.C." },
  { num: "TGN", label: "Tarragona, ES" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 md:py-36 px-6 bg-[#F6F2EC]">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-[1.15] max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          asperiores architecto itaque, reiciendis molestiae sequi voluptatum
          quis magni quae, cupiditate quisquam accusantium dolores recusandae
          pariatur vel atque modi incidunt ducimus saepe vitae animi fugiat
          dolorum.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: expo }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-sm leading-relaxed max-w-xl mb-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro
          maxime delectus, assumenda facilis ad laudantium laboriosam iusto
          eligendi cumque aspernatur eum omnis, dolore vel quibusdam officia,
          ullam expedita natus iste? Minus sunt libero laudantium molestias? Ab,
          expedita consequatur ad placeat atque accusantium quisquam eveniet
          temporibus, voluptate omnis, nulla quos! Quaerat suscipit vel ipsum
          omnis soluta ea deleniti maxime voluptatibus.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: expo }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-sm leading-relaxed max-w-xl mb-12"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          maiores, accusantium distinctio quae illo ipsa quos voluptatem velit
          temporibus laboriosam, sunt, magni recusandae beatae! Quaerat iste
          totam quae iure dolores quasi, magni fuga adipisci maxime eligendi,
          doloremque tenetur placeat accusamus.
        </motion.p>

        <div className="flex flex-row gap-6 max-w-7xl mx-">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-[1.15]">
            LOREM
          </p>
          <svg
            className="h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
          </svg>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-[1.15]">
            IPSUM
          </p>
        </div>
        <figure className="w-125 h-80 rounded-lg overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: expo }}
            viewport={{ once: true, amount: 0.15 }}
            src="/CiaparaHeroImg.jpeg"
            alt="Enrique Ciapara en su taller"
            className="rounded-lg object-cover object-top"
          />
        </figure>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: expo }}
              viewport={{ once: true, amount: 0.15 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A1916] leading-[1.35]"
            >
              Al servicio de artistas, diseñadores y coleccionistas — donde la
              sensibilidad técnica y la mirada artística se encuentran.
            </motion.p>
          </div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: 0.08 }}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.num}
                  variants={itemVariants}
                  className="stat-item border-t border-[#E4DFD8] pt-5"
                >
                  <p className="text-2xl font-semibold text-[#8B3A2A] mb-1 tracking-tight">
                    {s.num}
                  </p>
                  <p className="text-xs text-[#6B6660] tracking-[0.12em] uppercase">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: expo, delay: 0.15 }}
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-4 text-sm text-[#6B6660] leading-relaxed"
            >
              <p>
                Enrique Ciapara es un pintor establecido en Tijuana, Baja
                California. Su obra transita entre lo abstracto y lo
                semi-abstracto, anclada en el paisaje norteño, la arquitectura
                espontánea de la ciudad fronteriza y los objetos cotidianos de
                la cocina.
              </p>
              <p>
                Ha vivido temporadas en Tarragona, Catalunya. Su taller de
                grabado lleva el nombre de <em>La Brigada</em>, en referencia a{" "}
                <em>La brigade de cuisine</em>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
