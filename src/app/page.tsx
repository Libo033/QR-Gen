import MyInfo from "@/components/navigation/MyInfo";
import LinkShortener from "@/components/others/LinkShortener";
import QrCreator from "@/components/others/QrCreator";
import QrSearcher from "@/components/others/QrSearcher";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto pt-8 pb-20 px-4 sm:px-24 md:px-20 lg:px-28">
      <section className="flex flex-col gap-4">
        <LinkShortener />
        <QrCreator />
        <QrSearcher />
        <MyInfo />
      </section>
    </main>
  );
}
