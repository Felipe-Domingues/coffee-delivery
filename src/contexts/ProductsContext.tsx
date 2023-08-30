import { ReactNode, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as ProductImages from '../assets/products'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

interface ProductContextType {
  products: Product[]
}

interface ProductContextProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const products: Product[] = [
    {
      id: uuidv4(),
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      tags: ['Tradicional'],
      image: ProductImages.Expresso,
    },
    {
      id: uuidv4(),
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      tags: ['Tradicional'],
      image: ProductImages.Americano,
    },
    {
      id: uuidv4(),
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      tags: ['Tradicional'],
      image: ProductImages.ExpressoCremoso,
    },
    {
      id: uuidv4(),
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 10.5,
      tags: ['Tradicional', 'Gelado'],
      image: ProductImages.CafeGelado,
    },
    {
      id: uuidv4(),
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 12.99,
      tags: ['Tradicional', 'Com Leite'],
      image: ProductImages.CafeComLeite,
    },
    {
      id: uuidv4(),
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 12.99,
      tags: ['Tradicional', 'Com Leite'],
      image: ProductImages.Latte,
    },
    {
      id: uuidv4(),
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 12.99,
      tags: ['Tradicional', 'Com Leite'],
      image: ProductImages.Capuccino,
    },
    {
      id: uuidv4(),
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 12.99,
      tags: ['Tradicional', 'Com Leite'],
      image: ProductImages.Macchiato,
    },
    {
      id: uuidv4(),
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 12.99,
      tags: ['Tradicional', 'Com Leite'],
      image: ProductImages.Mochaccino,
    },
    {
      id: uuidv4(),
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 15.49,
      tags: ['Especial', 'Com Leite'],
      image: ProductImages.ChocolateQuente,
    },
    {
      id: uuidv4(),
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 15.49,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      image: ProductImages.Cubano,
    },
    {
      id: uuidv4(),
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 15.49,
      tags: ['Especial'],
      image: ProductImages.Havaiano,
    },
    {
      id: uuidv4(),
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 15.49,
      tags: ['Especial'],
      image: ProductImages.Arabe,
    },
    {
      id: uuidv4(),
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 15.49,
      tags: ['Especial', 'Alcoólico'],
      image: ProductImages.Irlandes,
    },
  ]

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
