'use client'
import { Image } from "@nextui-org/react"

export const Thumbnail = ({ img }: { img: string }) => {
  return (
    <Image
      fetchPriority='auto'
      src={img}
      radius='none'
      loading='lazy'
      height={120}
      width={300}
      className="w-full object-cover"
      removeWrapper
      isBlurred
      style={{ height: "500px" }}
    />
  )
}


