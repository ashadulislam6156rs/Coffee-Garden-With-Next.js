import Banner from "@/Componants/Banner/Banner";
import FollowUsParent from "@/Componants/HomeSections/FollowUsParent";
import OurFeaturesProducts from "@/Componants/HomeSections/OurFeaturesProducts";
import Testimonials from "@/Componants/HomeSections/Testimonials";


export default function Home() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Banner></Banner>
        <OurFeaturesProducts></OurFeaturesProducts>
        <FollowUsParent></FollowUsParent>
        <Testimonials></Testimonials>
      </main>
    </div>
  );
}
