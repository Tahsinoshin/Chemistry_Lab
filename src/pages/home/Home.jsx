import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import './Home.css'

export default function Home() {
  return (
    <div>
        <Topbar/>
        <Feed/>
    </div>
  )
}
