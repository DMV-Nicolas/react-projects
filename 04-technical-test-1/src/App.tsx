import { useEffect, useState } from "react"

type CatFactData = {
  fact: string;
  length: number;
}

function App() {
  const [word, setWord] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://catfact.ninja/fact")
      const data: CatFactData = await res.json()
      const firstWord = data.fact.split(" ", 1)[0]
      setWord(firstWord)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (word === "") return
    const fetchData = async () => {
      const res = await fetch(`https://cataas.com/cat/says/${word}`)
      const data = await res.arrayBuffer()
      const arrayBufferView = new Uint8Array(data);
      const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(blob)
      setImageUrl(imageUrl)
    }

    fetchData()
  }, [word])

  return (
    <div className="catFact">
      <img src={imageUrl} />
    </div>
  )
}

export default App
