import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="#">
      <Image src="/assets/logo/logo.png" width={200} height={45} alt="" />
    </Link>
  );
};

export default Logo;
