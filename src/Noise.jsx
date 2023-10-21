function Noise () {
  return (
    <svg className='grain-image'>
      <filter id='grain'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.5'
          stitchTiles='stitch'
        />
      </filter>
    </svg>
  )
}
export default Noise
