import HeaderHome from "@/components/others/HeaderHome";
import LinkShortener from "@/components/others/LinkShortener";
import QrSearcher from "@/components/others/QrSearcher";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto pt-8 px-4 sm:px-10 md:px-20 lg:px-28">
      <HeaderHome />
      <QrSearcher />
      <LinkShortener />
    </main>
  );
}
