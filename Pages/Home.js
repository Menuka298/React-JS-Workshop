import React from 'react'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <TopicBox food="kottu">
          <span>This is the discription</span>
      </TopicBox>
      <TopicBox food="rice">
          <button>This is button </button>
      </TopicBox>
      <TopicBox food="hoppers"/>
    </div>
  )
}
