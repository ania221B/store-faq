import AccordionPanel from './AccordionPanel'

function Accordion ({ questions }) {
  return (
    <section className='section'>
      <div className='container' data-container='small'>
        <h1 className='fs-800 text-center'>Questions customers often have</h1>
        <div className='accordion-container margin-xl'>
          {questions.map(question => {
            return (
              <AccordionPanel {...question} key={question.id}></AccordionPanel>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Accordion
