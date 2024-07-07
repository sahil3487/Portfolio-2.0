import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

// Testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Web Developer',
    message: 'Working with Webiwork team has been a game-changer for me. Their expertise and dedication exceeded my expectations!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'UI/UX Designer',
    message: 'I\'m impressed with the creativity and precision of Cloudrent\'s designs. They truly understand user experience.',
  },
  {
    image: '/t-avt-3.png',
    name: 'John Doe',
    position: 'Project Manager',
    message: ' Delivered our project on time and within budget. Their professionalism and communication were outstanding.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] max-w-[1200px] mx-auto"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-1 h-full px-6 md:px-16 py-8 md:py-16 relative">
            {/* Avatar, name, and position */}
            <div className="w-full max-w-[300px] flex flex-col items-center  text-center md:text-left">
              <div className="mb-2 mx-auto">
                <Image src={person.image} width={100} height={100} alt={person.name} className="rounded-full" />
              </div>
              <div className="text-lg">{person.name}</div>
              <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
            </div>
            {/* Quote and message */}
            <div className="flex-1 flex flex-col justify-center relative xl:pl-20 mt-8 md:mt-0">
              <div className="mb-4 absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                <FaQuoteLeft className=" text-4xl xl:text-4xl text-white/20 " />
              </div>
              <div className="text-center md:text-left">{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
