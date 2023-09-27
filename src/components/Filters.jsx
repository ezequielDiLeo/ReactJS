export function Filters () {
    return (
        <section className='filters'>

            <div>
                <label htmlFor='price'>Precio</label>
                <input 
                    type="text" 
                    id="price"
                    min='0'
                    max='1000'
                />
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="cremas">Cremas</option>
                    <option value="celulalres">Celulares</option>
                </select>
            </div>

        </section>
    )
}