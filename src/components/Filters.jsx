import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState (0)
    const categoryFilterId = useId()
    const minPriceFilterId = useId()

    const handleChangeMinPrice = (event => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    })


    const handleChangeCategory = (event) =>{
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }


    return (

        <section className='filters'>

            <div>
                    <label htmlFor={minPriceFilterId}>precio a partir de: </label>
                    <input 
                        type="range"
                        id={minPriceFilterId}
                        min='0'
                        max='1000'
                        onChange={handleChangeMinPrice}
                    />
                    <span>${minPrice}</span>
            </div>


            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="fragances">Perfumes</option>
                    <option value="smartphones">Celulares</option>
                    <option value="laptops">Notebooks</option>
                </select>
            </div>

        </section>
    )
}