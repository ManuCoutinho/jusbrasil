import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  @media print and screen and (max-width: 42em) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const ProcessDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`

const Title = styled.h3`
  font-size: 1.75rem;
  padding: 0.5rem;
  text-transform: uppercase;
  color: var(--orange);
  font-weight: 500;
`

const Subtitle = styled.h4`
  font-size: 1.35rem;
  padding: 0.5rem;
  word-wrap: break-word;
`

const BoxInfo = styled.div`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  display: flex;

  p {
    color: var(--gray-600);
    margin-right: 0.5rem;
  }
  span {
    color: var(--gray-900);
  }
`
const BoxParts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const ContainerParts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 0;
  text-transform: uppercase;
  h4 {
    font-size: 1rem;
  }
`
const BoxMov = styled.table`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  border-spacing: 0 0.5rem;
  text-align: left;

  tbody {
    font-size: 0.9rem;
    td {
      border-bottom: 1px solid var(--yellow);
      padding: 0 0.25rem;
    }
    tr {
      padding: 0.5rem;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
  @media only screen and (max-width: 26.5em) {
    font-size: 0.8rem;
  }
`
const CaptionMov = styled(Subtitle)`
  color: var(--orange);
`

export {
  BoxInfo,
  BoxParts,
  Container,
  HeaderContent,
  ProcessDetails,
  Subtitle,
  Title,
  ContainerParts,
  BoxMov,
  CaptionMov,
}
