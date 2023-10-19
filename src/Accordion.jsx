import AccordionPanel from './AccordionPanel'

function Accordion ({ questions }) {
  return (
    <section className='section'>
      <div className='container' data-container='small'>
        <h1>Frequently asked questions</h1>
        {questions.map(question => {
          return (
            <AccordionPanel {...question} key={question.id}></AccordionPanel>
          )
        })}
      </div>
    </section>
  )
}
export default Accordion
