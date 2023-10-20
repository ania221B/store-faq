import { useRef, useState } from 'react'
import { FaAnglesDown } from 'react-icons/fa6'

function AccordionPanel ({ id, title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  function togglePanel () {
    setIsOpen(!isOpen)
  }

  return (
    <article
      className='accordion__panel'
      data-state={isOpen ? 'opened' : 'closed'}
    >
      <h2 className='accordion__title'>
        <button
          type='button'
          className='button'
          onClick={togglePanel}
          aria-label='show or hide answer'
          aria-controls={`accordion__content-${id}`}
          aria-expanded={isOpen}
        >
          <span className='fs-600'>{title}</span>
          <FaAnglesDown className='accordion__toggle'></FaAnglesDown>
        </button>
      </h2>

      <div
        className='accordion__content'
        id={`accordion__content-${id}`}
        aria-hidden={isOpen ? false : true}
      >
        <div>
          <p className='accordion__text'>{text}</p>
        </div>
      </div>
    </article>
  )
}
export default AccordionPanel
