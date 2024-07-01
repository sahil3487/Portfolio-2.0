// Next image

import Image from "next/image";

//next Link
import Link from "next/link";
//components

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className=" absolute  xl:-left-60 z-30 w-full flex items-center px-17 xl:px-0 xl:h-[150px] xl:p-2 ">
      <div className=" container mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-5 py-5">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={320}
              height={50}
              alt=""
              priority={true}
            />
          </Link>
        </div>

        {/* socials */}
        <Socials />
      </div>
    </header>
  );
};

export default Header;
