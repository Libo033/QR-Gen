import HeaderHome from "@/components/others/HeaderHome";
import QrSearcher from "@/components/others/QrSearcher";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto pt-8 px-4 sm:px-10 md:px-20 lg:px-28">
      <HeaderHome />
      <QrSearcher />
    </main>
  );
}
