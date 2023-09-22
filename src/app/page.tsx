import LeftNav from "@/components/LeftNav";
import MainNav from "@/components/MainNav";
import Nav from "@/components/Nav";
import RightNav from "@/components/RightNav";

export default function Home() {
  return (
    <div>
      <div className="w-screen text-center p-2 text-lg font-medium  ">
        Figma Design by
        <a
          href="https://www.figma.com/@efe"
          className="underline text-[#BBBBBB] ml-1"
        >
          efe
        </a>
      </div>
      <div className=" pl-4   ">
        <Nav />
        <div className="grid grid-cols-12 ">
          <LeftNav />
          <MainNav />
          <RightNav />
        </div>
      </div>
    </div>
  );
}
