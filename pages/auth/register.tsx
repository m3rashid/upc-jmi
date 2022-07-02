import {
  TextInput,
  PasswordInput,
  Checkbox,
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

import useHttp from 'components/helpers/useHttp'
import { useNotification } from 'components/helpers/useNotification'

interface IProps {}

const Register: React.FC<IProps> = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const { loading, request } = useHttp('login')
  const { updateFailureNotif } = useNotification({ id: 'register' })
  const [admin, setAdmin] = React.useState(false)
  const nameRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null)
  const adminUidRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (session) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const handleRegister = async () => {
    const values = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      name: nameRef.current?.value,
      admin: admin,
      adminUid: adminUidRef.current?.value,
    }
    if (values.admin && !values.adminUid) {
      updateFailureNotif({
        errorMsg: {
          title: 'Invalid Data',
          message: 'You need admin UID to register as admin',
        },
      })
      return
    }
    if (
      !values.email ||
      !values.password ||
      !values.confirmPassword ||
      !values.name
    ) {
      updateFailureNotif({
        errorMsg: {
          title: 'Invalid Data',
          message: 'Please fill in all fields',
        },
      })
      return
    }
    if (values.password !== values.confirmPassword) {
      updateFailureNotif({
        errorMsg: {
          title: 'Invalid Data',
          message: 'Passwords do not match',
        },
      })
      return
    }
    const res = await request({
      endpoint: '/register',
      body: values,
    })
    if (!res) return
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/',
      redirect: false,
    })
  }

  const handleGoToLogin = () => {
    router.replace('/auth/login')
  }

  return (
    <Container size={420} my={40}>
      <Title
        order={2}
        align="center"
        sx={(theme) => ({ fontFamily: theme.fontFamily, fontWeight: 900 })}
      >
        Create an account
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Title
          order={2}
          align="center"
          mb={20}
          sx={(theme) => ({ fontFamily: theme.fontFamily })}
        >
          Register here
        </Title>

        <TextInput
          id="name"
          label="Name"
          placeholder="Your Name"
          ref={nameRef}
          required
          mt="md"
        />
        <TextInput
          id="email"
          label="Email"
          placeholder="user@example.com"
          ref={emailRef}
          mt="md"
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
        <PasswordInput
          label="Confirm Password"
          id="confirm password"
          placeholder="Re enter your password"
          required
          ref={confirmPasswordRef}
          mt="md"
        />
        {admin && (
          <TextInput
            id="AdminUid"
            label="Admin UID"
            placeholder="Admin UID"
            ref={adminUidRef}
            required
            mt="md"
          />
        )}
        <Checkbox
          mt="md"
          label="Are you an admin"
          checked={admin}
          onClick={() => setAdmin(!admin)}
        />

        <Button fullWidth mt="xl" onClick={handleRegister} loading={loading}>
          Register
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={10}>
          Already have an account ?
          <Anchor size="sm" ml={5} onClick={handleGoToLogin}>
            Login Instead
          </Anchor>
        </Text>
      </Paper>
    </Container>
  )
}

export default Register
