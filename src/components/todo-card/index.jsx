import React from "react";
import delate from "../../assets/download.jpg";
import style from '../form/main.module.css';

export default function Todo({name,dataId,handleDelate}) {
  return (
    <div className={style.card}>
      <div>
        <h5>{name}</h5>
      </div>
      <div>
        <img
          src={delate}
          alt=""
          onClick={() => {
            handleDelate(dataId);
          }}
        />
      </div>
    </div>
  );
}
