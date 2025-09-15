import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Final from "./components/final/Final";

function App() {

  const elem = [
    {id: 1, isBack: false},
    {id: 2, isBack: true, opt:["Daily", "Every other day", "Twice a week", "Once a week", "Every two weeks"], title:'How often do you wash your hair?'},
    {id: 3, isBack: true, opt:["Anti-breakage", "Hydration", "Soothing dry scalp", "Repairs appearance of damaged hair", "Volume", 'Curl and coil enhancing'], title:'What benefit do you look for in your hair products?'},
    {id: 4, isBack: true, opt:["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"], title:'Is there anything troubling you about your hair?'},
    {id: 5, isBack: true, opt:["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"], title:'What is your natural hair color today?'},
  ]

  const elemMap = elem.map((e)=>(
        <Route path={`/quiz/${e.id}`} element={<Quiz number={e.id} isBack={e.isBack} title={e.title} opt={e.opt} />} />

  ))
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/6" element={<Final />} />
        {elemMap}
      </Routes>
    </div>
  );
}

export default App;
