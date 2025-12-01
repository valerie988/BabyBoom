import React from "react";
import Slider from "react-slick";
import { Heart } from "lucide-react";
import images from "../../types/images";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: images.breastfeeding,
    title: "Welcome to BabyBoom",
    subtitle: "Your companion for pregnancy and parenting",
    description:
      "Track your pregnancy journey, get expert tips, and connect with other parents.",
  },
  {
    image: images.edu,
    title: "Healthy Habits",
    subtitle: "Stay informed, stay healthy",
    description:
      "Learn about nutrition, exercises, and routines to keep you and your baby safe.",
  },
  {
    image: images.boom,
    title: "Community Support",
    subtitle: "Join the BabyBoom family",
    description:
      "Share experiences, ask questions, and get support from a vibrant community of parents.",
  },
];

const Index: React.FC = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    draggable: true,

    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-6 w-full flex justify-center">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-pink-300"></div>
    ),
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white relative overflow-hidden">

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      {/* Carousel */}
      <div className="w-full flex-1">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[70vh] md:h-[80vh]">

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-white/0 to-transparent backdrop-blur-xs"></div>

              {/* Text Content */}
              <div className="absolute bottom-14 w-full flex flex-col items-center px-6 text-center z-30">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 shadow-md">
                  <Heart className="text-pink-400 w-6 h-6" strokeWidth={1.5} />
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 text-gray-900">
                  {slide.title}
                </h1>

                <p className="text-pink-500 font-medium text-base md:text-lg mt-2">
                  {slide.subtitle}
                </p>

                <p className="text-gray-700 text-sm md:text-base mt-3 max-w-[90%] md:max-w-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Buttons */}
      <div className="w-full px-6 mb-8 flex flex-col items-center gap-4 z-30">
        <button
          className="w-full md:w-[400px] bg-pink-500 text-white font-semibold py-3 rounded-full text-lg hover:bg-pink-600 transition"
          onClick={() => navigate("/login")}
        >
          Login →
        </button>

        <button
          className="text-gray-500 text-sm hover:underline"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Index;
