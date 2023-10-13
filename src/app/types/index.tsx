import { ReactNode } from 'react'

export interface AuthState {
  token: string
  loadingGetAccessToken: boolean
}

export interface ButtonProps {
  label?: string
  width?: string
  height?: string
  onClick?: () => void
  disabled?: boolean
  $background?: 'primary' | 'secondary' | 'transparent' | 'outline'
  icon?: ReactNode
}

export interface InputProps {
  label: string
  placeholder: string
  width: string
  height?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  register?: any
  id: string
  required?: boolean
  errorMessage?: string | boolean
  $typeInput?: 'login' | 'home'
}

export interface ActionPayload {
  payload: any
  type: string
}

export interface FilterAndOrderProps {
  value: string
  label: string
}

export interface InputSearchProps {
  width: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

export interface ViewDashboardOptionProps {
  icon: ReactNode
  value: string
  label: string
}

export interface FiltersProps {
  filterAndOrder: FilterAndOrderProps | null
  search: string | null
  viewFavorites: boolean
  darkMode: boolean
  dashboardMode: 'cards' | 'list'
}
