import { FilterAndOrderProps, ViewDashboardOptionProps } from '../types'
import { PiListFill } from 'react-icons/pi'
import { MdDashboard } from 'react-icons/md'
import theme from '../styles/theme'

export const optionsFilterAndOrder: Array<FilterAndOrderProps> = [
  { value: 'stars', label: 'Stars' },
  { value: 'forks', label: 'Forks' },
  { value: 'openIssues', label: 'Open Issues' },
  { value: 'age', label: 'Age' },
  { value: 'lastCommit', label: 'Last Commit' },
]

export const viewDashboardOptions: Array<ViewDashboardOptionProps> = [
  {
    icon: <MdDashboard size={30} color={theme.colors.grayFont} />,
    label: 'Cards',
    value: 'cards',
  },
  {
    icon: <PiListFill size={30} color={theme.colors.grayFont} />,
    label: 'List',
    value: 'list',
  },
]
