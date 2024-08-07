import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiGithubLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-x-5 text-lg lg:pl-10  ">
      <Link href="https://www.youtube.com/@mr.automotive3487" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
        <RiYoutubeLine />
      </Link>
      <Link href="https://www.facebook.com/ThakurShab28/" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
        <RiFacebookBoxLine />
      </Link>
      <Link href="https://www.instagram.com/thakur._.shab/" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
        <RiInstagramLine />
      </Link>
      <Link href="https://x.com/sahil3487" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
        <RiTwitterLine />
      </Link>
      <Link href="https://www.linkedin.com/in/sahil-singh-baghel/" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
        <RiLinkedinBoxLine />
      </Link>
      <Link href="https://github.com/sahil3487" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
