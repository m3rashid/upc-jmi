import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
  Container,
} from '@mantine/core'
import React from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'

import { useNotification } from 'components/helpers/useNotification'

interface IProps {}

const Login: React.FC<IProps> = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = React.useState(false)
  const { loadingNotif, updateFailureNotif, updateSuccessNotif } =
    useNotification({ id: 'login' })
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (session) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const handleLogin = async () => {
    try {
      loadingNotif()
      setLoading(true)
      const values = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }
      if (!values.email || !values.password) {
        updateFailureNotif({
          errorMsg: {
            title: 'Invalid Data',
            message: 'Please fill in all fields',
          },
        })
        return
      }
      const signInRes = await signIn('credentials', {
        ...values,
        callbackUrl: '/',
        redirect: false,
      })
      if (!signInRes?.ok) {
        throw new Error('Sign in failed')
      }
      updateSuccessNotif({
        successMsg: {
          title: 'Login Success',
          message: 'Your login was successful',
        },
      })
      setLoading(false)
    } catch (err: any) {
      updateFailureNotif({
        errorMsg: {
          title: err.message || 'Internal Server error',
          message: err.message || 'Could not get response from server',
        },
      })
      setLoading(false)
    }
  }

  const handleGoToCreateAccount = () => {
    router.replace('/auth/register')
  }

  return (
    <Container size={420} my={40}>
      <Title
        order={2}
        align="center"
        sx={(theme) => ({ fontFamily: theme.fontFamily, fontWeight: 900 })}
      >
        Login to continue
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Title
          order={2}
          align="center"
          mb={20}
          sx={(theme) => ({ fontFamily: theme.fontFamily })}
        >
          Login here
        </Title>

        <TextInput
          id="email"
          label="Email"
          placeholder="user@example.com"
          ref={emailRef}
          required
        />
        <PasswordInput
          label="Password"
          id="password"
          placeholder="Your password"
          required
          ref={passwordRef}
          mt="md"
        />
        {/* <Anchor size="sm" mt="md">
          Forgot password?
        </Anchor> */}
        <Button fullWidth mt="xl" onClick={handleLogin} loading={loading}>
          Login
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={10}>
          Dont have an account yet ?
          <Anchor size="sm" ml={5} onClick={handleGoToCreateAccount}>
            Create account
          </Anchor>
        </Text>
      </Paper>
    </Container>
  )
}

export default Login
