"use client";
import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FormFieldProps =
  | ({
      as?: "input";
      label: string;
      required?: boolean;
    } & InputHTMLAttributes<HTMLInputElement>)
  | ({
      as: "textarea";
      label: string;
      required?: boolean;
      rows?: number;
    } & TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({
      as: "select";
      label: string;
      required?: boolean;
      options: { value: string; label: string }[];
    } & SelectHTMLAttributes<HTMLSelectElement>)
  | ({
      as: "radio";
      label: string;
      required?: boolean;
      name: string;
      options: { value: string; label: string }[];
    } & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name">)
  | ({
      as: "checkbox";
      label: string;
      required?: boolean;
      name: string;
      options?: { value: string; label: string }[]; // opcional p/ múltiplos
    } & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name">);

export default function FormField(props: FormFieldProps) {
  const { label, required = false } = props;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {props.as === "select" ? (
        <select
          {...props}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                   focus:border-blue-500 focus:ring-blue-500 p-2"
        >
          {props.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : props.as === "textarea" ? (
        <textarea
          {...props}
          rows={props.rows || 3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                   focus:border-blue-500 focus:ring-blue-500 p-2 resize-y"
        />
      ) : props.as === "radio" ? (
        <div className="flex gap-4">
          {props.options?.map((option) => (
            <label key={option.value} className="inline-flex items-center">
              <input
                type="radio"
                value={option.value}
                {...props}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : props.as === "checkbox" ? (
        props.options ? (
          <div className="flex flex-wrap gap-2">
            {props.options.map((option) => (
              <label key={option.value} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={option.value}
                  {...props}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        ) : (
          <label className="inline-flex items-center">
            <input type="checkbox" {...props} className="mr-2" />
            {label}
          </label>
        )
      ) : (
        <input
          {...props}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-blue-500 focus:ring-blue-500 p-2"
        />
      )}
    </div>
  );
}
