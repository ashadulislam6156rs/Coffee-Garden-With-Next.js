import Banner from "@/Componants/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto px-6 bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Banner></Banner>
      </main>
    </div>
  );
}
