import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Product, cartReducer } from '../reducers/products/reducer'
import {
  RemoveProductAction,
  RemoveProductItemAction,
  addNewProductAction,
} from '../reducers/products/actions'

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
  products: Product[]
  totalProducts: number
  address: Address | null
  paymentMethod: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
  addNewProduct: (newProduct: Product) => void
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
      products: [],
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

  const { products, address, paymentMethod } = cartState

  const [totalProducts, setTotalProducts] = useState(() => {
    if (products.length > 0) {
      let total = 0
      products.forEach((prod) => {
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

  function addNewProduct(newProduct: Product) {
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
        products,
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
