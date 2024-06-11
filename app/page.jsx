import HomeSlider from "../components/shared/HomeSlider";
import GridSlider from "../components/shared/GridSlider";
import EnquiryForm from "../components/shared/EnquiryForm";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeSlider />
      <div className="p-3 mt-[40px]">
        <h1 className="text-[32px] text-[#E8762B] text-center">
          WELCOME TO ALPINE RIVERHILL
        </h1>
        <p className="text-[24px] text-[#212529] text-center">
          Luxury Redefined
        </p>
      </div>
      <hr className="w-full md:w-[638px] mx-auto" />
      <GridSlider />
      <EnquiryForm />
      <div className="mt-[40px] px-4">
        <h1 className="text-center text-[#E8762B] text-[32px]">
          BEAUTY OF ALPINE RIVERHILL
        </h1>
        <p className="text-center text-[24px]">
          Live the moment, create memories and cherish them forever!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[100vh] px-4">
        <iframe
          src="https://www.youtube.com/embed/SEadiIzqr_E"
          frameBorder="0"
          allowFullScreen
          className="rounded-md shadow-md w-full max-w-[800px] h-[50vh]"
        />
        <button
          type="button"
          className="flex items-center gap-2 py-3 text-sm px-4 bg-[#fb3] font-normal text-white shadow-md hover:bg-orange-700 focus:outline-none mt-4"
        >
          VIEW PHOTOS
          <FaAngleDoubleRight />
        </button>
      </div>
    </main>
  );
}
