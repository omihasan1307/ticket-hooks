import HomeFourth from "@/shared/components/Home/Home.fourth";
import HomeSecond from "@/shared/components/Home/Home.second";
import HomeThird from "@/shared/components/Home/Home.third";

export default function Home() {
  return (
    <div className="px-2 lg:px-0">
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
    </div>
  );
}
