import styled from 'styled-components'
import { BaseButton } from '../../layouts/DefaultLayout/styles'

export const HeaderContainer = styled.header`
  display: flex;
  margin-bottom: 2rem;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocationButton = styled(BaseButton)`
  gap: 4px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CheckoutButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  div#Counter {
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 9999px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0 0 2.1rem 2.1rem;
    font-size: 0.75rem;
  }
`
