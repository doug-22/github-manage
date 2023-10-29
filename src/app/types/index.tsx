import { ReactNode } from 'react'

export interface AuthState {
  token: string
  loadingGetAccessToken: boolean
}

export interface UserState {
  username: string
  loadingUsername: boolean
}

export interface ButtonProps {
  label?: string
  width?: string
  height?: string
  onClick?: () => void
  disabled?: boolean
  $background?: 'primary' | 'secondary' | 'transparent' | 'outline' | 'warning'
  icon?: ReactNode
  type?: 'button' | 'reset' | 'submit'
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
  value: 'stars' | 'forks' | 'openIssues' | 'age' | 'lastCommit'
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

export interface ModalProps {
  title: 'Delele repository' | null
  isOpen: boolean
}

interface LicenseProps {
  key: string
  name: string
}

export interface RepoInfoProps {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  created_at: string
  pushed_at: string
  license: null | LicenseProps
  language: string
  favorite: boolean
}

export interface RepoInfoFormatedProps {
  id: number
  name: string
  stars: number
  forks: number
  openIssues: number
  age: string
  lastCommit: string
  license: null | LicenseProps
  language: string
  favorite: boolean
}

export interface DashboardState {
  repo: RepoInfoProps | null
  loadingRepo: boolean

  seletedRepo: RepoInfoFormatedProps | null

  repos: Array<RepoInfoFormatedProps>
}
