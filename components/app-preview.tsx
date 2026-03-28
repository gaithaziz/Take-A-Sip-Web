import { Lang } from "@/lib/content";

type AppPreviewProps = {
  lang: Lang;
};

export function AppPreview({ lang }: AppPreviewProps) {
  const isAr = lang === "ar";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[32px] border border-[var(--brand-soft)] bg-white p-5 shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
        <div className="rounded-[28px] bg-[#231713] p-3">
          <div className="rounded-[24px] bg-[#fcf2e4] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                  {isAr ? "صباح الخير" : "Good morning"}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-stone-900">
                  {isAr ? "ماذا ترغب اليوم؟" : "What would you like today?"}
                </h3>
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-dark)]">
                {isAr ? "248 نقطة" : "248 pts"}
              </div>
            </div>

            <div className="mb-5 flex items-center justify-between rounded-3xl bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(28,25,23,0.05)]">
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  {isAr ? "عرض اليوم" : "Today’s feature"}
                </p>
                <p className="mt-1 text-sm text-stone-500">
                  {isAr ? "لاتيه كراميل + كوكيز" : "Caramel latte + cookie"}
                </p>
              </div>
              <span className="rounded-full bg-[#f5e1c3] px-3 py-1 text-xs font-semibold text-[var(--brand-dark)]">
                6.20 JD
              </span>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              {[
                {
                  name: isAr ? "لاتيه كراميل" : "Caramel Latte",
                  meta: isAr ? "متوسط • حليب شوفان" : "Medium • Oat milk",
                  price: "4.80 JD",
                },
                {
                  name: isAr ? "فلات وايت" : "Flat White",
                  meta: isAr ? "مزدوج • ساخن" : "Double shot • Hot",
                  price: "3.90 JD",
                },
              ].map((item) => (
                <div key={item.name} className="rounded-3xl bg-white p-4 shadow-[0_12px_30px_rgba(28,25,23,0.06)]">
                  <div className="mb-3 flex h-28 items-end rounded-[24px] bg-[linear-gradient(180deg,#cd8a36_0%,#f0d7b2_100%)] p-3">
                    <div className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--brand-dark)]">
                      {isAr ? "الأكثر مبيعاً" : "Best seller"}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-stone-900">{item.name}</h4>
                      <p className="mt-1 text-sm text-stone-500">{item.meta}</p>
                    </div>
                    <span className="text-sm font-semibold text-stone-700">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-4 shadow-[0_12px_30px_rgba(28,25,23,0.06)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    {isAr ? "الطلب الحالي" : "Current order"}
                  </p>
                  <p className="mt-1 text-sm text-stone-500">
                    {isAr ? "جاهز خلال 12 دقيقة" : "Ready in 12 minutes"}
                  </p>
                </div>
                <span className="rounded-full bg-[#f4e3c9] px-3 py-1 text-xs font-semibold text-[var(--brand-dark)]">
                  {isAr ? "قيد التحضير" : "Preparing"}
                </span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-stone-100">
                <div className="h-2 w-2/3 rounded-full bg-[var(--brand)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="rounded-[32px] border border-[var(--brand-soft)] bg-white p-6 shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">
            {isAr ? "المكافآت" : "Rewards"}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-stone-900">
            {isAr ? "اطلب أكثر، واستفد أكثر" : "Order more, earn more"}
          </h3>
          <div className="mt-6 rounded-[28px] bg-[#2a1a14] p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-300">{isAr ? "الرصيد الحالي" : "Current balance"}</p>
                <p className="mt-2 text-3xl font-semibold">248</p>
              </div>
              <div className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white">
                {isAr ? "الفئة الذهبية" : "Gold tier"}
              </div>
            </div>
            <div className="mt-6 h-2 rounded-full bg-white/10">
              <div className="h-2 w-3/4 rounded-full bg-[#e7b26a]" />
            </div>
            <p className="mt-3 text-sm text-stone-300">
              {isAr ? "52 نقطة للوصول إلى مشروب مجاني" : "52 points until your next free drink"}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#fff7eb] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
                {isAr ? "هذا الشهر" : "This month"}
              </p>
              <p className="mt-2 text-xl font-semibold text-stone-900">18</p>
              <p className="mt-1 text-sm text-stone-500">
                {isAr ? "طلباً مكتملًا" : "completed orders"}
              </p>
            </div>
            <div className="rounded-2xl bg-[#fff7eb] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
                {isAr ? "الموفر" : "Saved"}
              </p>
              <p className="mt-2 text-xl font-semibold text-stone-900">12.40 JD</p>
              <p className="mt-1 text-sm text-stone-500">
                {isAr ? "من العروض" : "from rewards"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[var(--brand-soft)] bg-[#fff7eb] p-6 shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">
            {isAr ? "التتبع المباشر" : "Live tracking"}
          </p>
          <div className="mt-5 space-y-4">
            {[
              isAr ? "تم استلام الطلب" : "Order received",
              isAr ? "جارٍ التحضير في الفرع" : "Preparing in store",
              isAr ? "الطلب في الطريق" : "Out for delivery",
            ].map((label, index) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    index < 2 ? "bg-[var(--brand)]" : "bg-stone-300"
                  }`}
                />
                <p className="text-sm font-medium text-stone-700">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] bg-white p-4 shadow-[0_12px_30px_rgba(28,25,23,0.06)]">
            <p className="text-sm font-semibold text-stone-900">
              {isAr ? "آخر تحديث" : "Latest update"}
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              {isAr
                ? "تم تجهيز الطلب وسيتم تسليمه إلى المندوب خلال دقيقتين."
                : "Your order is packed and will be handed to the rider in about 2 minutes."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
