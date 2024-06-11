import Image from "next/image";
import AboutGrid from "../../components/shared/AboutGrid";
import { gridContent } from "../../constants/Content";
const AboutPage = () => {
  return (
    <div className="py-10">
      <h1 className="text-[#E8762B] text-[32px] text-center">ABOUT US</h1>
      <hr className="flex mx-auto w-[50%]" />
      <div className="md:flex gap-5  justify-center ">
        <div className="mt-5  ">
          <Image
            src="/about1.jpg"
            width={350}
            height={350}
            className="rounded-lg "
          />
        </div>
        <div className="flex-col  w-auto md:w-[760px] indent-[30px] text-[1.05rem] py-8">
          <p className=" mb-3 text-gray-800 dark:text-gray-400">
            Alpine Riverhill Villa is a modern & upscale vacation villa that is
            passionate about ‘making moments’ and recognising that small
            gestures make a big difference to our guests. We do ordinary things
            in an extraordinary way – a philosophy that has defined our brand’s
            success from the very start.
          </p>
          <p className=" mb-3 text-gray-800 dark:text-gray-400">
            At Alpine Riverhill, we embrace innovation to meet ever-changing
            guest needs. Our approach to service has remained consistent; warm,
            intuitive and personal.
          </p>
          <p className=" mb-3 text-gray-800 dark:text-gray-400">
            We believe our purpose is to create impressions that will stay with
            you for a lifetime. It comes from our belief that life is richer
            when we truly connect to the people and the world around us.
          </p>
          <p className=" mb-3 text-gray-800 dark:text-gray-400">
            From check in to check out and back again, it’s this blend of the
            indispensable, unexpected, and imperceptible that makes Alpine
            Riverhill Villa a top choice among many, and a destination unto
            itself.
          </p>
          <p className=" mb-3 text-gray-800 dark:text-gray-400">
            The primary goal of Alpine Riverhill Villa is the complete
            fulfilment of the guests’ needs and wishes. Whether a business trip,
            a group stay or a corporate event, we will go the extra mile to make
            you feel comfortable. Because at Alpine Riverhill, we want all our
            guests to feel totally at ease.
          </p>
          <p className=" mb-3 text-gray-800 dark:text-gray-400">
            Join a movement of people seeking more than just great
            accommodation.
          </p>
        </div>
      </div>
      <div>
        <div
          style={{ backgroundImage: "url('/bg.jpg')" }}
          className="h-auto md:h-[320px] bg-center bg-cover "
        >
          <div className="  py-[20px] container w-auto md:w-[1140px]">
            <h1 className="text-[#E8762B] text-[32px]  text-center">
              INTUITIVE SERVICE
            </h1>
            <div className="pb-[20px] ">
              <p className=" text-base  indent-5 text-white pt-5 pb-2">
                Behind the amenities and beyond the design details lies Alpine
                Riverhill's signature service philosophy. At the ready before
                guests’ call, invisible when privacy is prized, it's an
                intuitive approach with very tangible advantages.{" "}
              </p>
              <p className="text-base indent-5 text-white py-2">
                Service starts with guest needs innovatively anticipated, then
                uniquely accommodated. Warmth is a given, discretion an
                essential. Options for personalizing and streamlining your stay
                abound, with preferences assured on return visits.
              </p>
              <p className="text-base indent-5 text-white py-2">
                With a mission to overlook no detail or desire, the entire
                Alpine Riverhill staff is focused on delivering a seamless
                experience—for each guest and every request.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <div className="container md:w-[1110px]">
          <h1 className="text-[#E8762B] text-[32px] text-center">
            CORE VALUES OF ALPINE RIVERHILL
          </h1>
          <hr className="w-[50%] mx-auto flex" />
          <div className="mt-4">
            <p className=" indent-10 text-gray-800 text-base">
              At Alpine Riverhill, we are a professional, passionate, caring and
              empowering company that encourages innovation and engagement. We
              are a learning organisation committed to the retention and
              development of our people as an essential part of building strong,
              respectful and enduring guest relationships. Our staff are
              motivated, friendly and obsessive about enhancing the guest
              experience through meeting and exceeding expectations for quality
              service.
            </p>
          </div>
        </div>
      </div>
      <div>
        {gridContent.map((content) => {
          return <AboutGrid key={content.id} content={content} />;
        })}
      </div>
    </div>
  );
};

export default AboutPage;
