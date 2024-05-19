import { useState } from "react";

function App() {
  const[count,setValue] = useState(0);
  function DecrementHandler(){
    setValue(count-1);
  }
  function IncrementHandler(){
    setValue(count+1);
  }
  function ResetHandler(){
    setValue(0) ;
  }
  return (
    <div className="bg-[#344151] w-[100vw] h-[100vh] flex flex-col justify-center gap-10 items-center">
      <h1 className=" font-medium text-2xl text-[#0398d4]">Increment & Decrement</h1>
      <div className="flex justify-center bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={DecrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold text-5xl gap-12">{count}</div>
        <button onClick={IncrementHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <div onClick={ResetHandler} className="bg-[#0398d4] text-white py-2 px-5 rounded-sm text-lg cursor-pointer">
        Reset
      </div>
    </div>
  );
}

export default App;
