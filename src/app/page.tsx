'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAppDispatch from "./hooks/useAppDispatch";
import useAppSelector from "./hooks/useAppSelector";
import { login } from "./store/auth";

export default function Home() {

  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [tokenT, setToken] = useState<string | null>(null)

  const onSubmit = async (token: string) => {
    await dispatch<any>(login(token));
    router.push('/dashboard');
  }

  useEffect(() => {
    if(token) {
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000);
    }
  }, [router])

  return (
    <>
      <h1>Login</h1>
      <input type="text" name="" id="" onChange={(e) => setToken(e.target.value)} />
      <button onClick={() => onSubmit(tokenT!)}>Login</button>
    </>
  )
}
