import LeftNav from "./components/LeftNav";
import MainNav from "./components/MainNav";
import Nav from "./components/Nav";
import RightNav from "./components/RightNav";

export default function Home() {
  return (
    <div className=" pl-4">
      <Nav />
      <div className="grid grid-cols-12">
        <LeftNav />
        <MainNav />
        <RightNav />
      </div>
    </div>
  );
}
