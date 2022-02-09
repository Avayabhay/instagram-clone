import React from 'react'
import Stories from '../components/Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden pr-2 md:col-span-1 lg:inline-grid">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
