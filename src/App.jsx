import data from './data'
import Accordion from './Accordion'
import { useState } from 'react'

function App () {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <Accordion questions={questions}></Accordion>
    </main>
  )
}

export default App
