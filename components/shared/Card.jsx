import { FaCrown, FaWallet } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";

const CardPage = ({ id, card }) => {
  return (
    <Card className="rounded-none border shadow-xl pb-3  w-auto lg:w-[350px] h-auto lg:h-[300px]  ">
      <CardHeader className="gap-2">
        <CardTitle className="flex items-center gap-3 justify-center  text-2xl font-normal text-[#fb3]">
          <FaCrown className="w-[30px] h-[24px] " />
          {card.title}
        </CardTitle>
        <hr className="flex mx-auto w-[50%]" />
        <CardDescription className="flex text-[#747373] justify-center text-[.9rem] text-center">
          {card.description}
        </CardDescription>
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center gap-2 py-4 px-8 text-sm  bg-[#fb3] font-normal text-white shadow-md  focus:outline-none mt-4"
          >
            <FaWallet />
            GRAB NOW
          </button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardPage;
