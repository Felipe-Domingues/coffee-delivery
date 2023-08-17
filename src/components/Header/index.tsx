import { CheckoutButton, HeaderContainer, LocationButton } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" /> <p>Porto Alegre, RS</p>
        </LocationButton>
        <CheckoutButton>
          <ShoppingCart size={22} weight="fill" />
          <div id="Counter">3</div>
        </CheckoutButton>
      </nav>
    </HeaderContainer>
  )
}
