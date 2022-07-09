import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const useCheckAdminLoggedIn = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const isAdmin = session && session.user.role === 'ADMIN'
  React.useEffect(() => {
    if (!isAdmin) {
      router.replace('/auth/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useCheckAdminLoggedIn
