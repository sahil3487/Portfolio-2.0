import { BsArrowRight } from 'react-icons/bs';
import Image from "next/image";
// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Hospital finder Mobile app",
          path: "/thumb1.jpg",
          githubUrl: "https://github.com/sahil3487/Hospital_finder-app.git",
        },
        {
          title: "Ecommrce",
          path: "/thumb3.jpg",
          githubUrl: "https://github.com/sahil3487/ecommerce-website-.git",
        },
        {
          title: "Project 2",
          path: "/thumb4.jpg",
          githubUrl: "https://github.com/sahil3487/NetFlix-Clone.git",
        },
        {
          title: "Project 2",
          path: "/thumb4.jpg",
          githubUrl: "https://github.com/sahil3487/ChatGpt-Clone.git",
        },
        // Add more projects with their GitHub URLs
      ],
    },
    // Add more slides if needed
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-1 gap-5 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div key={imageIndex} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <a href={image.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECTS</div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
