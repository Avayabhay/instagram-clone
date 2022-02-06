import Image from 'next/image'
import React from 'react'
import {
  BeakerIcon,
  MenuIcon,
  SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
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
              className="insert-y-0 pointer-events-none absolute 
              mt-2 flex items-center pl-3"
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
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-8 w-10 cursor-pointer md:hidden" />
          <div className="relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-white">
              4
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D"
            alt="pro pic"
            className="h=10 w-10 cursor-pointer rounded-full"
          />
        </div>
        {/* menu */}
      </div>
    </div>
  )
}

export default Header
