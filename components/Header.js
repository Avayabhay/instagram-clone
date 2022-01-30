import Image from 'next/image'
import React from 'react'
import { BeakerIcon, SearchIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        {/* left */}
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          {/* InstagramIcon */}
          <Image
            // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative inline-grid  h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
          {/* InstagramIcon */}
          <Image
            // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div>
          <div>
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input type="text" name="search" id="" placeholder="search" />
        </div>
        SearchBar
        {/* right */}
        menu
      </div>
    </div>
  )
}

export default Header
