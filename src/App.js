import React from "react"
import Option from "./components/Option"
import bg from "./assets/img/bg.jpeg"

const dests = ["daytona", "bahamas"]

const App = () => {
  return (
    <div className="w-full h-full bg-stone-700 bg-opacity-30">
      <div
        className="bg-cover opacity-70 absolute left-0 top-0 w-full bottom-0 -z-10"
        style={{
          backgroundImage: `url('${bg}')`,
        }}
      />
      <div className="w-full h-full flex flex-col justify-start items-center gap-16 p-10 pt-20">
        <span className="font-black text-stone-800 text-4xl text-center">Puedes elegir una de las opciones</span>
        {dests.map((d, i) => (
          <Option dest={d} index={i + 1} key={d} />
        ))}
      </div>
    </div>
  )
}

export default App
