import { Manga } from "@/app/page"
import { Chip, Image } from "@nextui-org/react"
import Link from "next/link"

export const MangaBoxContainer = ({ manga }: { manga: Manga }) => {
  const chapter = manga.chapter ?? []

  return (
    <div className='flex'>
      <Link href={`/detail/${manga.id}`}>
        <Image
          isZoomed
          fetchPriority='auto'
          src={manga.file_path}
          width={200}
          radius='sm'
          loading='eager'
        />
      </Link>

      <div className='flex flex-col w-full'>
        <span className='font-bold text-white ml-2 mb-2'>{manga.title}</span>
        {chapter.map((chapter) => (
          <div id='chapter_continer' key={chapter.chapter_id} className='flex justify-between mt-1'>
            <Chip variant='faded' size='sm' color='default' className='ml-2 cursor-pointer hover:text-blue-300'>Ch.{chapter.chapter}</Chip>
            <span className='ml-2 text-xs text-gray-600'>{chapter.created_at}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

