import { ShoppingCart } from '@phosphor-icons/react'
import {
  AddToCart,
  BuyContainer,
  Price,
  ProductContainer,
  TagsContainer,
} from './styles'
import { CustomInputNumber } from '../../../../components/InputNumber'
import { Product } from '../../../../reducers/cart/reducer'

function PriceToLocalCurrency(Price: number) {
  return Price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

interface PropsPattern {
  Product: Product
}

export function ProductTemplate(props: PropsPattern) {
  return (
    <ProductContainer key={props.Product.id}>
      <img id="ProductImage" src={props.Product.image} alt="" />
      {/* Tags */}
      <TagsContainer>
        {props.Product.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagsContainer>
      <h3 id="name">{props.Product.name}</h3>
      <p id="description">{props.Product.description}</p>
      <BuyContainer>
        <Price>
          R$ <span>{PriceToLocalCurrency(props.Product.price)}</span>
        </Price>
        <div id="CartContainer">
          <CustomInputNumber />
          <AddToCart title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </AddToCart>
        </div>
      </BuyContainer>
    </ProductContainer>
  )
}
