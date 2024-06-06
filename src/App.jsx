import { useState } from "react";
import Click from "./components/button/click";
const App = () => {
  const [count , setCount] = useState(0)
  const clickToBtn = ()=>{
    setCount(count + 1)
  }
  const clickBtn = ()=>{
    console.log('cc');
  }

  return (
    <div>
    {count}
      <Click clickBtn={clickBtn}/>
       <button onClick={clickToBtn}>Count</button>
    </div>
  );
};

export default App;