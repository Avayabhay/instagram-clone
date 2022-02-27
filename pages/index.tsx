import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>This is Instagram build by ABHAY</h1> */}

      <Modal />
      {/* header         */}
      <Header />

      {/* feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}
