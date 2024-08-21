import React from 'react'
import { LuMessageSquare } from "react-icons/lu";
function QuickMsgBtn({children='',onClick}) {
  return (
    <button  title='Send a quick message to me,  I will be notified instantly.' onClick={onClick} className="border-b-32 border-dotted font-serif flex items-center gap-1 font-semibold cursor-pointer bg-orange-600 text-gray-100 px-2 py-1 rounded-full h-10 w-10  bottom-2 justify-center"><LuMessageSquare />{children}</button>
  )
}

export default QuickMsgBtn