'use client'
import { Manga } from "@/app/page"
import { Button, Checkbox, Chip, Image, Spacer } from "@nextui-org/react"
import { data } from "autoprefixer"

export const DesktopVersion = ({ manga }: { manga: Manga }) => {
  return (
    <div className="hidden lg:flex">
      <div className="w-1/3">
        <div className="relative h-40 w-40 left-5 z-20 -top-[100px]">
          <Image
            src={manga.file_path}
            radius='none'
            loading='lazy'
            className="w-full object-center"
            removeWrapper
          />
        </div>
      </div>
      <Spacer x={12} />
      <div className="z-30 mt-2 flex flex-col justify-between w-full">
        <div>
          <span className="text-4xl font-bold text-gray-500">{manga.title}</span>
        </div>
        <div className="subpixel-antialiased text-gray-500">
          {''}
        </div>
        <div className="subpixel-antialiased text-gray-500 mt-2">
          <Chip className="mx-1">Action</Chip>
          <Chip className="mx-1">Adventure</Chip>
          <Chip className="mx-1">Isekai</Chip>
          <Chip className="mx-1">Doujin</Chip>
          <Chip className="mx-1">Hentai</Chip>
        </div>
        <div className="flex flex-row gap-1 mt-2 mb-2 justify-between">
          <div className="flex flex-col">
            <Checkbox defaultSelected isDisabled size="sm" >Released : {manga.release_date}</Checkbox>
            <Checkbox defaultSelected isDisabled size="sm" >Status: {manga.status}</Checkbox>
            <Checkbox defaultSelected isDisabled size="sm" >Total Chapter {manga.total_chapter}</Checkbox>
          </div>
          <div className="flex flex-col">
            <Checkbox defaultSelected isDisabled size="sm" >Author: {manga.author}</Checkbox>
            <Checkbox defaultSelected isDisabled size="sm" >Type : {manga.type}</Checkbox>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around mt-2">
        <div className="flex flex-col">
          <div className="w-40 h-40 bg-gray-500">
            {'Entar Belom Jadi'}
          </div>
          <Spacer y={3} />
          <Button>Bookmark</Button>
        </div>
      </div>
    </div>
  )
}

