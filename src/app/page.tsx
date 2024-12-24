import HomeFifth from "@/shared/components/Home/Home.fifth";
import HomeFirst from "@/shared/components/Home/Home.First";
import HomeFourth from "@/shared/components/Home/Home.fourth";
import HomeSecond from "@/shared/components/Home/Home.second";
import HomeSixth from "@/shared/components/Home/Home.Sixth";
import HomeThird from "@/shared/components/Home/Home.third";

export default function Home() {
  return (
    <div className="px-2 lg:px-0">
      <HomeFirst />
      <HomeSecond />
      <HomeFourth />
      <HomeThird />
      <HomeFifth />
      <HomeSixth />
    </div>
  );
}
