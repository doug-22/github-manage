'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import { login } from '../store/auth'
import { AiFillGithub } from 'react-icons/ai'
import { ContentForm, Divider, Title, Wrapper } from './styles'
import Button from '../components/Button'
import { useTheme } from 'styled-components'
import Input from '../components/Input'
import { getAccessToken } from '../store/actions/authActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const URL = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`

interface LoginProps {
  name: string
}

export default function Login() {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.auth)
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginProps>()

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    dispatch(login(data))
    toast.success('Login feito com sucesso!')
    router.push('/dashboard')
  }

  const loginWithGithub = () => {
    window.location.href = URL
  }

  useEffect(() => {
    const url = window.location.href
    const hasCode = url.includes('?code=')

    if (hasCode) {
      const code = url.split('?code=')[1]
      handleGetAccessToken(code)
    }
  }, [])

  const handleGetAccessToken = async (code: string) => {
    const response = await dispatch(getAccessToken({ code }))
    if (response.meta.requestStatus === 'fulfilled') {
      toast.success('Login feito com sucesso!')
      router.push('/dashboard')
    } else {
      toast.error('Ocorreu um erro ao tentar fazer o login!')
    }
  }

  useEffect(() => {
    if (token) {
      toast.success('Usuário já logado, redirecionando...')
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    }
  }, [router])

  return (
    <Wrapper>
      <ContentForm>
        <AiFillGithub size={50} color={theme.colors.grayFont} />
        <Title>Sign In</Title>
        <Button
          label="Entrar com Github"
          onClick={loginWithGithub}
          $background="primary"
          width="100%"
        />
        <Divider>
          <span>ou entre com o seu nome</span>
        </Divider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            id="name"
            placeholder="Insira o seu nome"
            width="100%"
            required
            register={register}
            errorMessage={
              errors.name?.type === 'required' && 'Favor informar o seu nome'
            }
          />
          <Button
            label="Entrar"
            type="submit"
            $background="secondary"
            width="100%"
          />
        </form>
      </ContentForm>
    </Wrapper>
  )
}
