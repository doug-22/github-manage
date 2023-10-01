import { InputProps } from '@/app/types'
import { Wrapper } from './styles'

export default function Input({
  label,
  placeholder,
  width,
  height,
  onChange,
  disabled,
  register,
  id,
  required,
  errorMessage,
}: InputProps) {
  return (
    <Wrapper width={width} height={height}>
      <h2>{label}</h2>
      {onChange ? (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      ) : (
        <>
          <input
            type="text"
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            {...register(id, { required })}
          />
          {errorMessage && <span>{errorMessage}</span>}
        </>
      )}
    </Wrapper>
  )
}
