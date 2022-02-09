import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from './Story'

function Stories() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-auto rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {console.log(suggestions)}
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} name={profile.username} />
      ))}
    </div>
  )
}

export default Stories