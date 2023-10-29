import { ButtonProps } from '@/app/types'
import { WrapperButton } from './styles'

export default function Button({
  label,
  width,
  height,
  onClick,
  disabled,
  $background = 'primary',
  icon,
  type = 'button',
}: ButtonProps) {
  return (
    <WrapperButton
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      $background={$background}
      type={type}
    >
      {label} {icon && icon}
    </WrapperButton>
  )
}
