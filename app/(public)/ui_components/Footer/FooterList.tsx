"use client";

interface FooterListProps {
  children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div
      className="
           w-full
           sm:w-1/2
           md:w-1/4
           mb-6 
           lg:w-1/6 
           flex 
           flex-col 
           gap-4 
        "
    >
      {children}
    </div>
  );
};

export default FooterList;
