import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex flex-auto justify-center lg:justify-start gap-x-5 text-lg">
      <Link
        href="https://youtube.com"
        className="hover:text-accent transition-all duration-300 transform hover:scale-110"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href="https://facebook.com"
        className="hover:text-accent transition-all duration-300 transform hover:scale-110"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href="https://instagram.com"
        className="hover:text-accent transition-all duration-300 transform hover:scale-110"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://dribbble.com"
        className="hover:text-accent transition-all duration-300 transform hover:scale-110"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href="https://behance.net"
        className="hover:text-accent transition-all duration-300 transform hover:scale-110"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href="https://linkedin.com"
        className="hover:text-accent transition-all duration-300 transform hover:scale-110"
      >
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;