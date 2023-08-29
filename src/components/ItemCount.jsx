import { useState } from "react";

export const ItemCount = () => {
    const[count, setCount] = useState(1);

    const stock=3;
    const handleIncreaseCount = () => {
        if(stock>count){
        setCount(count+1);
    }
}

    const handleDecreaseCount = () => {
        if(count>=1){
        setCount(count-1);
    }
    }

    const onAdd = () =>{
        alert("Usted compra " + count + " componente/s.");
    }
    
    return (
        <div className="itemCount">
            <span onClick={handleDecreaseCount}> - </span>
            <span> {count} </span>
            <span onClick={handleIncreaseCount}> + </span>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
    }