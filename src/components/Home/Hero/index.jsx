import HomeHeroBanner from "./HomeHeroBanner";
import HomeCategoriesSearch from "./HomeCategoriesSearch";

export default function HomeHero() {
  return (
    <section id="home" className="section-padding-x">
      <div className="container max-w-screen-xl">
        <HomeHeroBanner />
        <HomeCategoriesSearch />
      </div>  
    </section>
  );
}
