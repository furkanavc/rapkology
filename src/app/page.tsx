import HomeLayout from "@/components/Layouts/HomeLayout";
import Hero from "@/components/Home/Hero";
import Live from "@/components/Home/Live";
import Favorites from "@/components/Home/Favorites";
import Trends from "@/components/global/Trends";
import Explore from "@/components/global/Explore";
import Filter from "@/components/global/Explore/Filter";
import Footer from "@/components/Layouts/Footer";
import { FilterProvider } from "@/context/FilterContext";
export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <Live />
      <Trends />
      <Favorites />
      <FilterProvider>
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          <Explore />
          <div className="space-y-20 lg:w-1/4">
            <Filter className="hidden lg:block" />
            <Footer />
          </div>
        </div>
      </FilterProvider>
    </HomeLayout>
  );
}
