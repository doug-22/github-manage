'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { login } from '../store/auth'
import { AiFillGithub } from 'react-icons/ai'
import { ContentForm, Divider, Title, Wrapper } from './styles'
import Button from '../components/Button'
import { useTheme } from 'styled-components'
import Input from '../components/Input'

export default function Login() {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.auth)
  const router = useRouter()
  const [name, setName] = useState<string | null>(null)

  const onSubmit = useCallback(async () => {
    await dispatch<any>(login(name))
    router.push('/dashboard')
  }, [name])

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    }
  }, [router, token])

  return (
    <Wrapper>
      <ContentForm>
        <AiFillGithub size={50} color={theme.colors.grayFont} />
        <Title>Sign In</Title>
        <Button
          label="Entrar com Github"
          onClick={() => console.log('github')}
          $background="primary"
          width="100%"
        />
        <Divider>
          <span>ou entre com o seu nome</span>
        </Divider>
        <Input
          label="Nome"
          placeholder="Insira o seu nome"
          width="100%"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          label="Entrar"
          onClick={onSubmit}
          $background="secondary"
          width="100%"
        />
      </ContentForm>
    </Wrapper>
  )
}
