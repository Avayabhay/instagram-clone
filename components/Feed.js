import React from 'react'
import Stories from '../components/Stories'
import Posts from './Posts'

function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section>
        {/* miniProfile */}
        {/* suggestion */}
      </section>
    </main>
  )
}

export default Feed
