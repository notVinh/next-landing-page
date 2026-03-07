import React from "react";

interface InfoFieldProps {
  label: string;
  value?: string;
  isEditing?: boolean;
  registration?: any;
  type?: string;
  options?: { label: string; value: string }[];
}

export const InfoField = ({
  label,
  value,
  isEditing,
  registration,
  type = "text",
  options = [],
}: InfoFieldProps) => (
  <div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
      {label}
    </p>
    {isEditing && registration ? (
      type === "select" ? (
        <select
          {...registration}
          defaultValue={value}
          className="w-full text-sm font-bold text-slate-700 border-b-2 border-blue-400 bg-blue-50/50 focus:outline-none py-0.5 transition-all"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...registration}
          type={type}
          className="w-full text-sm font-bold text-slate-700 border-b-2 border-blue-400 bg-blue-50/50 focus:outline-none focus:bg-blue-50 transition-all py-0.5"
        />
      )
    ) : (
      <p className="text-sm font-bold text-slate-700 italic">
        {value || "Chưa nhập"}
      </p>
    )}
  </div>
);
