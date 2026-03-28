import Link from "next/link";

import { Lang } from "@/lib/content";

type LanguageToggleProps = {
  lang: Lang;
  path: "/" | "/privacy" | "/terms";
};

export function LanguageToggle({ lang, path }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-stone-200 bg-white p-1 shadow-[0_10px_30px_rgba(28,25,23,0.06)]">
      <Link
        href={path}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          lang === "en" ? "bg-stone-900 text-white" : "text-stone-500 hover:text-stone-900"
        }`}
      >
        EN
      </Link>
      <Link
        href={`${path}?lang=ar`}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          lang === "ar" ? "bg-stone-900 text-white" : "text-stone-500 hover:text-stone-900"
        }`}
      >
        عربي
      </Link>
    </div>
  );
}

