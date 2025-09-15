import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.body}>
      <div>
        <h1>Build a self care routine suitable for you</h1>
        <p>
          Take out test to get a personalised self care routine based on your
          needs.
        </p>
        <NavLink to={"quiz/1"}>Start the quiz </NavLink>
      </div>
    </div>
  );
};

export default Home;
