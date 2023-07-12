'use client'
import { Card, CardBody, CardHeader, Chip, Divider, Image, Spacer } from '@nextui-org/react'
import React from 'react'

export const LatestSection = () => {
  return (
    <div className='mt-3'>
      <Card className='p-3'>
        <CardHeader>
          <span className='text-bold'>Latest Section</span>
        </CardHeader>
        <Divider />
        <CardBody className='p-0 mt-3'>
          <div className='grid gap-2 grid-cols-1 sm:grid-cols-3'>
            <MangaBoxContainer />
            <MangaBoxContainer />
            <MangaBoxContainer />
            <MangaBoxContainer />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

const MangaBoxContainer = () => {
  return (
    <div className='flex'>
      <Image
        isZoomed
        fetchPriority='auto'
        src='https://komikcast.io/wp-content/uploads/2020/04/jhfdjksahkj289a-e1586171017310.jpg'
        width={200}
        radius='sm'
        loading='eager'
      />
      <div className='flex flex-col w-full'>
        <span className='font-bold text-white ml-2 mb-2'>Some Text</span>
        <div id='chapter_continer' className='flex justify-between'>
          <Chip variant='faded' color='default' className='ml-2 cursor-pointer hover:text-blue-300'>Ch.1</Chip>
          <span className='ml-2 text-xs text-gray-600'>2 hours ago</span>
        </div>
      </div>
    </div>
  )
}

