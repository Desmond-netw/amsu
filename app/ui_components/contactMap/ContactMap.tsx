"use client";

import Image from "next/image";
import { Box, Grid, Flex, Heading, Text } from "@radix-ui/themes";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import Pretitle from "../pretitle/Pretitile";
import Container from "../Container";

const ContactMapSection = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
        {/* -----------  Contact Info and Map Image */}
        <Box>
          <Flex direction="column" gap="4">
            {/*================   Contact Info =============*/}
            <Box>
              <Pretitle text="Get In Touch" />
              <Heading size={{ initial: "1", md: "2", lg: "4" }}>
                {" "}
                Contact Information
              </Heading>
              <div className="flex flex-col gap-2">
                <Text size="2">
                  Have Some Questions?{" "}
                  <span className="text-brand_1-700">We're Here to Help!</span>
                </Text>
                <Text>
                  You can always feel free to contact us for your wastewater
                  services at the address and contact below.
                </Text>
                <Text
                  size={{ initial: "2", md: "4" }}
                  className="text-brand_1-700 font-bold"
                >
                  Accra Metro Sewerage Unit
                </Text>
              </div>
              {/* -- contact info box -- */}
              <Flex
                gap="3"
                direction={{ initial: "column", md: "row" }}
                justify={{ initial: "start", md: "center" }}
                mt="2"
              >
                <Box
                  as="div"
                  width="auto"
                  height="auto"
                  className="border border-brand_1-100 box-border shadow-md p-4"
                >
                  {/* phone icon and numbers */}
                  <div className="flex flex-col items-center gap-2">
                    <RiPhoneFill className="text-brand_1-700 text-2xl" />
                    <div className="text-sm text-center">
                      <p>+233 302 123 456</p>
                      <p>+233 302 654 321</p>
                    </div>
                  </div>
                </Box>
                <Box
                  as="div"
                  width="auto"
                  height="auto"
                  className="border border-brand_1-100 box-border shadow-md p-4"
                >
                  {/* email icon and mail */}
                  <div className="flex flex-col items-center gap-2">
                    <MdEmail className="text-brand_1-700 text-2xl" />
                    <div className="text-sm text-center">
                      <p>info@wastewater.com</p>
                    </div>
                  </div>
                </Box>
                <Box
                  as="div"
                  width="auto"
                  height="auto"
                  className="border border-brand_1-100 box-border shadow-md p-4"
                >
                  {/* location icon and address */}
                  <div className="flex flex-col items-center gap-2">
                    <ImLocation2 className="text-brand_1-700 text-2xl" />
                    <div className="text-sm text-center">
                      <p>
                        123 Wastewater Street,
                        <br />
                        Accra{" "}
                      </p>
                    </div>
                  </div>
                </Box>
              </Flex>
            </Box>
            {/*=============== Map Image ============== */}
            <div className="mt-6">
              <Image
                src="/assets/contact/accraMap.png"
                alt="Contact Map"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          </Flex>
        </Box>
        {/* Contact Form  */}
        <Box>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            accusamus repellat non nemo eum id alias illum quas tenetur fugiat
            fugit sed harum autem, modi ullam laudantium reiciendis consectetur
            magnam.
          </div>
        </Box>
      </Grid>
    </Container>
  );
};

export default ContactMapSection;
