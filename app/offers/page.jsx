"use client";
// import { CardContent } from "../../@/components/ui/card";
import Card from "../../components/shared/Card";
import { cardContent } from "../../constants/Content";
const page = () => {
  return (
    <div className="p-8">
      <h1 className="text-[#E8762B] text-[32px] text-center">
        OFFERS AT ALPINE RIVERHILL
      </h1>
      <p className="text-center text-[24px] mb-2">Guest Reward Programmes</p>
      <hr className="w-[50%] mx-auto" />
      <div className="flex justify-center container mt-8 mb-16">
        <div className="grid md:grid-cols-3 gap-4  ">
          {cardContent.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
