import Image from "next/image";
import React from "react";
import { TbBrandHipchat } from "react-icons/tb";
import { RiShareForward2Fill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer overflow-scroll">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/112415343?v=4"
            alt="user-image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Sumit Shandillya</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            blanditiis, alias iusto perferendis, eius ipsum, ipsa harum ratione
            officia natus quae corrupti neque illo incidunt dolorum aspernatur.
            Ducimus, eius quod.
          </p>
          <div className="flex justify-between mt-5 text-lg items-center pr-10">
            <div>
              <TbBrandHipchat />
            </div>
            <div>
              <RiShareForward2Fill />
            </div>
            <div>
              <AiOutlineLike />
            </div>
            <div>
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
