import React, { useCallback, useState } from 'react'
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

export default function Header() {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const { filterAndOrder, search, viewFavorites, darkMode, dashboardMode } =
    useAppSelector((state) => state.filters)

  const [viewDashboardMode, setViewDashboardMode] = useState(false)
  const [openModalAddRepository, setOpenModalAddRepository] = useState(false)

  const [nameRepository, setNameRepository] = useState('')

  const handleSelectDashboardMode = (item: ViewDashboardOptionProps) => {
    dispatch(handleDashboardMode(item.value))
    setViewDashboardMode(false)
  }

  const handleOpenModalAddRepository = useCallback(() => {
    setNameRepository('')
    setOpenModalAddRepository(!openModalAddRepository)
  }, [openModalAddRepository])

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
            <div className="wrapper-input">
              <h2>New repository</h2>
              <Input
                $typeInput="home"
                placeholder="Repository name"
                width="100%"
                onChange={(e) => setNameRepository(e.target.value)}
                label="Repository"
                id="repository"
                errorMessage="adadada"
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
                disabled={nameRepository.length === 0}
                onClick={() => console.log(nameRepository)}
              />
            </div>
          </ModalAddRepository>
        )}
      </WrapperAddRepository>
    </WrapperHeader>
  )
}
