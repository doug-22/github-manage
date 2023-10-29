import {
  BackgroundModal,
  BodyModalDetele,
  ButtonsModalDetele,
  HeaderModalDetele,
  ModalDelete,
} from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { useTheme } from 'styled-components'
import { GoAlertFill } from 'react-icons/go'
import Button from '../Button'
import useAppSelector from '@/app/hooks/useAppSelector'
import useAppDispatch from '@/app/hooks/useAppDispatch'
import { handleCloseModal } from '@/app/store/modal'
import { handleDeleteRepo } from '@/app/store/dashboard'

export default function Modals() {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { isOpen, title } = useAppSelector((state) => state.modal)
  const { seletedRepo } = useAppSelector((state) => state.dashboard)

  const handleDeleteSelectedRepo = (id: number) => {
    dispatch(handleDeleteRepo(id))
    dispatch(handleCloseModal())
  }

  return (
    isOpen && (
      <BackgroundModal>
        {title === 'Delele repository' && seletedRepo && (
          <ModalDelete>
            <HeaderModalDetele>
              <div className="title">
                <GoAlertFill size={25} />
                <h1>Delete repository</h1>
              </div>
              <Button
                width="35px"
                height="35px"
                $background="transparent"
                onClick={() => dispatch(handleCloseModal())}
                icon={<AiOutlineClose size={20} color={theme.colors.warning} />}
              />
            </HeaderModalDetele>
            <BodyModalDetele>
              <p>
                Are you sure to delete the <strong>{seletedRepo?.name}</strong>{' '}
                repository?
              </p>
            </BodyModalDetele>
            <ButtonsModalDetele>
              <Button
                width="7.2rem"
                height="3.2rem"
                label="Cancel"
                $background="outline"
                onClick={() => dispatch(handleCloseModal())}
              />
              <Button
                width="7.2rem"
                height="3.2rem"
                $background="warning"
                label="Delete"
                onClick={() => handleDeleteSelectedRepo(seletedRepo?.id)}
              />
            </ButtonsModalDetele>
          </ModalDelete>
        )}
      </BackgroundModal>
    )
  )
}
