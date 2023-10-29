import { AiOutlineSearch } from 'react-icons/ai'
import Button from '../Button'
import { Input, Wrapper } from './styles'
import { InputSearchProps } from '@/app/types'
import { useTheme } from 'styled-components'

export default function InputSearch({
  width,
  onChange,
  onClick,
}: InputSearchProps) {
  const theme = useTheme()

  return (
    <Wrapper width={width}>
      <Input placeholder="Search" onChange={onChange} />
      <Button
        width="38px"
        height="38px"
        $background="transparent"
        icon={<AiOutlineSearch size={20} color={theme.colors.grayFont} />}
        onClick={onClick}
      />
    </Wrapper>
  )
}
