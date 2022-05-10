import React, { useState } from "react";
import style from "./pagination.module.css";
export default function Pagination({ page, setPage, maxPage }) {

  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };
  const prevPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value));
    }
    if (
      parseInt(e.target.value) < 1 ||
      parseInt(e.target.value) > Math.ceil(maxPage) ||
      isNaN(parseInt(e.target.value))
    ) {
      setPage(1);
      setInput(1);
    } else {
      setPage(parseInt(e.target.value));
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.pageOrder}>
      <button
        disabled={page <= 1}
        className={style.btnPag}
        name="Previous"
        onClick={prevPage}
      >
        {"<<<"}
      </button>
      <input
        className={style.searchPage}
        type="text"
        name="page"
        autoComplete="off"
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        value={input}
      />
      <p> Page of {maxPage} </p>
      <button
        disabled={page >= Math.ceil(maxPage)}
        className={style.btnPag}
        name="Next"
        onClick={nextPage}
      >
        {">>>"}
      </button>
    </div>
  );
}
