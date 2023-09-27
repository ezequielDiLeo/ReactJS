import './Products.css'
import { AddToCartIcon } from './icons.jsx'

export function Products ({ products }) {
    return(
        <main className='products'>
            <ul className='contenedorProducts'>
                {products.slice(10,30).map(product => (
                    <li className='itemsProducts' key={product.id}>
                        <img 
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button className='button'>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

