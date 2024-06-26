import Image from "next/image"
import im  from "../public/top-left-img.png";

const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[2000px] xl:w-[400px]
  opacity-50">

    <Image src= {im} widtth = {400} height={400} />
    
  </div>;
};

export default TopLeftImg;
