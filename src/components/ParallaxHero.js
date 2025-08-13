"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxHero() {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 600], [0, 110]);
  const yBg = useTransform(scrollY, [0, 600], [0, -70]);
  const fade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-[96vh] flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 bg-slate-950">
      {/* Dark background with dot pattern */}
      <motion.div
        style={{ y: yBg, opacity: fade }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_18%_32%,#1e3a8a380,transparent_62%),radial-gradient(circle_at_85%_68%,#3730a380,transparent_58%)]" />
        {/* Additional dark overlay to increase overall darkness */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Dot pattern overlay - smaller & less prominent */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 2px, transparent 0)`,
            backgroundSize: "22px 22px",
          }}
        />
      </motion.div>

      {/* Cutout image - responsive positioning */}
      <motion.div
        style={{ y: yImg, opacity: fade }}
        className="pointer-events-none select-none absolute left-2 sm:left-6 lg:left-8 top-[60%] -translate-y-1/2 hidden md:block"
      >
        <Image
          src="/images/cutout.png"
          alt="Samrat"
          width={480}
          height={560}
          priority
          className="w-[280px] sm:w-[320px] lg:w-[360px] xl:w-[420px] h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.25)] sm:drop-shadow-[0_18px_42px_rgba(0,0,0,0.35)]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14">
          <motion.div
            style={{ y: yImg, opacity: fade }}
            className="md:hidden w-full flex justify-center order-1"
          >
            <Image
              src="/images/cutout.png"
              alt="Samrat"
              width={300}
              height={420}
              priority
              className="w-48 xs:w-56 sm:w-64 h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 w-full max-w-2xl md:ml-[350px] lg:ml-[450px] xl:ml-[520px] 2xl:ml-[580px] text-center md:text-left order-2"
          >
            <h1 className="text-[1.75rem] xs:text-[2rem] sm:text-[2.35rem] md:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.4rem] font-extrabold leading-tight tracking-tight text-white">
              <span className="block text-slate-100">Data Professionals!</span>
              <span className="mt-1 sm:mt-2 block text-white">
                <span className="inline-block border-b-2 sm:border-b-4 border-indigo-400 pb-0.5 sm:pb-1">
                  I'm Samrat
                </span>
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-7 text-sm sm:text-base lg:text-[1.05rem] xl:text-lg text-slate-300 leading-relaxed max-w-sm sm:max-w-lg lg:max-w-xl mx-auto md:mx-0">
              I help aspiring analysts master Data Analytics, Machine Learning &
              AI with a practical, portfolio-first approach that delivers
              tangible career outcomes.
            </p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-slate-400 max-w-sm sm:max-w-lg lg:max-w-xl mx-auto md:mx-0">
              Join a growing community accelerating their careers through
              structured learning, real projects, and strategic mentoring.
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-9">
              <button className="button-shine relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-white text-sm sm:text-base lg:text-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-700 shadow-[0_4px_16px_-4px_rgba(99,102,241,0.35)] sm:shadow-[0_6px_22px_-4px_rgba(99,102,241,0.35)] hover:shadow-[0_8px_28px_-4px_rgba(99,102,241,0.55)] sm:hover:shadow-[0_10px_30px_-4px_rgba(99,102,241,0.55)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                Start Your Journey
              </button>
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12 lg:gap-16 text-center">
              {[
                { v: "2000+", l: "Students" },
                { v: "15+", l: "Institutes" },
                { v: "95%", l: "Success Rate" },
              ].map((i) => (
                <div
                  key={i.l}
                  className="min-w-[80px] sm:min-w-[90px] lg:min-w-[100px]"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-indigo-400 tracking-tight">
                    {i.v}
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-xs tracking-wide uppercase text-slate-500 mt-0.5 sm:mt-1">
                    {i.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-indigo-400/70 animate-bounce">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
