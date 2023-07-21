"use client";
import Cross from "@/assests/images/Cross";
import Logo from "@/assests/images/Logo";
import Menu from "@/assests/images/Menu";

type Props = {
  showMenus: boolean;
  setShowMenus: (arg: boolean) => void;
};

export default function Navbar({ showMenus, setShowMenus }: Props) {
  return (
    <nav className="border-2 border-black text-white flex justify-between px-5 py-4">
      <div className="flex">
        <Logo />
        <h2>Lorem</h2>
      </div>
      <div className="md:hidden" onClick={() => setShowMenus(!showMenus)}>
        {showMenus ? <Cross /> : <Menu />}
      </div>
    </nav>
  );
}
