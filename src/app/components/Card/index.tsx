import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaTrashCan } from 'react-icons/fa6'
import Button from '../Button'
import { Header, Wrapper, Body, Language } from './styles'
import { useTheme } from 'styled-components'
import Icon from '../../assets/icon-repo.svg'
import Image from 'next/image'
import { RepoInfoFormatedProps } from '@/app/types'
import useAppSelector from '@/app/hooks/useAppSelector'
import useAppDispatch from '@/app/hooks/useAppDispatch'
import { handleFavoriteRepo, handleSelectRepo } from '@/app/store/dashboard'
import { formatDistance } from 'date-fns'
import { handleOpenModal } from '@/app/store/modal'

interface CardProps {
  card: RepoInfoFormatedProps
}

export default function Card({ card }: CardProps) {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { dashboardMode } = useAppSelector((state) => state.filters)

  const handleFavoriteCard = (id: number) => {
    dispatch(handleFavoriteRepo(id))
  }

  const handleOpenModalDeleteCard = (id: number) => {
    dispatch(handleSelectRepo(id))
    dispatch(handleOpenModal('Delele repository'))
  }

  return (
    <>
      <Wrapper type={dashboardMode}>
        <Header type={dashboardMode}>
          <Image src={Icon} alt="" />
          <h2>{card?.name}</h2>
          <div className="content-buttons">
            <Button
              width="30px"
              height="30px"
              $background="transparent"
              onClick={() => handleFavoriteCard(card?.id)}
              icon={
                card?.favorite ? (
                  <AiFillStar size={15} color={theme.colors.grayFont} />
                ) : (
                  <AiOutlineStar size={15} color={theme.colors.grayFont} />
                )
              }
            />
            <Button
              width="30px"
              height="30px"
              $background="transparent"
              onClick={() => handleOpenModalDeleteCard(card?.id)}
              icon={<FaTrashCan size={15} color={theme.colors.grayFont} />}
            />
          </div>
        </Header>
        <Body type={dashboardMode}>
          <p>
            <strong>Stars</strong> {card?.stars}
          </p>
          <p>
            <strong>Forks</strong> {card?.forks}
          </p>
          <p>
            <strong>Open Issues</strong> {card?.openIssues}
          </p>
          <p>
            <strong>Age</strong>{' '}
            {formatDistance(new Date(card?.age), new Date(), {
              addSuffix: true,
            })}
          </p>
          <p>
            <strong>Last Commit</strong>{' '}
            {formatDistance(new Date(card?.lastCommit), new Date(), {
              addSuffix: true,
            })}
          </p>
          <p>
            <strong>License</strong> {card?.license?.name ?? 'N/A'}
          </p>
        </Body>
        <div className="content-languages">
          <Language>{card?.language.toLocaleUpperCase()}</Language>
        </div>
      </Wrapper>
    </>
  )
}
