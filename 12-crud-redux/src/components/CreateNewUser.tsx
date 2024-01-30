import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useState } from 'react'
import { useUsers } from '../hooks/useUsers'

export function CreateNewUser() {
  const { handleCreateUser } = useUsers()
  const [result, setResult] = useState('')

  const isEmpty = (text: string): boolean => {
    return text.trim().length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (isEmpty(name) || isEmpty(email) || isEmpty(github)) {
      setResult('ko')
      return
    }

    handleCreateUser({ name, email, github })
    setResult('ok')
    form.reset()
  }

  return (
    <Card style={{ marginTop: '16px' }}>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit}>
        <TextInput name="name" placeholder="Aquí el nombre" />
        <TextInput name="email" placeholder="Aquí el email" />
        <TextInput name="github" placeholder="Aquí el usuario de GitHub" />

        <div>
          <Button type="submit" style={{ marginTop: '16px' }}>
            Crear usuario
          </Button>
          <span>
            {result === 'ok' && (
              <Badge color='green'>Guardado correctamente</Badge>
            )}
            {result === 'ko' && <Badge color='red'>Error con los campos</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}
