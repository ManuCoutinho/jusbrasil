import {
  BoxInfo,
  BoxMov,
  BoxParts,
  CaptionMov,
  Container,
  ContainerParts,
  HeaderContent,
  ProcessDetails,
  Subtitle,
  Title,
} from './styles'

interface IDataProps {
  data: {
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
}

export function ProcessComponent({ data }: IDataProps): JSX.Element {
  const dataAtualizacao = new Date(data.alteradoEm).toLocaleDateString(
    'pt-BR',
    {
      hour: 'numeric',
      minute: 'numeric',
    }
  )
  const dataDistribuicao = new Date(data.distribuicaoData).toLocaleDateString(
    'pt-BR'
  )
  const valorCausa = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data.valor)

  const partes = data.partes?.map((element) => {
    const [, , nome, , , , , , , , , , , , , , ,] = element
    return nome
  })
  const tipos = data.partes?.map((element) => {
    const [, , , , , , , , tipo, , , , , , , , ,] = element
    return tipo
  })
  const advogados = data.partes?.map((element) => {
    const [, , , , , , , , , adv, , , , , , , ,] = element
    return adv.map((advs: string) => advs[1])
  })
  const oabs = data.partes?.map((element) => {
    const [, , , , , , , , , adv, , , , , , , ,] = element
    return adv.map((oab: string) => oab[2])
  })

  return (
    <Container>
      <HeaderContent>
        <Title>
          <span>{data.tribunal} - </span>
          N° {data.numero}
        </Title>
        <time>Atualizado em: {dataAtualizacao}</time>
      </HeaderContent>
      <BoxInfo>
        <p>{data.vara}ª </p>
        <p>{data.foro}</p>
      </BoxInfo>
      <ProcessDetails>
        <Subtitle>Detalhes do processo</Subtitle>
        <BoxInfo>
          <p> {data.instancia}ª instância / </p>
          <span>{data.area}</span>
        </BoxInfo>
        <BoxInfo>
          <p>{data.classeNatureza}</p>
        </BoxInfo>
        <BoxInfo>
          <p>Comarca:</p>
          <span>{data.comarca}</span>
        </BoxInfo>
        <BoxInfo>
          <p>Data de distribuição</p>
          <span>
            <time>{dataDistribuicao}</time>
          </span>
        </BoxInfo>
        <BoxInfo>
          <p>Valor da causa: </p>
          <span> {valorCausa}</span>
        </BoxInfo>
      </ProcessDetails>
      <ContainerParts>
        <BoxParts>
          {tipos?.map((tipo) => (
            <Subtitle>{tipo}</Subtitle>
          ))}
        </BoxParts>

        <BoxParts>
          {partes?.map((parte: string) => (
            <BoxInfo>
              <p> {parte}</p>
            </BoxInfo>
          ))}
        </BoxParts>
        <BoxParts>
          {advogados?.map((adv) => (
            <BoxInfo key={Math.random()}>
              <p>{adv}</p>
            </BoxInfo>
          ))}
        </BoxParts>
        <BoxParts>
          {oabs?.map((oab) => (
            <BoxInfo>
              {' '}
              <p key={Math.random()}>OAB: {oab}</p>
            </BoxInfo>
          ))}
        </BoxParts>
      </ContainerParts>
      <BoxMov>
        <caption>
          <CaptionMov>Movimentações</CaptionMov>
        </caption>
        <thead>
          <tr>
            <th scope='col'>Data:</th>
            <th scope='col'>Andamento: </th>
            <th scope='col'>Descrição: </th>
          </tr>
        </thead>
        <tbody>
          {data.movs?.map((element) => {
            return (
              <tr>
                <td key={Math.random()}>
                  {new Date(element[0]).toLocaleDateString('pt-BR')}{' '}
                </td>
                <td key={Math.random()}> {element[1]} </td>
                <td key={Math.random()}>{element[2]} </td>
              </tr>
            )
          })}
        </tbody>
      </BoxMov>
    </Container>
  )
}
