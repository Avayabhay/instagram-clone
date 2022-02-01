import Image from 'next/image'
import React from 'react'
import {
  BeakerIcon,
  MenuIcon,
  SearchIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div>
      <div className="mx-5 flex max-w-6xl items-center justify-between lg:mx-auto">
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
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div
              className="insert-y-0 item-center pointer-events-none 
              absolute mt-2 flex pl-3"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block-w-full rounded-md border-gray-300 bg-gray-50
              pl-10 focus:ring-black sm:text-sm"
              type="text"
              name="search"
              id=""
              placeholder="search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="h-10 w-10" />
          <MenuIcon className="h-6 w-10 cursor-pointer md:hidden" />
          <PaperAirplaneIcon className="h-6 w-10"></PaperAirplaneIcon>
        </div>
        {/* menu */}
      </div>
    </div>
  )
}

export default Header
