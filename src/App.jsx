import React from 'react'
import HelloWorld from './lib'

const App = () => {
  const user = {
    // id: "4fe585d8-1951-41b3-bece-a74aa1c72994",
    name: "Lysha from App.js",
    // email: "sbac@gmail.com",
    // avatar: "https://api.dicebear.com/5.x/lorelei/svg",
  };
  return (
    <HelloWorld user={user} />
  )
}

export default App
