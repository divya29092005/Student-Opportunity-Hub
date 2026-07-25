import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchFilter from "../components/SearchFilter";
import Featured from "../components/Featured";
import Categories from "../components/Categories";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SearchFilter />
      <Featured />
      <Categories />
    </>
  );
}

export default Home;