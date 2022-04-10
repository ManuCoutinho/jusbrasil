import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../services/api'

import { Form, InputDefault, Label, SubmitButton } from './styles'

type InputData = {
  process: string
}

export function FormComponent() {
  const { register, handleSubmit, formState, reset } = useForm<InputData>()
  const [process, setProcess] = useState('')
  const [response, setResponse] = useState<unknown>({})
  const { errors, isValid, isSubmitting } = formState

  async function getInfo(process: string) {
    try {
      const { data } = await api.get(`tribproc/${process}`, {
        params: {
          tipo_numero: '8',
        },
      })
      setResponse(data)
    } catch (err) {
      console.error(err)
    }
  }

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    setProcess(data.process)
    if (process !== '') {
      getInfo(data.process)
    }
    reset()
    setProcess('')
  }
  console.log(isValid)

  return (
    <Form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <Label key='process'>Número do Processo:</Label>
      <InputDefault
        type='text'
        id='process'
        placeholder='Digite o número do processo'
        {...register('process', {
          required: 'Informe o número do processo',
          minLength: 20,
        })}
      />
      {errors?.process && <p>{errors?.process.message}</p>}
      {isValid ? (
        <SubmitButton type='submit'>Pesquisar</SubmitButton>
      ) : (
        <SubmitButton type='submit' disabled>
          Pesquisar
        </SubmitButton>
      )}
    </Form>
  )
}
