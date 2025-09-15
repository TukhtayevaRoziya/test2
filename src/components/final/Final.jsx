import style from "./Final.module.css";
import { NavLink } from "react-router-dom";

const Final = () => {
  return (
    <>
      <div className={style.body}>
        <h1>Build you everyday self care routine.</h1>
        <p>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </p>
        <NavLink to={"/quiz/1"}>Retake the quiz</NavLink>
      </div>
      <div className={style.last}>
        <div className={style.last_main}>
          <h1>Daily routine</h1>
          <p>
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </p>
        </div>
        <div className={style.box}>
          <div className={style.img}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <path
                d="M20.8 4.6c-1.9-1.9-5-1.9-6.9 0L12 6.5l-1.9-1.9
           c-1.9-1.9-5-1.9-6.9 0-1.9 1.9-1.9 5 0 6.9l8.8 8.8
           8.8-8.8c1.9-1.9 1.9-5 0-6.9z"
              />
            </svg>
          </div>
          <h1>Milk Body Cleanser</h1>
          <p>$14.00</p>
        </div>
        <div className={style.box}>
          <div className={style.img}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <path
                d="M20.8 4.6c-1.9-1.9-5-1.9-6.9 0L12 6.5l-1.9-1.9
           c-1.9-1.9-5-1.9-6.9 0-1.9 1.9-1.9 5 0 6.9l8.8 8.8
           8.8-8.8c1.9-1.9 1.9-5 0-6.9z"
              />
            </svg>
          </div>
          <h1>Milk Body Cleanser</h1>
          <p>$14.00</p>
        </div>
      </div>
    </>
  );
};

export default Final;
