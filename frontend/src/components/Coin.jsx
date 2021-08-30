import React from 'react';
import './Coin.css'; 

const Coin = ({name, image , symbol , price , pageNumber , setPageNumber}) => {
   
   
    return (
        <div className = 'coin-cointainer'>
            <div className = 'coin-row'>
                <div className="coin">
                    <img src = {image}  />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹{price}</p>
               
                </div>
                <div className="coin-save">
                    <button>Save</button>
                </div>
            </div>
        </div>



    )
}

export default Coin;