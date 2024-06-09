import HomeSlider from "../components/shared/HomeSlider";
import GridSlider from "../components/shared/GridSlider";
import EnquiryForm from "../components/shared/EnquiryForm";
export default function Home() {
  return (
    <main className="">
      <HomeSlider />
      <div className="p-3 mt-[40px]">
        <h1 className="text-[32px] text-[#E8762B] text-center">
          WELCOME TO ALPINE RIVERHILL
        </h1>
        <p className="text-[24px] text-[#212529] text-center">
          Luxury Redefined
        </p>
      </div>
      <hr className="w-[638px] mx-auto" />
      <GridSlider />
      <EnquiryForm />
      <div className="mt-[40px]">
        <h1 className="text-center text-[#E8762B] text-[32px]">
          BEAUTY OF ALPINE RIVERHILL
        </h1>
        <p className="text-center  text-[24px]">
          Live the moment, create memories and cherish them forever!
        </p>
      </div>
    </main>
  );
}
