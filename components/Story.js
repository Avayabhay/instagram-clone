import React from 'react'

export default function Story({ img, name }) {
  return (
    <div>
      <img
        className="h-14 w-14 transform rounded-full border-2 border-red-500 p-[1.5px] transition duration-200 ease-out hover:scale-110"
        src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png"
        alt="pic"
      />
      <p className="w-14 truncate text-center text-xs">{name}</p>
    </div>
  )
}
