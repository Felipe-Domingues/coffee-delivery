import { ShoppingCart } from '@phosphor-icons/react'
import {
  AddToCart,
  BuyContainer,
  Price,
  ProductContainer,
  TagsContainer,
} from './styles'
import { CustomInputNumber } from '../InputNumber'

export interface ProductPattern {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  quantity?: number | null
}

interface PropsPatten {
  Product: ProductPattern[]
}

function PriceToLocalCurrency(Price: number) {
  return Price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

export function ProductTemplate(props: PropsPatten) {
  return props.Product.map((prod) => {
    return (
      <ProductContainer key={prod.id}>
        <img id="ProductImage" src={prod.image} alt="" />
        {/* Tags */}
        <TagsContainer>
          {prod.tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </TagsContainer>
        <h3 id="name">{prod.name}</h3>
        <p id="description">{prod.description}</p>
        <BuyContainer>
          <Price>
            R$ <span>{PriceToLocalCurrency(prod.price)}</span>
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
  })
}
