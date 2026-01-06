import { PixelatedCanvas } from './ui/pixelated-canvas'

export const CardPicture = () => {
  return (
    <div className="flex-1 min-w-0 p-1 w-full aspect-3/4 bg-background shadow-elevation-light dark:shadow-elevation-dark-three">
      <div className="relative h-full w-full shadow-elevation-light dark:shadow-elevation-dark-three overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center object-contain">
          <PixelatedCanvas
            src="/profile_picture.jpg"
            responsive={true}
            width={600}
            height={800}
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
    </div>
  )
}
