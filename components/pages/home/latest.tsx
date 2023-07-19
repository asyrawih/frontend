'use client'
import { Manga } from '@/app/page'
import { MangaBoxContainer } from "@/components/pages/home/mangaBoxcontainer"
import { GeneratePresignedUrl } from '@/utils/minio'
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

