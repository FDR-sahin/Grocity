import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import cus1 from "../../assets/customer1.jpg";
import cus2 from "../../assets/customer2.jpg";
import cus3 from "../../assets/customer3.jpg";
import cus4 from "../../assets/customer4.jpg";
import cus5 from "../../assets/customer5.jpg";
import pic  from "../../assets/pic.jpeg";
import { IoIosStar } from "react-icons/io";

function Testimonials() {
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading firstH="Customers" secondH="Saying" />

        <div className="py-7 flex justify-end gap-5">
          <button className="custom-prev text-2xl text-zinc-800 bg-zinc-100 p-2 rounded-lg hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <FaChevronLeft />
          </button>
          <button className="custom-next text-2xl text-zinc-800 bg-zinc-100 p-2 rounded-lg hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <FaChevronRight />
          </button>
        </div>

        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
        loop={true}
        breakpoints={{
          640: {slidesPerView: 1, spaceBetween: 20},
          768: {slidesPerView: 2, spaceBetween: 20},
          1024: {slidesPerView: 3, spaceBetween: 20},
        }}
         modules={[Navigation]} className="mySwiper">
          {reviesw.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 p-8 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-400 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} alt="" className="w-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex gap-x-2 text-amber-500 mt-2 text-xl">
                      {
                        Array.from({length: item.rating}, (_, index) => (
                           <IoIosStar />
                        ))
                      }
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

const reviesw = [
  {
    id: 1,
    name: "Sahin Miah",
    profession: "Developer",
    rating: "5",
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: pic,
  },
  {
    id: 2,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: "5",
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: cus1,
  },
  {
    id: 3,
    name: "David Smith",
    profession: "Chef",
    rating: "4",
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: cus2,
  },
  {
    id: 4,
    name: "Alya Zahra",
    profession: "Model",
    rating: "3",
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable.",
    image: cus3,
  },
  {
    id: 5,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: "5",
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: cus4,
  },
  {
    id: 6,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: "4",
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: cus5,
  },
];
