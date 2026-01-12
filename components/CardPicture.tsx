import { useState } from 'react'
import { PixelatedCanvas } from './ui/pixelated-canvas'
import { LoaderFour } from './ui/loader'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

export const CardPicture = () => {
  const [isLoading, setIsLoading] = useState(true)

  const t = useTranslations()

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="flex-1 min-w-0 p-1 w-full aspect-3/4 bg-background shadow-elevation-light dark:shadow-elevation-dark-three">
      <div className="relative h-full w-full shadow-elevation-light dark:shadow-elevation-dark-three overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <LoaderFour text={t('loading')} />
          </div>
        )}
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center object-contain transition-opacity duration-3000',
            !isLoading ? 'opacity-100' : 'opacity-0',
          )}
        >
          <PixelatedCanvas
            src="/profile_picture.jpg"
            onLoad={handleImageLoad}
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
