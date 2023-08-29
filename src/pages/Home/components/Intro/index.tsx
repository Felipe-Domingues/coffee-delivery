import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import {
  BackgroundContainer,
  ItemsContainer,
  Item,
  ItemIcon,
  Container,
} from './styles'
import IntroImage from '../../../../assets/intro_image.svg'
export function Intro() {
  return (
    <BackgroundContainer>
      <Container>
        <div id="text">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ItemsContainer>
            <Item>
              <ItemIcon statuscolor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </ItemIcon>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <ItemIcon statuscolor="gray">
                <Package size={16} weight="fill" />
              </ItemIcon>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item>
              <ItemIcon statuscolor="yellow">
                <Timer size={16} weight="fill" />
              </ItemIcon>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item>
              <ItemIcon statuscolor="purple">
                <Coffee size={16} weight="fill" />
              </ItemIcon>
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsContainer>
        </div>
        <img
          src={IntroImage}
          alt="Copo de café com café em grãos e pó em seu fundo."
        />
      </Container>
    </BackgroundContainer>
  )
}
