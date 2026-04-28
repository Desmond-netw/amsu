"use client";

type FormGroupProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

const FormGroup = ({
  label,
  name,
  type = "text",
  placeholder = "",
}: FormGroupProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-bold text-slate-600 uppercase tracking-wider"
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="border-b border-black w-full outline-none bg-transparent text-sm py-1"
      />
    </div>
  );
};

export default FormGroup;
