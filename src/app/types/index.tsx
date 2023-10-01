export interface AuthState {
  token: string
  loadingGetAccessToken: boolean
}

export interface ButtonProps {
  label: string
  width: string
  height?: string
  onClick?: () => void
  disabled?: boolean
  $background?: 'primary' | 'secondary'
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
}

export interface ActionPayload {
  payload: any
  type: string
}
