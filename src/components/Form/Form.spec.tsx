import { render, screen } from '@testing-library/react'
import { FormComponent } from '.'
import AxiosMock from 'axios-mock-adapter'
import { api } from '../services/api'

const apiMock = new AxiosMock(api)

describe('Form Component', () => {
  it('renders correctly', async () => {
    const process = '0004237-31.2010.8.26.0001'

    apiMock.onGet(`tribproc/${process}`).reply(200)

    //verificar input - evento
    //retorno
    const { getByText } = render(<FormComponent />)

    expect(await screen.getByRole('')).toBeInDocument()
  })
})
