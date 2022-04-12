import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Container } from '../Foundation/Container'
import { ToastError, ToastNotFound } from '../Foundation/Toast'
import { ProcessComponent } from '../ProcessComponent'
import { api } from '../services/api'

import 'react-toastify/dist/ReactToastify.min.css'

import {
  BoxInput,
  ErrorMessage,
  Form,
  InputDefault,
  Label,
  SubmitButton,
} from './styles'

type InputData = {
  process: string
}
type IInfoProps = {
  numero: string
  numero_alternativo: string
  foro: string
  comarca_cnj: string
  uf: string
  vara: string
  area: string
  assunto: string
  natureza: string
  alteradoEm: string
  distribuicaoData: string
  partes: Array<{}>
  tribunal: string
  classeNatureza: string
  comarca: string
  valor: number
  movs: Array<{}>
  instancia: number
}
export function FormComponent() {
  const { register, handleSubmit, formState, reset } = useForm<InputData>()
  const [response, setResponse] = useState<Array<IInfoProps>>([])
  const [status, setStatus] = useState(0)
  const { errors } = formState

  async function getInfo(process: string): Promise<IInfoProps> {
    const { data, status } = await api.get(`tribproc/${process}`, {
      params: {
        tipo_numero: '8',
      },
    })
    setResponse(data)
    setStatus(status)
    return data
  }
  const onSubmit: SubmitHandler<InputData> = async (data) => {
    getInfo(data.process)
    reset()
  }

  useEffect(() => {
    status !== 200 ? ToastError() : null
    Object.keys(response).length === 1 ? ToastNotFound() : null
  }, [response])

  return (
    <Container>
      <Form method='POST' onSubmit={handleSubmit(onSubmit)}>
        <BoxInput>
          <Label id='process'>Número do Processo:</Label>
          <InputDefault
            type='text'
            id='process'
            placeholder='Digite o número do processo'
            {...register('process', {
              required: 'Informe o número do processo',
              minLength: 20,
            })}
          />
          {errors?.process && (
            <ErrorMessage>{errors?.process.message}</ErrorMessage>
          )}
        </BoxInput>
        {!errors.process ? (
          <SubmitButton type='submit'>Pesquisar</SubmitButton>
        ) : (
          <SubmitButton type='submit' disabled>
            Pesquisar
          </SubmitButton>
        )}
      </Form>

      {Object.keys(response).length > 1 && <ProcessComponent data={response} />}
    </Container>
  )
}
