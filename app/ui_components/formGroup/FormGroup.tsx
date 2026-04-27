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
        className="border border-slate-200 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
      />
    </div>
  );
};

export default FormGroup;
