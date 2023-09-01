import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  RemoveProductAction,
  RemoveProductItemAction,
  addNewProductAction,
} from '../reducers/cart/actions'

export interface ProductRelationship {
  idProduct: string
  quantity: number
}

export interface Address {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

interface CartContextType {
  productsRelationship: ProductRelationship[]
  totalProducts: number
  address: Address | null
  paymentMethod: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
  addNewProduct: (newProduct: ProductRelationship) => void
  removeProduct: (idProduct: string) => void
  removeProductItem: (idProduct: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      productsRelationship: [],
      address: null,
      paymentMethod: 'Cartão de Crédito',
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { productsRelationship, address, paymentMethod } = cartState

  const [totalProducts, setTotalProducts] = useState(() => {
    if (productsRelationship.length > 0) {
      let total = 0
      productsRelationship.forEach((prod) => {
        total += prod.quantity
      })

      return total
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  useEffect(() => {
    if (productsRelationship.length > 0) {
      let total = 0
      productsRelationship.forEach((prod) => {
        total += prod.quantity
      })

      setTotalProducts(total)
    } else {
      setTotalProducts(0)
    }
  }, [productsRelationship])

  function addNewProduct(newProduct: ProductRelationship) {
    dispatch(addNewProductAction(newProduct))
  }

  function removeProduct(idProductToBeRemoved: string) {
    dispatch(RemoveProductAction(idProductToBeRemoved))
  }

  function removeProductItem(idProduct: string) {
    dispatch(RemoveProductItemAction(idProduct))
  }

  return (
    <CartContext.Provider
      value={{
        productsRelationship,
        totalProducts,
        address,
        paymentMethod,
        addNewProduct,
        removeProduct,
        removeProductItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
