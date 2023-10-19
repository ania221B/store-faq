function Noise () {
  return (
    <svg>
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
