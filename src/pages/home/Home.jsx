import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Footer from '../../components/footer/Footer'
import './Home.css'

export default function Home() {
  return (
    <div>
        <Topbar/>
        <Feed/>
        <Footer/>
    </div>
  )
}
