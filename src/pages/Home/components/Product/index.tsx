import {
  AddToCart,
  BuyContainer,
  Price,
  ProductContainer,
  TagsContainer,
} from './styles'
import { Product } from '../../../../contexts/ProductsContext'
import { useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { CustomInputNumber } from '../../../../components/InputNumber'

function PriceToLocalCurrency(Price: number) {
  return Price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

interface PropsPattern {
  Product: Product
}

export function ProductTemplate(props: PropsPattern) {
  const [quantity, setQuantity] = useState<number | string>('')

  function decreaseQuantity(el: HTMLInputElement | null) {
    if (el) {
      if (parseInt(el.value) > 1) {
        setQuantity(parseInt(el.value) - 1)
      } else {
        setQuantity('')
      }
    }
  }

  function increaseQuantity(el: HTMLInputElement | null) {
    if (el) {
      let inputValue = el.value
      if (!inputValue) {
        inputValue = '0'
      }

      const quantityAsInt = parseInt(inputValue.toString())
      if (quantityAsInt < 10) {
        setQuantity(parseInt(inputValue) + 1)
      }
    }
  }

  function canIncreaseQuantity(): boolean {
    const quantityAsInt = parseInt(quantity.toString())
    if (!isNaN(quantityAsInt)) {
      if (quantityAsInt >= 10) {
        return true
      }
      return false
    }
    return false
  }

  function canDecreaseQuantity(): boolean {
    return isNaN(parseInt(quantity.toString()))
  }

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
          <CustomInputNumber
            idProduct={props.Product.id}
            quantity={quantity}
            canDecreaseQuantity={canDecreaseQuantity}
            canIncreaseQuantity={canIncreaseQuantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
          <AddToCart
            disabled={isNaN(parseInt(quantity.toString()))}
            title="Adicionar ao carrinho"
          >
            <ShoppingCart size={22} weight="fill" />
          </AddToCart>
        </div>
      </BuyContainer>
    </ProductContainer>
  )
}
