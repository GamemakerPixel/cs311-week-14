"use client"
import { useState, useRef } from "react"


export default function Page() {
  const initialInputText = "Enter a number to begin!"
  const [userInput, setUserInput] = useState<string>(initialInputText);
  const numberInput = useRef<HTMLInputElement>(null)

  const labelClass = "flex flex-col text-center my-4"
  const inputClass = "bg-background mx-auto border-b-2"
  return (
    <div>
      <label className={labelClass}>
	Your number is:
	<input value={userInput} readOnly={true} className={`${inputClass} text-center`}/>
      </label>
      <label className={labelClass}>
	Your number:
	<input placeholder="1, 2, 3..." type="number" ref={numberInput} className={inputClass}/>
      </label>
      <button
	className="mx-auto my-4 border-2 px-4 py-2 rounded-lg block"
	onClick={() => {
	  if (!numberInput.current) {
	    return
	  }
	  setUserInput(numberInput.current.value)
	}}
      >
	Submit
      </button>
    </div>
  )
}
