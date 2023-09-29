'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useAppSelector from "../hooks/useAppSelector";

interface RouteGuardProps {
  children: any
}

const PUBLIC_PATHS = [
  "/",
  "/login"
];

export default function RouteGuard({children}: RouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { token } = useAppSelector((state) => state.auth);
  const [authorized, setAuthorized] = useState(false);

  const isUserAuthenticated = !!token;

  function isPublicPath(path: string) {
    return PUBLIC_PATHS.includes(path);
  }

  function redirectToLogin() {
    setAuthorized(false);
    router.push('/');
  }

  function authCheck(url: string) {
    const path = url;

    if(!isUserAuthenticated && !isPublicPath(path)) {
      redirectToLogin()
    } else {
      setAuthorized(true)
    }
  }

  useEffect(() => {
    authCheck(pathname)
  },[router, token, pathname])

  return authorized && children
}