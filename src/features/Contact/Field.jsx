import React, { memo } from "react";
import { cn, baseInput, normal, errorCls } from "./styles";
import { AlertCircle } from "lucide-react";

export const Field = memo(function Field({
  id,
  label,
  icon: Icon,
  error,
  inputProps,
  textarea,
  register,
  hintRight,
  className,
}) {
  const hasError = Boolean(error);
  const inputClass = cn(
    baseInput,
    hasError ? errorCls : normal,
    Icon && !textarea && "pl-10",
    textarea && "min-h-[140px] resize-none"
  );

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && !textarea && (
          <Icon className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
        )}
        {textarea ? (
          <textarea
            id={id}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={inputClass}
            {...register}
            {...inputProps}
          />
        ) : (
          <input
            id={id}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={inputClass}
            {...register}
            {...inputProps}
          />
        )}
        {hasError && (
          <p id={`${id}-error`} className="text-red-600 text-sm flex items-center mt-2">
            <AlertCircle className="w-4 h-4 mr-1" /> {error?.message}
          </p>
        )}
        {hintRight && <div className="flex justify-between items-center mt-2">{hintRight}</div>}
      </div>
    </div>
  );
});
