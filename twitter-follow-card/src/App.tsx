import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    username: "dmvnicolas",
    name: "Nicolas Moreno",
    isFollowing: true
  },
  {
    username: "midudev",
    name: "Miguel Duran",
    isFollowing: false
  },
  {
    username: "mazzatomas",
    name: "Tomas Mazza",
    isFollowing: false
  }
]

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <section className="App">
      {
        users.map(({ username, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={username}
              username={username}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
      <button onClick={handleClick}>{count}</button>
    </section>
  )
}

export default App
