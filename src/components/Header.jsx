import { Filters } from './Filters.jsx'
import './Header.css'

export function Header ({ changeFilters }) {
    return (
        <>
        <header className='header'>
            <div> 
                <h1 className='title'>e-commerce 🛍️</h1>
            </div>
            <div className='cart'>
                <button className='carrito'><span>🛒</span></button>
            </div>

        </header>
        <section className='section'>   
            <Filters onChange={changeFilters}/>
        </section>
        </>
    )
}