import Image from "next/image";
import avatarImage from "../public/avatar.png"; // Make sure this path is correct

const Avatar = () => {
  return (
    <div className=" hidden xl:flex xl:max-w-none justify-center items-center xl:mr-[50px] ">
      <Image
        src={avatarImage}
        width={580} // Adjusted width as per your modified dimensions
        height={580} // Adjusted height as per your modified dimensions
        alt="Avatar Image"
        className="translate-z-0"
      />
    </div>
  );
};

export default Avatar;