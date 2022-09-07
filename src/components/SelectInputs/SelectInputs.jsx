import React, { useRef, useEffect } from "react";
import ChangeCurrency from "../../assests/images/ChangeCurrency.png";
import "./SelectInputs.scss";
import "./SelectInputs-Media.scss";
import Button from "@mui/material/Button";

const SelectInputs = ({
  data,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  fromCurrency,
  currencyValue,
  to,
  setTo,
  bool,
  setBool,
  value,
  setValue,
  apiKey,
}) => {
  const fromCurrencyRef = useRef("");
  const toCurrencyRef = useRef("");
  useEffect(() => {}, [currencyValue]);
  const changeCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setTimeout(() => {
      if (
        currencyValue === 0 ||
        currencyValue === " " ||
        currencyValue === ""
      ) {
        setBool(false);
      } else {
        fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrencyRef.current.value}&from=${fromCurrencyRef.current.value}&amount=${currencyValue}&apikey=${apiKey}`
        )
          .then((res) => res.json())
          .then((res) => {
            setValue(res.result.toFixed(2));
            setTo(res.query.to);
            setBool(true);
          })
          .catch((err) => console.log(err.message));
      }
    }, 500);
  };
  return (
    <div className="select-inputs">
      <div className="select-buttons">
        <select
          className="select-option"
          ref={fromCurrencyRef}
          value={fromCurrency}
          onChange={(e) => {
            fromCurrencyRef.current.value = e.target.value;
            setFromCurrency(fromCurrencyRef.current.value);
            fetch(
              `https://api.apilayer.com/exchangerates_data/convert?to=${
                toCurrencyRef.current.value
              }&from=${fromCurrencyRef.current.value}&amount=${
                currencyValue ? currencyValue : ""
              }&apikey=${apiKey}`
            )
              .then((res) => res.json())
              .then((res) => {
                setValue(res.result?.toFixed(2));
                setTo(res.query.to);
                setBool(true);
              })
              .catch((err) => console.log(err.message));
          }}
        >
          {data.length > 0 &&
            data.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
      <Button variant="text" onClick={changeCurrency}>
        <img src={ChangeCurrency} alt="changecurrency" />
      </Button>

      <div className="select-buttons">
        <select
          className="select-option"
          onChange={(e) => {
            toCurrencyRef.current.value = e.target.value;
            setToCurrency(toCurrencyRef.current.value);
            fetch(
              `https://api.apilayer.com/exchangerates_data/convert?to=${
                toCurrencyRef.current.value
              }&from=${fromCurrencyRef.current.value}&amount=${
                currencyValue ? currencyValue : ""
              }&apikey=${apiKey}`
            )
              .then((res) => res.json())
              .then((res) => {
                setValue(res.result?.toFixed(2));
                setTo(res.query.to);
                setBool(true);
              })
              .catch((err) => console.log(err.message));
          }}
          ref={toCurrencyRef}
          value={toCurrency}
        >
          {data.length > 0 &&
            data.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInputs;
