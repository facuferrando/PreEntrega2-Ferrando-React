export const ItemDetail=({product})=>
    (
        <div>
        <h2>{product.name}</h2>
        <h4>{product.category}</h4>
        <img src={product.avatar} alt=""/>
        <h4> Price per unit: ${product.price}</h4>
        </div>
    )