import HomeLayout from "@/components/Layouts/HomeLayout";
import Hero from "@/components/Home/Hero";
import Live from "@/components/Home/Live";
import Favorites from "@/components/Home/Favorites";
export default function Home() {
  // fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241").then((res) =>
  //   res.json().then((data) => console.log(data))
  // );
  return (
    <HomeLayout>
      <Hero />
      <Live />
      <Favorites />
    </HomeLayout>
  );
}
