import React from "react"
import daytona from "../assets/img/daytona.jpeg"
import bahamas from "../assets/img/bahamas.jpeg"

const options = {
  daytona: {
    name: "Nassau",
    image: bahamas,
    url: "https://www.booking.com/Share-7q7eiX",
  },
  bahamas: {
    name: "Daytona Beach",
    image: daytona,
    url: "https://www.booking.com/Share-9XUDum",
  },
}

const Option = ({ dest, index }) => {
  const { image, url, name } = options[dest]
  return (
    <a className="w-full" href={url}>
      <div
        className="w-full aspect-video rounded-xl shadow-black shadow-2xl bg-cover border-2 border-white text-center text-2xl text-blue-950 font-semibold p-3 cursor-pointer"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {index} - {name}
      </div>
    </a>
  )
}

export default Option
