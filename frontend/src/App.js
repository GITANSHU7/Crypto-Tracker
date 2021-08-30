import React , { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Coin from './components/Coin';
import axios from 'axios';
import Pagination from './components/Pagination';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [showPerPage , setShowPerPage] = useState(5)
    const [pagination , setPagination] = useState({
      start : 0 ,
      end : showPerPage,
    })
  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;


  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
    <Navbar />
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      

      {filteredCoins.slice(pagination.start,pagination.end).map(coin => {
        return (
          <div className = 'coin-cointainer'>
            <div className = 'coin-row'>
                <div className="coin">
                <h1 className = "market">{coin.market_cap_rank}  #</h1>
                    <img src = {coin.image}  />
                    <h1 className="name">{coin.name}</h1>
                    <p className="coin-symbol">{coin.symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹{coin.current_price}</p>
               
                </div>
                <div className="coin-save">
                    <button className= "btn btn-success">Save</button>
                </div>
            </div>
            
        </div>
        );
      })}
      <Pagination showPerPage = {showPerPage} onPaginationChange={onPaginationChange}
          total={coins.length} />
    </div>
    
    </>
  );
}

export default App;
