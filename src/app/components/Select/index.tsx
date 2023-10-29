import { FilterAndOrderProps } from '@/app/types'
import React from 'react'
import Select, { createFilter } from 'react-select'
import { useTheme } from 'styled-components'

interface AutocompleteProps {
  placeholder: string
  options: Array<FilterAndOrderProps>
  onChange: (e: any) => void
  width: string
  isClearable?: boolean
  value?: FilterAndOrderProps | null | string
  defaultValue?: FilterAndOrderProps
  disabled?: boolean
  noMenuPortalTarget?: boolean
  loading?: boolean
  isMulti?: boolean
}

export const SelectComponent = ({
  options,
  placeholder,
  onChange,
  width,
  isClearable,
  value,
  defaultValue,
  disabled,
  noMenuPortalTarget,
  loading,
  isMulti,
}: AutocompleteProps) => {
  const theme = useTheme()

  return (
    <Select
      placeholder={placeholder}
      onChange={(event) => onChange(event || { label: '', value: '' })}
      options={options}
      value={value}
      filterOption={createFilter({ ignoreAccents: false })}
      defaultValue={defaultValue}
      isClearable={isClearable}
      isDisabled={disabled || loading}
      isMulti={isMulti}
      classNamePrefix="react-select"
      menuPortalTarget={noMenuPortalTarget ? null : document.body}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor:
            state.isFocused || value ? theme.colors.border : 'transparent',
          boxShadow: 'none',
          fontSize: '14px',
          width,
          height: '3.2rem',
          backgroundColor:
            state.isFocused || value ? theme.colors.hover : 'transparent',
          opacity: state.isDisabled ? 0.7 : 1,
          cursor: 'pointer',

          '&:hover': {
            borderColor: theme.colors.border,
            boxShadow: `none`,
          },
          '.react-select__indicator-separator': {
            width: 0,
          },
          'react-select__indicator': {
            color: theme.colors.border,
          },
          '.react-select__single-value': {
            color: theme.colors.grayFont,
          },
        }),
        option: (styles, { isSelected }) => ({
          ...styles,
          fontSize: '14px',
          textAlign: 'left',
          fontWeight: '400',
          color: isSelected ? theme.colors.black : theme.colors.grayFont,
          cursor: 'pointer',
          backgroundColor: isSelected ? theme.colors.hover : theme.colors.white,
          '&:hover': {
            backgroundColor: theme.colors.hover,
            color: theme.colors.black,
          },
        }),
      }}
    />
  )
}
