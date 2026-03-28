import Link from "next/link";
import Image from "next/image";

import { AppPreview } from "@/components/app-preview";
import { LanguageToggle } from "@/components/language-toggle";
import { SiteFooter } from "@/components/site-footer";
import { StoreBadges } from "@/components/store-badges";
import { getLang, siteContent } from "@/lib/content";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = getLang(params.lang);
  const content = siteContent[lang];
  const isAr = lang === "ar";
  const legalSuffix = isAr ? "?lang=ar" : "";

  return (
    <div dir={isAr ? "rtl" : "ltr"} className={isAr ? "font-arabic" : "font-sans"}>
      <div className="min-h-screen bg-[var(--background)] text-stone-900">
        <header className="sticky top-0 z-30 border-b border-[var(--brand-soft)] bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
            <div className="grid grid-cols-[auto_1fr_auto] items-center lg:hidden">
              <details className="relative">
                <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--brand-soft)] bg-white text-stone-900 shadow-[0_10px_24px_rgba(28,25,23,0.08)] [&::-webkit-details-marker]:hidden">
                  <span className="text-lg leading-none">≡</span>
                </summary>
                <div className={`absolute top-14 ${isAr ? "right-0" : "left-0"} w-72 rounded-[28px] border border-[var(--brand-soft)] bg-white p-5 shadow-[0_24px_60px_rgba(28,25,23,0.12)]`}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--brand)] bg-white">
                      <Image src="/logo.png" alt="Take a Sip logo" fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{content.legal.brandName}</p>
                      <p className="text-xs tracking-[0.16em] text-[var(--brand)]">{content.brandTagline}</p>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-2 text-sm font-medium text-stone-700">
                    <a href="#features" className="rounded-2xl px-4 py-3 transition hover:bg-[#fff7eb]">
                      {content.nav.features}
                    </a>
                    <a href="#how" className="rounded-2xl px-4 py-3 transition hover:bg-[#fff7eb]">
                      {content.nav.howItWorks}
                    </a>
                    <a href="#rewards" className="rounded-2xl px-4 py-3 transition hover:bg-[#fff7eb]">
                      {content.nav.rewards}
                    </a>
                    <a href="#download" className="rounded-2xl px-4 py-3 transition hover:bg-[#fff7eb]">
                      {isAr ? "التحميل" : "Download"}
                    </a>
                    <Link href={`/privacy${legalSuffix}`} className="rounded-2xl px-4 py-3 transition hover:bg-[#fff7eb]">
                      {content.nav.privacy}
                    </Link>
                    <Link href={`/terms${legalSuffix}`} className="rounded-2xl px-4 py-3 transition hover:bg-[#fff7eb]">
                      {content.nav.terms}
                    </Link>
                  </nav>
                  <div className="mt-5 border-t border-[var(--brand-soft)] pt-5">
                    <LanguageToggle lang={lang} path="/" />
                  </div>
                </div>
              </details>

              <Link href={isAr ? "/?lang=ar" : "/"} className="justify-self-center text-center">
                <span className="block text-base font-semibold tracking-tight text-stone-950">
                  {content.legal.brandName}
                </span>
              </Link>

              <div className="justify-self-end">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[var(--brand)] bg-white shadow-[0_10px_24px_rgba(28,25,23,0.12)]">
                  <Image src="/logo.png" alt="Take a Sip logo" fill className="object-cover" sizes="44px" />
                </div>
              </div>
            </div>

            <div className="hidden items-center justify-between lg:flex">
              <Link href={isAr ? "/?lang=ar" : "/"} className="flex items-center gap-3 text-lg font-semibold tracking-tight text-stone-950">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--brand)] bg-white shadow-[0_10px_24px_rgba(28,25,23,0.12)]">
                  <Image src="/logo.png" alt="Take a Sip logo" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <span className="block">{content.legal.brandName}</span>
                  <span className="block text-xs font-medium tracking-[0.18em] text-[var(--brand)]">
                    {content.brandTagline}
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 lg:flex">
                <a href="#features" className="transition hover:text-stone-950">
                  {content.nav.features}
                </a>
                <a href="#how" className="transition hover:text-stone-950">
                  {content.nav.howItWorks}
                </a>
                <a href="#rewards" className="transition hover:text-stone-950">
                  {content.nav.rewards}
                </a>
                <Link href={`/privacy${legalSuffix}`} className="transition hover:text-stone-950">
                  {content.nav.privacy}
                </Link>
                <Link href={`/terms${legalSuffix}`} className="transition hover:text-stone-950">
                  {content.nav.terms}
                </Link>
              </nav>

              <LanguageToggle lang={lang} path="/" />
            </div>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,113,31,0.14),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(35,23,19,0.08),transparent_18%),linear-gradient(180deg,#fffaf3_0%,#fbf4eb_65%,#fbf4eb_100%)]" />
            <div className="pointer-events-none absolute left-[6%] top-20 h-24 w-24 rounded-full border border-[var(--brand)]/15 bg-white/50" />
            <div className="pointer-events-none absolute right-[8%] top-28 h-40 w-40 rounded-full border-[18px] border-[var(--brand)]/10" />
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] relative">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--brand-soft)] bg-[#fffaf3] px-4 py-2 text-sm font-semibold text-[var(--brand-dark)] shadow-[0_12px_32px_rgba(28,25,23,0.05)]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
                  <span>{content.hero.eyebrow}</span>
                </div>
                <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-stone-950 sm:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">{content.hero.description}</p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(186,113,31,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
                  >
                    {content.hero.primaryCta}
                  </a>
                  <Link
                    href={`/privacy${legalSuffix}`}
                    className="inline-flex items-center justify-center rounded-full border border-[var(--brand-soft)] bg-white px-6 py-4 text-sm font-semibold text-stone-900 shadow-[0_16px_32px_rgba(28,25,23,0.06)] transition hover:-translate-y-0.5"
                  >
                    {content.hero.secondaryCta}
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {content.hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[28px] border border-[var(--brand-soft)] bg-white p-5 shadow-[0_18px_40px_rgba(28,25,23,0.06)]">
                      <p className="text-2xl font-semibold text-[var(--brand-dark)]">{stat.value}</p>
                      <p className="mt-2 text-sm leading-6 text-stone-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-600">
                  {content.hero.highlights.map((item) => (
                    <div key={item} className="rounded-full bg-white px-4 py-2 shadow-[0_12px_30px_rgba(28,25,23,0.05)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full border-[10px] border-[var(--brand)]/15 bg-[var(--brand)]/10" />
                <div className="pointer-events-none absolute inset-x-6 top-12 h-64 rounded-[999px] bg-[radial-gradient(circle_at_center,#f0d3ac_0%,#ead4b8_44%,transparent_72%)] blur-sm" />
                <div className="pointer-events-none absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-[#2a1a14]" />
                <div className="absolute right-8 top-0 rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(28,25,23,0.1)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{content.hero.featuredLabel}</p>
                  <p className="mt-1 text-sm font-semibold text-stone-900">
                    {content.hero.featuredText}
                  </p>
                </div>
                <div className="relative">
                  <AppPreview lang={lang} />
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                  {content.nav.features}
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
                  {content.features.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-600">{content.features.description}</p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {content.features.items.map((feature) => (
                  <div
                    key={feature.title}
                    className="group rounded-[30px] border border-[var(--brand-soft)] bg-white p-7 shadow-[0_18px_40px_rgba(28,25,23,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(28,25,23,0.08)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5e1c3] text-lg font-semibold text-[var(--brand-dark)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                      {feature.title.charAt(0)}
                    </div>
                    <h3 className="text-xl font-semibold text-stone-950">{feature.title}</h3>
                    <p className="mt-3 text-base leading-7 text-stone-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="how" className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl rounded-[40px] border border-[var(--brand-soft)] bg-[linear-gradient(180deg,#fffdf9_0%,#fff6ea_100%)] p-8 shadow-[0_28px_70px_rgba(28,25,23,0.07)] lg:p-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                  {content.nav.howItWorks}
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">{content.how.title}</h2>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {content.how.steps.map((step, index) => (
                  <div key={step.title} className="rounded-[28px] border border-white/60 bg-white/80 p-7 shadow-[0_14px_32px_rgba(28,25,23,0.04)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-stone-950">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-stone-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative px-6 py-20 lg:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,transparent_0%,rgba(255,250,243,0.6)_20%,rgba(255,250,243,0.85)_100%)]" />
            <div className="relative mx-auto max-w-7xl">
              <div className="mb-10 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">{content.showcase.label}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
                  {content.showcase.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-600">{content.showcase.description}</p>
              </div>

              <div className="relative grid gap-6 lg:grid-cols-[1fr_1fr_0.85fr]">
                <div className="rounded-[32px] border border-[var(--brand-soft)] bg-white p-6 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink-soft)]">{isAr ? "القائمة" : "Menu"}</p>
                      <h3 className="mt-1 text-xl font-semibold text-stone-950">
                        {isAr ? "ترتيب واضح للأصناف" : "Structured for fast browsing"}
                      </h3>
                    </div>
                    <div className="rounded-full bg-[#f5e1c3] px-3 py-1 text-xs font-semibold text-[var(--brand-dark)]">
                      {isAr ? "الأكثر طلباً" : "Top picks"}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      [isAr ? "قهوة ساخنة" : "Hot Coffee", isAr ? "12 صنفاً" : "12 items"],
                      [isAr ? "مشروبات باردة" : "Cold Drinks", isAr ? "9 أصناف" : "9 items"],
                      [isAr ? "مخبوزات" : "Bakery", isAr ? "7 أصناف" : "7 items"],
                    ].map(([title, meta]) => (
                      <div key={title} className="flex items-center justify-between rounded-2xl bg-[#fff8ef] px-4 py-4">
                        <div>
                          <p className="font-semibold text-stone-900">{title}</p>
                          <p className="mt-1 text-sm text-stone-500">{meta}</p>
                        </div>
                        <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(180deg,#c87920_0%,#efcea1_100%)]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-[var(--brand-soft)] bg-white p-6 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-stone-500">{isAr ? "إتمام الطلب" : "Checkout"}</p>
                    <h3 className="mt-1 text-xl font-semibold text-stone-950">
                      {isAr ? "تخصيص دقيق وواضح" : "Simple, confidence-building checkout"}
                    </h3>
                  </div>
                  <div className="rounded-[28px] bg-[#fff8ef] p-5">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                      <div>
                        <p className="font-semibold text-stone-900">
                          {isAr ? "آيسد سبانيش لاتيه" : "Iced Spanish Latte"}
                        </p>
                        <p className="mt-1 text-sm text-stone-500">
                          {isAr ? "كبير • إسبريسو إضافي" : "Large • Extra shot"}
                        </p>
                      </div>
                      <span className="font-semibold text-stone-900">5.10 JD</span>
                    </div>
                    <div className="space-y-3 py-4 text-sm text-stone-600">
                      <div className="flex items-center justify-between">
                        <span>{isAr ? "طريقة الاستلام" : "Fulfillment"}</span>
                        <span className="font-semibold text-stone-900">
                          {isAr ? "استلام من الفرع" : "Store pickup"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{isAr ? "النقاط المستخدمة" : "Reward applied"}</span>
                        <span className="font-semibold text-emerald-700">-0.50 JD</span>
                      </div>
                    </div>
                    <button className="mt-3 w-full rounded-full bg-[var(--brand)] px-5 py-4 text-sm font-semibold text-white">
                      {isAr ? "تأكيد الطلب" : "Confirm order"}
                    </button>
                  </div>
                </div>

                <div className="rounded-[32px] border border-[var(--brand-soft)] bg-[linear-gradient(180deg,#f6e8d2_0%,#efd7b7_100%)] p-6 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                    {isAr ? "الثقة" : "Trust"}
                  </p>
                  <div className="mt-6 space-y-5">
                    {[
                      isAr ? "واجهة متوافقة مع النشر على متاجر التطبيقات" : "App-store ready legal and brand experience",
                      isAr ? "خطوات مألوفة تقلل التردد أثناء الطلب" : "Familiar patterns that reduce checkout hesitation",
                      isAr ? "تصميم سريع وخفيف للأجهزة المحمولة" : "Mobile-first layout with fast visual scanning",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-white px-4 py-4 text-sm font-medium leading-7 text-stone-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="rewards" className="px-6 py-20 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[36px] border border-[var(--brand-soft)] bg-[linear-gradient(180deg,#fffdfa_0%,#fff2dd_100%)] p-8 shadow-[0_24px_60px_rgba(28,25,23,0.06)] lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                  {content.nav.rewards}
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
                  {content.rewards.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-600">{content.rewards.description}</p>
                <div className="mt-8 rounded-[28px] bg-[#2a1a14] p-6 text-white shadow-[0_24px_50px_rgba(28,25,23,0.18)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                    {isAr ? "مكافأة العميل" : "Member perk"}
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    {isAr ? "مشروب مجاني بعد 6 طلبات مكتملة" : "Free handcrafted drink after 6 completed orders"}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {content.rewards.bullets.map((bullet, index) => (
                  <div
                    key={bullet}
                    className="rounded-[30px] border border-[var(--brand-soft)] bg-[#fffaf4] p-7 shadow-[0_18px_40px_rgba(28,25,23,0.05)]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
                      0{index + 1}
                    </p>
                    <p className="mt-6 text-lg font-semibold leading-8 text-stone-900">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="download" className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-[var(--brand-soft)] bg-[linear-gradient(180deg,#fffdfa_0%,#fff6ea_100%)] p-8 shadow-[0_30px_80px_rgba(28,25,23,0.08)] lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                    {isAr ? "التحميل" : "Download"}
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
                    {content.download.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">{content.download.description}</p>
                </div>
                <StoreBadges lang={lang} />
              </div>
            </div>
          </section>
        </main>

        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
