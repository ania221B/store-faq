import data from './data'
import Accordion from './Accordion'
import { useState } from 'react'
import Noise from './Noise'
import Circle from './Circle'

function App () {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <Accordion questions={questions}></Accordion>
      <Noise></Noise>
      <Circle className='circle-top'></Circle>
      <Circle className='circle-bottom'></Circle>
    </main>
  )
}

export default App
