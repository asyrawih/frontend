'use client'
import { Manga } from '@/app/page'
import { generatePresignedUrl } from '@/utils/minio'
import { Card, CardBody, CardHeader, Chip, Divider, Image, Spacer } from '@nextui-org/react'
import { data } from 'autoprefixer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

type LatestSectionProps = {
  title?: string
  data: Manga[] | undefined
}

export const LatestSection = ({ title, data }: LatestSectionProps) => {
  return (
    <div className='mt-3'>
      <Card className='p-3'>
        <CardHeader>
          <span className='font-bold, text-xl'>{title}</span>
        </CardHeader>
        <Divider />
        <CardBody className='p-0 mt-3'>
          <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {data?.map((manga) => (
              <MangaBoxContainer manga={manga} key={manga.id} />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

const MangaBoxContainer = ({ manga }: { manga: Manga }) => {
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

