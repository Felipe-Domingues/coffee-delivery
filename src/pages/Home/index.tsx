import { Intro } from './components/Intro'
import { Container, ProductsList } from './styles'
import { ProductTemplate } from './components/Product'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductsContext'

export function Home() {
  const { products } = useContext(ProductContext)

  return (
    <>
      <Intro />
      <Container>
        <h2>Nossos cafés</h2>
        <ProductsList>
          {products.map((prod) => {
            return <ProductTemplate key={prod.id} Product={prod} />
          })}
        </ProductsList>
      </Container>
    </>
  )
}
