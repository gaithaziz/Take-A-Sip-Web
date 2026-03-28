import Link from "next/link";

import { Lang, siteContent } from "@/lib/content";

type SiteFooterProps = {
  lang: Lang;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  const content = siteContent[lang];
  const legalSuffix = lang === "ar" ? "?lang=ar" : "";

  return (
    <footer className="border-t border-[var(--brand-soft)] bg-[#fffaf4]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-lg font-semibold text-stone-900">{content.legal.brandName}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-stone-500">{content.footer.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-stone-600">
          <Link href={`/privacy${legalSuffix}`} className="transition hover:text-stone-950">
            {content.legal.privacy}
          </Link>
          <Link href={`/terms${legalSuffix}`} className="transition hover:text-stone-950">
            {content.legal.terms}
          </Link>
          <a href="mailto:support@yourapp.com" className="transition hover:text-stone-950">
            support@yourapp.com
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--brand-soft)] px-6 py-4 text-center text-sm text-stone-500">
        © 2026 {content.legal.brandName}. {content.footer.rights}
      </div>
    </footer>
  );
}
