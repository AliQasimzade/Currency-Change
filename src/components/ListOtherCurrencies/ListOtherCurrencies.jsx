import React, { useState, useEffect } from "react";
import EUR from "../../assests/images/EUR.png";
import USD from "../../assests/images/USD.png";
import RUB from "../../assests/images/RUB.png";
import TRY from "../../assests/images/TRY.png";
import "./ListOtherCurrencies.scss";
import "./ListOtherCurrencies-Media.scss";

const ListOtherCurrencies = ({ dataCurrencies }) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const selectedCurrencies = ["USD", "EUR", "TRY", "RUB"];
    const filteredUsers = Object.keys(dataCurrencies)
      .filter((key) => selectedCurrencies.includes(key))
      .reduce((obj, key) => {
        obj[key] = dataCurrencies[key];
        return obj;
      }, {});

    setListData(filteredUsers);
    console.log(listData);
  }, [dataCurrencies]);
  return (
    <>
    {listData == {}? <h2>No Data</h2> : <ul>
     <li>
       <div className="symbol">
         <img src={USD} alt="USD" />
         <span>Dollar</span>
       </div>
       <span>{listData.USD?.toFixed(2)}</span>
     </li>
     <li>
       <div className="symbol">
         <img src={TRY} alt="TRY" />
         <span>TL</span>
       </div>
       <span>{listData.TRY?.toFixed(2)}</span>
     </li>
     <li>
       <div className="symbol">
         <img src={EUR} alt="EUR" />
         <span>Euro</span>
       </div>
       <span>{listData.EUR?.toFixed(2)}</span>
     </li>
     <li>
       <div className="symbol">
         <img src={RUB} alt="RUB" />
         <span>Rubl</span>
       </div>
      <span> {listData.RUB?.toFixed(2)}</span>
     </li>
   </ul>}
    </>
  );
};

export default ListOtherCurrencies;
