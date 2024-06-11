import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  return (
    <section className="py-1">
      <div className="container ">
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="h-[640px] md:h-96 w-full rounded-lg flex items-center"
          >
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  A stay at Alpine Riverhill let's you experience Lonavala's
                  natural beauty in an intimate environment. One of Lonavala's
                  most sought-after villas, a stay at Alpine Riverhill promises
                  all the comforts of home and the luxury of a hotel. Located
                  amongst greenery, this grand space is replete with amenities.
                  Here, you can spend your days enjoying the soothing mountain
                  breeze as the on-site staff attend to your needs. As the sun
                  sets, take a stroll by the pool, where you can enjoy
                  mouth-watering grilled tandoori dishes.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  For those seeking serenity, Alpine Riverhill offers a perfect
                  location peacefully nestled in a cozy environment. The villa's
                  natural beauty and five star amenities make it an
                  unforgettable place to call your own. Each morning, enjoy the
                  birds chirping while savoring your breakfast.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  It is almost too easy to fall in love with the warm and
                  welcoming ambience, great food, hospitality and aminities.
                  While you'll have no shortage of options, I recommend the
                  tasty barbecue and sheesha by the poolside. Combine everything
                  Alpine Riverhill has to offer and you will have the recipe for
                  an ideal vacation for family and friends alike.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  You would never want to leave this tranquil getaway
                  overlooking the mesmerizing tree cover. Alpine Riverhill, a
                  luxury boutique villa, embodies peace and serenity. It's
                  elegant design blends into the surrounding vistas and
                  landscapes. Enjoy the contemporary comforts of this villa with
                  hours spent relaxing on sun loungers and diving into the
                  refreshing waters of your own private swimming pool.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  Whether it's your first time visiting or hundredth, Alpine
                  Riverhill never fails to impress. From the library to the
                  barbeque and bonfire, from hookah to the games and the music
                  system, there's somethWhether it's your first time visiting or
                  hundredth, Alpine Riverhill never fails to impress. From the
                  library to the barbeque and bonfire, from hookah to the games
                  and bonfire, there's something here for everyone
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  Alpine Riverhill is the ideal destination for your next family
                  reunion. Tucked away behind lush greenery and trees, this
                  villa offers the perfect balance of privacy and accessibility
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  Pool parties, barbeque, bonfire and sheesha - all of the above
                  are on the menu at this luxe villa in Lonavla. A stay here is
                  about decadent leisure. It's hard to imagine a better vacation
                  without Alpine RiverHill.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  More than a vacation rental, Alpine Riverhill feels like a
                  luxirious hotel. We enjoyed the resort-like amenities and
                  hospitality complimented by the surrounding lush greenery.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  Warning: you may never want to leave this jaw-dropping
                  villa.Alpine Riverhill is the ideal retreat when in Lonavala.
                  It will leave you spellbound. The space gives you a fresh
                  modern vibe with loads of coziness that's sophisticated and
                  welcoming. The 6 master bedroom villa comes complete with a
                  housekeeper, private swimming pool and an exceptional chef,
                  all waiting to make your stay a memorable one.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  Alpine Riverhill is the ideal retreat when in Lonavala. It
                  will leave you spellbound. The space gives you a fresh modern
                  vibe with loads of coziness that's sophisticated and
                  welcoming. The 6 master bedroom villa comes complete with a
                  housekeeper, private swimming pool and an exceptional chef,
                  all waiting to make your stay a memorable one.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  Luxury at its peak. Went with friends to celebrate a birthday.
                  Extremely courteous staff and management. The rooms area
                  really clean and the food is just spectacular. We also did a
                  barbecue there by the poolside and the food was so good. The
                  pool was really clean and so was the bungalow. Definitely
                  recommend going to this place!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <div className="flex flex-col h-full justify-center px-4">
                <p className="text-xl text-center px-10">
                  At Alpine Riverhill, we inspire fairness and trust in our
                  day-to-day dealings with our stakeholders by saying what we
                  mean and synchronizing our words and actions. We take full
                  accountability for our actions.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}
