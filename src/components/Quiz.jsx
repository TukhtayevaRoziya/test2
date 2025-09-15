import { NavLink } from "react-router-dom";
import style from "./Quiz.module.css";
import { useState } from "react";

const Quiz = ({
  title = "What's your hair type or texture?",
  opt = ["straight", "curly", "wavy", "fine"],
  number,
  isBack = false,
}) => {

    console.log(number)
  const [selectedInd, setSelectedInd] = useState(null);
  let prog = 110 - 30 * (number - 1);

    const prevNumber = number - 1;
  const nextNumber = number + 1;
  return (
    <div className={style.body}>
      <div style={{ width: "70% " }}>
        <h1>{title}</h1>
        <div>
          {opt.map((item, index) => (
            <p
              className={style.opt}
              key={index}
              onClick={() => setSelectedInd(index)}
              style={{
                cursor: "pointer",
                borderColor: selectedInd === index ? "#5BEDA1" : "#5bc1ed",
              }}
            >
              {String.fromCharCode(97 + index)}. {item}
            </p>
          ))}
        </div>

        <NavLink className={style.back} to={isBack ? "/quiz/" + prevNumber : "/"}>
          Back
        </NavLink>
        <NavLink className={style.next} to={"/quiz/" + nextNumber}>
          Next question →
        </NavLink>
      </div>
      <div>
        <div className={style.circular_progress}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            aria-labelledby="title"
            role="graphic"
          >
            <title id="title">svg circular progress bar</title>
            <circle cx="50" cy="50" r="40"></circle>
            <circle
              style={{
                strokeDashoffset: `calc(0.3 * (2 * 3.142 * ${prog}))`,
              }}
              cx="50"
              cy="50"
              r="40"
              id="pct-ind"
            ></circle>
          </svg>
          <p className={style.pct}> {isBack ? number : 1} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
