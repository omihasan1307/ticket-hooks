const InputField = ({
  placeholder,
  value,
  onChange,
  onBlur,
  onEnter,
  error,
}: {
  placeholder: string;
  value: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onEnter?: (value: string) => void;
  error?: boolean;
}) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    className={`w-full px-4 py-5 focus:outline-none duration-300 hover:duration-300 rounded border ${
      error ? "border-red-500" : "hover:border-baseColor"
    }`}
    onChange={(e) => onChange?.(e.target.value)}
    onBlur={(e) => onBlur?.(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") onEnter?.(e.currentTarget.value);
    }}
  />
);

export default InputField;
