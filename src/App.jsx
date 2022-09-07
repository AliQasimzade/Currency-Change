import React, { useState, useEffect } from "react";
import SelectInputs from "./components/SelectInputs/SelectInputs";
import Amount from "./components/Amount/Amount";
import ListOtherCurrencies from "./components/ListOtherCurrencies/ListOtherCurrencies";
import "./App.scss";


const App = () => {
  const [fromCurrency, setFromCurrency] = useState("AZN");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [data, setData] = useState([]);
  const [dataCurrencies,setDataCurrencies] = useState([])
  const [value, setValue] = useState(0);
  const [bool, setBool] = useState(false);
  const [to, setTo] = useState("Lari");
  const [currencyValue, setCurrencyValue] = useState("");
  const [apiKey,setApiKey] = useState("GDtahe7j9ZRMj75hdTzYW7Lw365M48rq")

  useEffect(() => {
    
    let myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=&base=${fromCurrency}`,requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setData(Object.keys(res.rates));
        setDataCurrencies(res.rates)
      })
      .catch((err) => console.log(err.message));
  }, [fromCurrency]);
  return (
    <div className="App">
      <div className="container">
        <SelectInputs
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          currencyValue={currencyValue}
          setCurrencyValue={setCurrencyValue}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          bool={bool}
          setBool={setBool}
          value={value}
          setValue={setValue}
          to={to}
          setTo={setTo}
          data={data}
          apiKey={apiKey}
        />
        <Amount
          currencyValue={currencyValue}
          setCurrencyValue={setCurrencyValue}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          bool={bool}
          setBool={setBool}
          value={value}
          setValue={setValue}
          to={to}
          setTo={setTo}
          apiKey={apiKey}
        />
        <ListOtherCurrencies  dataCurrencies={dataCurrencies}/>
      </div>
    </div>
  );
};

export default App;
