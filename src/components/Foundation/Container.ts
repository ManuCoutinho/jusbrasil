import styled from 'styled-components'

const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  flex-direction: column;

  @media print and screen and (max-width: 30em) {
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    height: 100vh;
  }
`
export { Container }
