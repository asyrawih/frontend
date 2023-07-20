'use client'
import { Card, CardBody, Spacer } from '@nextui-org/react'
import React from 'react'
import { Thumbnail } from './Thumbnail'
import { DesktopVersion } from './DestktopVersion'
import { MobileVersion } from './MobileVersion'
import { ChapterCard } from './ChapterCard'
import { Manga } from '@/app/page'

export const Detail = ({ data }: { data: Manga }) => {
  return (
    <div>
      <Card>
        <CardBody className="relative p-0 overflow-y-hidden">
          <Thumbnail img={data.file_path} />
          {/* Desktop Version */}
          <DesktopVersion manga={data} />

          {/* Mobile Version */}
          <MobileVersion manga={data} />
          {/* Chapter Card */}
          <Spacer y={12} />
        </CardBody>
      </Card>
      <Spacer y={6} />
      <ChapterCard chapter={data.chapter} manga_id={data.id} />
      <Spacer y={12} />
    </div>
  )
}
