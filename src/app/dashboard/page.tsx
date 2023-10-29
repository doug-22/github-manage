'use client'

import { useCallback, useEffect, useMemo } from 'react'
import Header from '../components/Header'
import useAppDispatch from '../hooks/useAppDispatch'
import { WrapperCards, WrapperDashboard } from './styles'
import { getUser } from '../store/actions/userActions'
import useAppSelector from '../hooks/useAppSelector'
import Card from '../components/Card'
import { RepoInfoFormatedProps } from '../types'

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const { repos } = useAppSelector((state) => state.dashboard)
  const { viewFavorites, search, filterAndOrder } = useAppSelector(
    (state) => state.filters,
  )

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const handleFavoriteRepos = useCallback(() => {
    if (viewFavorites) {
      return repos?.filter((item) => item?.favorite === viewFavorites)
    }
    return repos
  }, [repos, viewFavorites])

  const handleFilterAndOrder = useCallback(
    (array: Array<RepoInfoFormatedProps>) => {
      if (filterAndOrder) {
        return array.sort((a, b) => {
          if (typeof filterAndOrder?.value === 'number') {
            return b[filterAndOrder?.value] - a[filterAndOrder?.value]
          } else {
            const dateA = new Date(a[filterAndOrder?.value])
            const dateB = new Date(b[filterAndOrder?.value])

            return dateB.getTime() - dateA.getTime()
          }
        })
      }
      return array
    },
    [filterAndOrder],
  )

  const reposWithFilters = useMemo(() => {
    return handleFilterAndOrder(
      handleFavoriteRepos().filter((item) => item?.name.includes(search || '')),
    )
  }, [handleFavoriteRepos, handleFilterAndOrder, search])

  return (
    <WrapperDashboard>
      <Header />
      <WrapperCards>
        {reposWithFilters?.map((item) => <Card key={item.id} card={item} />)}
      </WrapperCards>
    </WrapperDashboard>
  )
}
