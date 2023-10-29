'use client'

import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit'
import { DashboardState, RepoInfoProps } from '../types'
import * as dashboardActions from './actions/dashboardActions'

export const initialState: DashboardState = {
  repo: null,
  loadingRepo: false,

  seletedRepo: null,

  repos:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('REPOS') ?? '[]')
      : [],
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    handleFavoriteRepo(state, action) {
      const id = action.payload
      const repos = [...state.repos]
      const index = repos?.findIndex((item) => item?.id === id)
      repos[index] = {
        ...repos[index],
        favorite: !repos[index].favorite,
      }
      state.repos = repos
    },
    handleDeleteRepo(state, action) {
      const id = action.payload
      const repos = [...state.repos]
      const index = repos?.findIndex((item) => item?.id === id)
      repos?.splice(index, 1)
      state.repos = repos
      localStorage.setItem('REPOS', JSON.stringify(state.repos))
    },
    handleSelectRepo(state, action) {
      const id = action.payload
      const repos = [...state.repos]
      const index = repos?.findIndex((item) => item?.id === id)
      state.seletedRepo = repos[index]
    },
  },
  extraReducers(builder) {
    builder.addMatcher(isPending(dashboardActions.getRepo), (state) => {
      state.loadingRepo = true
    })
    builder.addMatcher(
      isFulfilled(dashboardActions.getRepo),
      (state, action: { payload: RepoInfoProps }) => {
        const repo = {
          id: action.payload.id,
          name: action.payload.name,
          stars: action.payload.stargazers_count,
          forks: action.payload.forks_count,
          openIssues: action.payload.open_issues_count,
          age: action.payload.created_at,
          lastCommit: action.payload.pushed_at,
          license: action.payload.license,
          language: action.payload.language,
          favorite: false,
        }
        const repos = [...state.repos]
        repos.push(repo)

        state.repos = repos
        state.loadingRepo = false
        localStorage.setItem('REPOS', JSON.stringify(state.repos))
      },
    )
    builder.addMatcher(isRejected(dashboardActions.getRepo), (state) => {
      state.loadingRepo = false
    })
  },
})

export const { handleFavoriteRepo, handleDeleteRepo, handleSelectRepo } =
  dashboardSlice.actions

export default dashboardSlice.reducer
