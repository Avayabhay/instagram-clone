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
import { signIn, signOut, useSession } from 'next-auth/react'
import Router from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  //for Read-Only values in recoil
  //const [open] = useRecoilValue(modalState);
  // console.log(session)

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl items-center justify-between pr-2 pl-2 lg:mx-auto">
        {/* left */}
        <div className="relative hidden h-16 w-24 cursor-pointer lg:inline-grid">
          {/* InstagramIcon */}
          <Image
            onClick={() => Router.push('/')}
            // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative inline-grid  h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
          {/* InstagramIcon */}
          <Image
            onClick={() => Router.push('/')}
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
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block-w-full rounded-md border-gray-100 bg-gray-100 pl-10
               focus:ring-black sm:text-sm "
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon onClick={() => Router.push('/')} className="navBtn" />
          <MenuIcon className="h-8 w-10 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-white">
                  4
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session.user?.image}
                alt="pro pic"
                className="h=10  w-10 cursor-pointer rounded-full md:inline-grid"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
        {/* menu */}
      </div>
    </div>
  )
}

export default Header
