import { InputProps } from "@/app/types";
import { Wrapper } from "./styles";

export default function Input({
  label,
  placeholder,
  width,
  height,
  onChange,
  disabled,
}: InputProps) {
  return (
    <Wrapper
      width={width}
      height={height}
    >
      <h2>{label}</h2>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </Wrapper>
  )
}