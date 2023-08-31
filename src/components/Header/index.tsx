import { CheckoutButton, HeaderContainer, LocationButton } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { totalProducts } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img id="logo" src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Mudar localização">
          <LocationButton>
            <MapPin size={22} weight="fill" /> <p>Porto Alegre, RS</p>
          </LocationButton>
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <CheckoutButton>
            <ShoppingCart size={22} weight="fill" />
            <div id="Counter">{totalProducts}</div>
          </CheckoutButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
