"use client";
import logo_main from "../public/logo.png";
import logo_stacked from "../public/logo_stacked.png";
import Image from "next/image";
import { TbBrandGoogleHome } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { RiBellLine } from "react-icons/ri";
import { LuMessageSquareDashed } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import FeedCard from "@/components/Feed Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphql } from "@/gql";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { graphqlClient } from "@/clients/api";

interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: SidebarButton[] = [
  {
    title: "Home",
    icon: <TbBrandGoogleHome />,
  },
  {
    title: "Explore",
    icon: <MdOutlineExplore />,
  },
  {
    title: "Notifications",
    icon: <RiBellLine />,
  },
  {
    title: "Messages",
    icon: <LuMessageSquareDashed />,
  },
  {
    title: "Starred",
    icon: <FaRegStar />,
  },
  {
    title: "Profile",
    icon: <LuUser2 />,
  },
  {
    title: "Monetize",
    icon: <FaIndianRupeeSign />,
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google token not found`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success("Verified Success");
      console.log(verifyGoogleToken);

      if (verifyGoogleToken) {
        window.localStorage.setItem("__squad_token", verifyGoogleToken);
      }
    },
    []
  );

  return (
    <div className="">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 pr-5 px-4">
          <div className="hover:outline-dotted outline-yellow-600 p-2 rounded-full cursor-pointer transition-all">
            <Image src={logo_main} alt="Picture of the author" />
          </div>
          <div className="mt-4 text-2xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-yellow-900 rounded-full px-5 py-2 cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 ">
              <button className="bg-[#FF9900] font-semibold text-lg p-4 rounded-full w-full mt-4">
                Add Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-yellow-900 rounded-lg">
            <h1 className="my-2 text-2xl">New to the SQUAD?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}
