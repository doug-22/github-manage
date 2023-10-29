import { InputProps } from '@/app/types'
import { Wrapper } from './styles'
import { BiSolidErrorCircle } from 'react-icons/bi'

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
  $typeInput = 'login',
}: InputProps) {
  return (
    <Wrapper width={width} height={height} $error={!!errorMessage}>
      <h3>
        {label} {required && <strong>*</strong>}
      </h3>
      {onChange ? (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={$typeInput}
        />
      ) : (
        <>
          <input
            type="text"
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            {...register(id, { required })}
            className={$typeInput}
          />
        </>
      )}
      {errorMessage && (
        <span>
          <BiSolidErrorCircle /> {errorMessage}
        </span>
      )}
    </Wrapper>
  )
}
