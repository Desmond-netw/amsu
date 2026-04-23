import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
// import Image from "next/image";

import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

import { Avatar, Flex } from "@radix-ui/themes";

// ========== social media links array===========
const socialMediaLinks = [
  { Icon: MdFacebook, url: "#" },
  { Icon: AiFillTwitterCircle, url: "#" },
  { Icon: AiFillYoutube, url: "#" },
  { Icon: AiFillInstagram, url: "#" },
  { Icon: FaWhatsapp, url: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-brand_1-800 py-4 text-brand_1-100">
      <Container>
        {/*  Footer content  */}
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-10">
          {/* ---------Footer list 1 */}
          <FooterList>
            <h3 className="text-brand_1-100 text-base font-bold">Services</h3>
            <ul className="text-brand_1-200">
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Water Treatment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Sewage Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Drainage Solutions
                </Link>
              </li>
            </ul>
          </FooterList>{" "}
          {/* -------Footer list 2 end */}
          <FooterList>
            <h3 className="text-brand_1-100 text-base font-bold">
              Customer Service
            </h3>
            <ul className="text-brand_1-200">
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand_1-300">
                  Live Chat
                </Link>
              </li>
            </ul>
          </FooterList>{" "}
          {/* Footer list 2 end */}
          {/* -----------Footer about us */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-brand_1-100 text-base font-bold">About Us</h3>
            <p className="text-brand_1-200 mt-2">
              Accra Metro Sewerage Unit (AMSU) is a premier provider of sewerage
              and wastewater management services in Ghana, renowned for our
              commitment to delivering reliable, efficient, and environmentally
              responsible solutions.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Accra Metro Sewerage Unit. All
              rights reserved.
            </p>
          </div>
          {/* -------- footer media and logo wrapper */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-start gap-4">
            <h3 className="text-brand_1-100 text-base font-bold">Follow Us</h3>
            <div className="flex items-center gap-4">
              {/* Social media icons */}
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 text-base text-brand_1-200 hover:text-brand_1-300"
                >
                  <link.Icon />
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Flex align="center" gap="2">
              <Avatar
                size={{ initial: "5", md: "7", lg: "8", xl: "9" }}
                src="/assets/logo/logo.png"
                fallback="AMSU"
              />
              <Avatar
                size={{ initial: "5", md: "7", lg: "8", xl: "9" }}
                src="/assets/logo/coatOfArms.png"
                fallback="AMSU"
              />
            </Flex>
          </div>
          {/* Footer list 3 end */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
