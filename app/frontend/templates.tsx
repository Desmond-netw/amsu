"use client";

import Link from "next/link";
import { RiToolsFill } from "react-icons/ri";

interface UnderDevelopmentProps {
  text: string;
}

const UnderDevelopment = ({ text }: UnderDevelopmentProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <RiToolsFill className="text-brand_1-500 text-6xl" />
        </div>

        <h1 className="text-2xl font-bold text-brand_1-700 mb-4">
          {text} Page Under Development
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          This page is currently being worked on. We’re building something great
          for you. Please check back soon.
        </p>

        <Link
          href="/"
          className="
            inline-block 
            bg-brand_1-500 hover:bg-brand_1-600 active:bg-brand_1-700
            text-white font-semibold 
            px-6 py-3 rounded-lg 
            transition-all
          "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
