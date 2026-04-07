"use client";

import { Box, Card, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import Button from "../button/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Box className="w-full">
      <Card
        size="3"
        className="
          rounded-xl 
          bg-white
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
          transition-all duration-300
        "
      >
        {/* Image with padding */}
        <div className="p-3">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
              className="object-cover w-full h-[200px] bg-brand-100"
            />
          </div>
        </div>

        {/* Title */}
        <Text size="4" className="mt-2 block font-semibold text-brand-700 px-4">
          <Strong>{title}</Strong>
        </Text>

        {/* Brand underline */}
        <div className="w-16 h-[3px] bg-brand-500 rounded-full mt-2 mb-4 ml-4"></div>

        {/* Description */}
        <Text
          as="p"
          size="3"
          className="text-gray-600 leading-relaxed px-4 mb-6"
        >
          {description.substring(0, 120)}...
        </Text>

        {/* Button */}
        <div className="px-4 pb-4">
          <Button text="Read More" linkstring="/caseStudies" />
        </div>
      </Card>
    </Box>
  );
};

export default ProjectCard;
