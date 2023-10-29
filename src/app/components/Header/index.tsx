import React, { useCallback, useEffect, useState } from 'react'
import {
  AiFillGithub,
  AiOutlineStar,
  AiOutlinePlus,
  AiFillStar,
} from 'react-icons/ai'
import { VscColorMode } from 'react-icons/vsc'
import {
  Title,
  WrapperHeader,
  WrapperOptions,
  Option,
  WrapperSelectView,
  WrapperAddRepository,
  ModalAddRepository,
} from './styles'
import { useTheme } from 'styled-components'
import Button from '../Button'
import { SelectComponent } from '../Select'
import {
  optionsFilterAndOrder,
  viewDashboardOptions,
} from '@/app/utils/constants'
import { ViewDashboardOptionProps } from '@/app/types'
import InputSearch from '../InputSearch'
import useAppDispatch from '@/app/hooks/useAppDispatch'
import useAppSelector from '@/app/hooks/useAppSelector'
import {
  handleDarkMode,
  handleDashboardMode,
  handleFilterAndOrder,
  handleSearch,
  handleViewFavorites,
} from '@/app/store/filters'
import Input from '../Input'
import { getRepo } from '@/app/store/actions/dashboardActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface RepoProps {
  repoName: string
}

export default function Header() {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const { filterAndOrder, search, viewFavorites, darkMode, dashboardMode } =
    useAppSelector((state) => state.filters)

  const { repos } = useAppSelector((state) => state.dashboard)

  const {
    handleSubmit,
    register,
    watch,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<RepoProps>()

  const [repoName] = watch(['repoName'])

  const [viewDashboardMode, setViewDashboardMode] = useState(false)
  const [openModalAddRepository, setOpenModalAddRepository] = useState(false)

  const handleSelectDashboardMode = (item: ViewDashboardOptionProps) => {
    dispatch(handleDashboardMode(item.value))
    setViewDashboardMode(false)
  }

  const handleOpenModalAddRepository = useCallback(() => {
    setValue('repoName', '')
    clearErrors()
    setOpenModalAddRepository(!openModalAddRepository)
  }, [openModalAddRepository])

  const onSubmit: SubmitHandler<RepoProps> = useCallback(
    async (data) => {
      if (repos?.find((item) => item?.name === data.repoName)) {
        setError('repoName', { message: 'Repositório duplicado!' })
        return
      }
      const response = await dispatch(getRepo(data))
      if (response.meta.requestStatus === 'fulfilled') {
        toast.success('Repositório adicionado com sucesso!')
        setOpenModalAddRepository(!openModalAddRepository)
      }
      if (response.meta.requestStatus === 'rejected') {
        setError('repoName', {
          message: response.payload.response.data.message,
        })
      }
    },
    [repos],
  )

  return (
    <WrapperHeader>
      <AiFillGithub size={50} color={theme.colors.grayFont} />
      <Title>Github Manage</Title>
      <SelectComponent
        width="160px"
        placeholder="Filter and order"
        value={filterAndOrder}
        onChange={(e) => dispatch(handleFilterAndOrder(e))}
        options={optionsFilterAndOrder}
      />

      <InputSearch
        width="30%"
        onChange={(e) => dispatch(handleSearch(e.target.value))}
        onClick={() => console.log(search)}
      />

      <Button
        width="40px"
        height="40px"
        $background="transparent"
        onClick={() => dispatch(handleViewFavorites(!viewFavorites))}
        icon={
          viewFavorites ? (
            <AiFillStar size={25} color={theme.colors.grayFont} />
          ) : (
            <AiOutlineStar size={25} color={theme.colors.grayFont} />
          )
        }
      />
      <Button
        width="40px"
        height="40px"
        $background="transparent"
        icon={<VscColorMode size={25} color={theme.colors.grayFont} />}
        onClick={() => dispatch(handleDarkMode(!darkMode))}
      />

      <WrapperSelectView>
        <Button
          width="40px"
          height="40px"
          $background="transparent"
          icon={
            viewDashboardOptions.find((item) => item.value === dashboardMode)
              ?.icon
          }
          onClick={() => setViewDashboardMode(!viewDashboardMode)}
        />
        {viewDashboardMode && (
          <WrapperOptions>
            {viewDashboardOptions.map((item) => (
              <Option
                key={item.value}
                onClick={() => handleSelectDashboardMode(item)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Option>
            ))}
          </WrapperOptions>
        )}
      </WrapperSelectView>

      <WrapperAddRepository>
        <Button
          width="40px"
          height="40px"
          icon={<AiOutlinePlus size={25} color={theme.colors.white} />}
          onClick={handleOpenModalAddRepository}
        />
        {openModalAddRepository && (
          <ModalAddRepository>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="wrapper-input">
                <h2>New repository</h2>
                <Input
                  $typeInput="home"
                  placeholder="Repository name"
                  width="100%"
                  label="Repository"
                  register={register}
                  id="repoName"
                  errorMessage={errors.repoName?.message}
                  required
                />
              </div>
              <div className="wrapper-buttons">
                <Button
                  width="7.2rem"
                  height="3.2rem"
                  label="Cancel"
                  $background="outline"
                  onClick={handleOpenModalAddRepository}
                />
                <Button
                  width="7.2rem"
                  height="3.2rem"
                  label="Add"
                  disabled={
                    !!(repoName?.length === 0 || errors.repoName?.message)
                  }
                  type="submit"
                />
              </div>
            </form>
          </ModalAddRepository>
        )}
      </WrapperAddRepository>
    </WrapperHeader>
  )
}
