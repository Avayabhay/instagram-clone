import React, { useEffect } from 'react'
import { useState } from 'react'
import faker from 'faker'

function Suggestions() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    const people = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    // console.log(people)
    setPeople(people)
  }, [])
  return (
    <div className="mt-10 ml-14">
      <div className="mb-5 flex justify-between border-b shadow-sm">
        <h3 className=" font-bold text-gray-400">Suggestions for You</h3>
        <button className="font-semibold text-gray-500">See all</button>
      </div>
      {people.map((person, i) => (
        <div className="mt-3 flex items-center justify-between" key={i}>
          <img
            className="h-10 w-10 rounded-full border border-red-400 p-[2px]"
            src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png"
            alt=""
          />
          <div className="ml-4 flex-1">
            <span className=" text-sm font-semibold">{person.username}</span>
            <p className="text-xs text-gray-500 ">
              Works at {person.company.name}
            </p>
          </div>
          <div className=" cursor-pointer text-sm text-blue-500">Follow</div>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
