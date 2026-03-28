import Link from "next/link";
import Image from "next/image";

import { LanguageToggle } from "@/components/language-toggle";
import { SiteFooter } from "@/components/site-footer";
import { Lang, privacyPolicy, siteContent, termsOfService } from "@/lib/content";

type LegalPageProps = {
  lang: Lang;
  page: "privacy" | "terms";
};

export function LegalPage({ lang, page }: LegalPageProps) {
  const isAr = lang === "ar";
  const content = siteContent[lang];
  const sections = page === "privacy" ? privacyPolicy[lang] : termsOfService[lang];
  const title = page === "privacy" ? content.legal.privacy : content.legal.terms;
  const homeHref = isAr ? "/?lang=ar" : "/";

  return (
    <div dir={isAr ? "rtl" : "ltr"} className={isAr ? "font-arabic" : "font-sans"}>
      <div className="min-h-screen bg-[var(--background)] text-stone-900">
        <header className="border-b border-[var(--brand-soft)] bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <Link href={homeHref} className="flex items-center gap-3 text-lg font-semibold text-stone-900">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[var(--brand)] bg-white">
                  <Image src="/logo.png" alt="Take a Sip logo" fill className="object-cover" sizes="44px" />
                </div>
                <span>{content.legal.brandName}</span>
              </Link>
              <p className="mt-2 text-sm text-stone-500">{content.legal.effectiveDate}</p>
            </div>
            <LanguageToggle lang={lang} path={page === "privacy" ? "/privacy" : "/terms"} />
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-[36px] border border-[var(--brand-soft)] bg-white p-8 shadow-[0_30px_80px_rgba(28,25,23,0.08)] lg:p-12">
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950">{title}</h1>
            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold text-stone-900">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-stone-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>
                        {paragraph.includes("support@yourapp.com") ? (
                          <>
                            {paragraph.replace("support@yourapp.com", "")}
                            <a
                              href="mailto:support@yourapp.com"
                              className="font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4"
                            >
                              support@yourapp.com
                            </a>
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>

        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
