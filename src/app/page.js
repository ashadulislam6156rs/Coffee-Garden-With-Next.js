import Banner from "@/Componants/Banner/Banner";
import BrewProcess from "@/Componants/HomeSections/BrewProcess";
import FollowUsParent from "@/Componants/HomeSections/FollowUsParent";
import OurPopulerProducts from "@/Componants/HomeSections/OurPopulerProducts";

import Testimonials from "@/Componants/HomeSections/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Banner></Banner>
        <OurPopulerProducts></OurPopulerProducts>
        <BrewProcess></BrewProcess>
        <FollowUsParent></FollowUsParent>
        <Testimonials></Testimonials>
      </main>
    </div>
  );
}
