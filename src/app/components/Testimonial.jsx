"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Star } from "lucide-react";

import Image from "next/image";

export function Testimonials({ testimonials }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next",
        }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white p-8 rounded-sm mb-8 relative w-full max-w-3xl mx-auto text-center">
                <p className="text-lg">{testimonial.text}</p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[16px] border-t-primary border-r-[12px] border-r-transparent" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={144}
                  height={144}
                  className="rounded-full object-cover size-36 object-center"
                />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-medium">{testimonial.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        id="prev"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-primary shadow-lg rounded-full transition-colors"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        id="next"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-primary shadow-lg rounded-full transition-colors"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
