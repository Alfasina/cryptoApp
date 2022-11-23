import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const AutoComplete = ({ data }) => {
   const [coinid, setCoinId]=useState('')
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = data.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  


  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    const navigate=useNavigate()//get Navigator from react router
    const handleClick = (e) => {
      setSuggestions([]);
      setValue(e.target.innerText);
      setSuggestionsActive(false);
      const coins=
      [{uuid: 'Qwsogvtv82FCd', name: 'Bitcoin', symbol: 'BTC'},
      {uuid: 'razxDUgYGNAdQ', name: 'Ethereum', symbol: 'ETH'},
      {uuid: 'HIVsRcGKkPFtW', name: 'Tether USD', symbol: 'USDT'},
      {uuid: 'aKzUVe4Hh_CON', name: 'USDC', symbol: 'USDC'},
      {uuid: 'WcwrkfNI4FUAe', name: 'BNB', symbol: 'BNB'},
      {uuid: 'vSo2fu9iE1s0Y', name: 'Binance USD', symbol: 'BUSD'},
      {uuid: '-l8Mn2pVlRs-p', name: 'XRP', symbol: 'XRP'},
      {uuid: 'qzawljRxB5bYu', name: 'Cardano', symbol: 'ADA'},
      {uuid: 'a91GCGd_u96cF', name: 'Dogecoin', symbol: 'DOGE'},
      {uuid: 'uW2tk-ILY0ii', name: 'Polygon', symbol: 'MATIC'}
      ,
      {uuid: '25W7FG7om', name: 'Polkadot', symbol: 'DOT'}
      ,
      {uuid: 'VLqpJwogdhHNb', name: 'Chainlink', symbol: 'LINK'}
      ,
      {uuid: 'MoTuySvg7', name: 'Dai', symbol: 'DAI'}
      ,
      {uuid: 'xz24e0BjL', name: 'Shiba Inu', symbol: 'SHIB'}
      ,
      {uuid: 'PDKcptVnzJTmN', name: 'OKB', symbol: 'OKB'}
      ,
      {uuid: 'qUhEFk1I61atv', name: 'TRON', symbol: 'TRX'}
      ,
      {uuid: 'Mtfb0obXVh59u', name: 'Wrapped Ether', symbol: 'WETH'}
      ,
      {uuid: 'D7B1x_ks7WhV5', name: 'Litecoin', symbol: 'LTC'}
      ,
      {uuid: 'zNZHO_Sjf', name: 'Solana', symbol: 'SOL'}
      ,
      {uuid: '_H5FVG9iW', name: 'Uniswap', symbol: 'UNI'}
      ,
      {uuid: 'x4WXHge-vvFY', name: 'Wrapped BTC', symbol: 'WBTC'}
      ,
      {uuid: 'dvUj0CzDZ', name: 'Avalanche', symbol: 'AVAX'}
      ,
      {uuid: 'Knsels4_Ol-Ny', name: 'Cosmos', symbol: 'ATOM'}
      ,
      {uuid: 'N2IgQ9Xme', name: 'BitDAO ', symbol: 'BIT'}
      ,
      {uuid: 'Hm3OlynlC', name: 'Trust Wallet Token', symbol: 'TWT'}
      ,
      {uuid: 'hnfQfsYfeIGUQ', name: 'Ethereum Classic', symbol: 'ETC'}
      ,
      {uuid: '3mVx2FX_iJFp5', name: 'Monero', symbol: 'XMR'}
      ,
      {uuid: 'ZlZpzOJo43mIo', name: 'Bitcoin Cash', symbol: 'BCH'}
      ,
      {uuid: 'TpHE2IShQw-sJ', name: 'Algorand', symbol: 'ALGO'}
      ,
      {uuid: 'f3iaFeCKEmkaZ', name: 'Stellar', symbol: 'XLM'}
      ,
      {uuid: '08CsQa-Ov', name: 'WEMIX TOKEN', symbol: 'WEMIX'}
      ,
      {uuid: 'ymQub4fuB', name: 'Filecoin', symbol: 'FIL'}
      ,
      {uuid: '65PHZTpmE55b', name: 'Cronos', symbol: 'CRO'}
      ,
      {uuid: 'ncYFcP709', name: 'PancakeSwap', symbol: 'CAKE'}
      ,
      {uuid: 'SbWqqTui-', name: 'EnergySwap', symbol: 'ENS'}
      ,
      {uuid: 'FEbS54wxo4oIl', name: 'VeChain', symbol: 'VET'}
      ,
      {uuid: 'KfWtaeV1W', name: 'Frax', symbol: 'FRAX'}
      ,
      {uuid: 'QQ0NCmjVq', name: 'Flow', symbol: 'FLOW'}
      ,
      {uuid: 'GSCt2y6YSgO26', name: 'Chiliz', symbol: 'CHZ'}
      ,
      {uuid: 'jad286TjB', name: 'Hedera', symbol: 'HBAR'}
      ,
      {uuid: 'pxtKbG5rg', name: 'The Sandbox', symbol: 'SAND'}
      ,
      {uuid: 'bauj_21eYVwso', name: 'Quant', symbol: 'QNT'}
      ,
      {uuid: 'KpDZ4U6TNZ4J5', name: 'Viva Classic', symbol: 'VIVA'}
      ,
      {uuid: 'JCKLgWPAF', name: 'Pax Dollar', symbol: 'USDP'}
      ,
      {uuid: 'AaQUAs2Mc', name: 'Terra Classic', symbol: 'LUNC'}
      ,
      {uuid: 'aMNLwaUbY', name: 'Internet Computer (DFINITY)', symbol: 'ICP'}
      ,
      {uuid: 'omwkOTglq', name: 'Elrond', symbol: 'EGLD'}
      ,
      {uuid: 'IEJOE2-U2', name: 'BinaryX', symbol: 'BNX'}
      ,
      {uuid: 'CiixT63n3', name: 'Wrapped liquid staked Ether 2.0', symbol: 'WSTETH'}
      ,
      {uuid: 'B8xT718SbVhhh', name: 'Paxos Standard', symbol: 'PAX'}
      ,
      {uuid: 'DCrsaMv68', name: 'NEAR Protocol', symbol: 'NEAR'}
      ,
      {uuid: 'DXwP4wF9ksbBO', name: 'Huobi Token', symbol: 'HT'}
      ,
      {uuid: 'Pe93bIOD2', name: 'Lido DAO Token', symbol: 'LDO'}
      ,
      {uuid: 'fsIbGOEJWbzxG', name: 'Tezos', symbol: 'XTZ'}
      ,
      {uuid: 'iAzbfXiBBKkR6', name: 'EOS', symbol: 'EOS'}
      ,
      {uuid: 'B42IRxNtoYmwK', name: 'Theta Token', symbol: 'THETA'}
      ,
      {uuid: 'tEf7-dnwV3BXS', name: 'Decentraland', symbol: 'MANA'}
      ,
      {uuid: 'ixgUfzmLR', name: 'Aave', symbol: 'AAVE'}
      ,
      {uuid: 'Z96jIvLU7', name: 'Immutable X', symbol: 'IMX'}
      ,
      {uuid: '3nNpuxHJ8', name: 'Frax Share', symbol: 'FXS'}
    ]
  // compare the value entered and find matching coins
  const x= coins.find((coin=>e.target.innerText.toLowerCase()===coin.name.toLowerCase() || e.target.innerText.toLowerCase()===coin.symbol.toLowerCase()))
  console.log(x)
  navigate(`coin/${x.uuid}`)
  }
    return (
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={index === suggestionIndex ? "active" : ""}
              key={index}
              onClick={handleClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="autocomplete">
      <input className="searchInput"
        type="text"
        value={value}
        placeholder='🔍search for details on coin'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestionsActive && <Suggestions />}
    </div>
  );
  
};

export default AutoComplete;