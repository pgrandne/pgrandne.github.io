import Image from 'next/image'
import { PixelatedCanvas } from './ui/pixelated-canvas'

export const CardPicture = () => {
  return (
    <div className="relative p-1 text-left md:text-left w-full bg-background shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark">
      <div className="space-y-2 md:space-y-8 lg:space-y-10 h-full mx-auto md:mx-0 w-full shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-1 py-1 md:px-1 p-1.5 bg-card/50">
        <PixelatedCanvas
          src="/profile_picture.jpg"
          width={500}
          height={600}
          cellSize={3}
          dotScale={0.9}
          shape="square"
          backgroundColor="#000000"
          dropoutStrength={0.3}
          interactive
          distortionStrength={3}
          distortionRadius={80}
          distortionMode="swirl"
          followSpeed={0.2}
          jitterStrength={4}
          jitterSpeed={4}
          sampleAverage
          tintColor="#FFFFFF"
          tintStrength={0.2}
        />
      </div>
    </div>
  )
}
