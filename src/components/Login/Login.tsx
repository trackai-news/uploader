import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './Login.module.css';
  import { useState } from 'react'
  import Cookies from 'js-cookie';
  
  export function LoginComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
      if(email === 'admin@trackai.ai' && password === 'admin'){
        console.log(email, password)
        Cookies.set('loginToken', 'value', { expires: 0.1 })
        window.location.href = '/upload'
      }
      else{
        window.location.reload()
      }
    }

    return (
      <Container size={420} my={40}>
        {/* <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text> */}
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mail.com" onChange={(e) => setEmail(e.target.value)} value={email} required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={(e) => setPassword(e.target.value)} value={password} />
          <Group justify="space-between" mt="lg">
            {/* <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor> */}
          </Group>
          <Button onClick={() => handleLogin()} fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    );
  }