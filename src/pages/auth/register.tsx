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
import { useSession } from 'next-auth/react'

import { trpc } from 'utils/trpc'
import { useNotification } from 'components/helpers/useNotification'
import { ICreateUser } from 'server/schema/user'

interface IProps {}

const Register: React.FC<IProps> = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = React.useState(false)
  const { updateFailureNotif, updateSuccessNotif } = useNotification({
    id: 'register',
  })
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

  const handleGoToLogin = () => {
    router.replace('/auth/login')
  }

  const { mutate, error } = trpc.useMutation('users.register', {
    onSuccess: () => {
      updateSuccessNotif({
        successMsg: {
          title: 'Registration Successful',
          message: 'Successfully added the user',
        },
      })
      setTimeout(handleGoToLogin, 2000)
    },
  })

  const handleRegister = async () => {
    setLoading(true)
    const values = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      admin: admin,
      adminUid: adminUidRef.current?.value,
    }
    try {
      if (values.admin && !values.adminUid) {
        throw new Error(
          JSON.stringify({
            title: 'Invalid Data',
            message: 'No admin UID provided',
          })
        )
      }
      if (
        !values.email ||
        !values.password ||
        !values.confirmPassword ||
        !values.name
      ) {
        throw new Error(
          JSON.stringify({
            title: 'Invalid Data',
            message: 'Please fill the required fields',
          })
        )
      }
      if (values.password !== values.confirmPassword) {
        throw new Error(
          JSON.stringify({
            title: 'Invalid Data',
            message: 'Passwords do not match',
          })
        )
      }

      console.log(values)
      mutate(values as ICreateUser)
      setLoading(false)
      if (error) {
        throw new Error(
          JSON.stringify({ title: 'Error', message: 'Registration failed' })
        )
      }
    } catch (err: any) {
      setLoading(false)
      updateFailureNotif({
        errorMsg: JSON.parse(err.message) || {
          title: 'Error',
          message: 'Error in register',
        },
      })
    }
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
          onChange={() => setAdmin(!admin)}
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
