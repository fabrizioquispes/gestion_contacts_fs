import React from 'react'
import Sidebar from '../components/Sidebar'
import DataUser from '../components/DataUser'

const Home = () => {
  return (
    <section className='home'>
      <Sidebar />
      <DataUser/>
    </section>
  )
}

export default Home
