function Clothes({myWord}) {
    return(
        <div className = 'products'>
            {myWord.map(item => {
                const{id, name,  price, image} = item;
                return (
                    <div className = 'product-card' key={id}>
                    <img src = {image} alt = 'clothes' width='330px' height='400px' />
                    <div className = 'product-info'>
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Clothes