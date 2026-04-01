interface PretitleProps {
  text: string;
  center?: boolean;
}

const Pretitle: React.FC<PretitleProps> = ({ text, center }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${
        center ? "justify-center" : ""
      }`}
    >
      {/* Left Accent */}
      <div className="w-3 h-[3px] rounded-full bg-brand_1-500" />

      {/* Text */}
      <p className="font-primary tracking-[3.2px] uppercase text-brand_1-700">
        {text}
      </p>

      {/* Right Accent */}
      <div className="w-3 h-[3px] rounded-full bg-brand_1-500" />
    </div>
  );
};

export default Pretitle;
