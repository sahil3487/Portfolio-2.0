// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import {SiAndroid , SiAndroidstudio,  SiCampaignmonitor, SiNextdotjs, SiWeb3Dotjs , SiUikit } from "react-icons/si";
// data
const serviceData = [
  {
    icon: <SiWeb3Dotjs  />,
    title: "Web Development",
    description: "MERN stack, performance, stunning design for dynamic applications",
  },
  {
    icon: <SiNextdotjs/>,
    title: "Ui Ux Development",
    description: "Sleek, responsive, stunning UIs tailored for dynamic web applications.",
  },
  {
    icon: <SiAndroidstudio />,
    title: " Mobile Development",
    description: "Dynamic apps with MERN stack, seamless performance, stunning design",
  },
];

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className=" flex h-[240px] sm:h-[340px]"
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index}>
          <div className=" bg-[rgba(65,47,123,0.5)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169 0.15)] transition-all duration-300">
            <div>
              <div className=" text-4xl text-accent mb-4">{service.icon}</div>
              <div className=" mb-8">
                <div className="mb-2 text-lg">{service.title}</div>
                <p>{service.description}</p>
              </div>
              <div className=" text-3xl">
                <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
