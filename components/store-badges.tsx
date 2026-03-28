import { Lang } from "@/lib/content";

type StoreBadgesProps = {
  lang: Lang;
};

export function StoreBadges({ lang }: StoreBadgesProps) {
  const appStore = lang === "ar" ? "متوفر على App Store" : "Download on the App Store";
  const googlePlay = lang === "ar" ? "احصل عليه من Google Play" : "Get it on Google Play";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {[appStore, googlePlay].map((label) => (
        <a
          key={label}
          href="#"
          className="inline-flex min-w-52 items-center justify-center rounded-2xl border border-[var(--brand-soft)] bg-[#fffaf4] px-5 py-4 text-sm font-semibold text-stone-900 shadow-[0_16px_40px_rgba(28,25,23,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
