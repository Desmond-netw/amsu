"use client";

type RadioGroupProps = {
  label: string;
  name: string;
  value: string;
};

const RadioGroup = ({ label, name, value }: RadioGroupProps) => {
  const id = `${name}-${value}`;

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="w-4 h-4 text-blue-600"
      />

      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
    </div>
  );
};

export default RadioGroup;
