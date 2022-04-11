import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Container } from '../Foundation/Container'
import { ProcessComponent } from '../ProcessComponent'
import { api } from '../services/api'

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
interface IInfoProps {
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
  valor?: number
  movs: Array<{}>
  status_op?: string
  instancia: number
}

export function FormComponent() {
  const { register, handleSubmit, formState, reset } = useForm<InputData>()
  const [response, setResponse] = useState<Array<IInfoProps>>([])
  const { errors } = formState

  async function getInfo(process: string): Promise<IInfoProps> {
    const { data } = await api.get(`tribproc/${process}`, {
      params: {
        tipo_numero: '8',
      },
    })
    setResponse(data)
    return data
  }

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    getInfo(data.process)
    reset()
  }

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
      {response.length !== 0 && <ProcessComponent data={response} />}
    </Container>
  )
}
