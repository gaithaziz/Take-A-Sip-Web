import { LegalPage } from "@/components/legal-page";
import { getLang } from "@/lib/content";

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = getLang(params.lang);

  return <LegalPage lang={lang} page="terms" />;
}
