import React from 'react'
import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center px-14 py-2 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p>A part of Meta Group</p>
        <div className="mt-40 ">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg border bg-blue-500 p-2 text-white"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
