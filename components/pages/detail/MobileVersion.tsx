'use client'
import { Manga } from "@/app/page"
import { Button, Checkbox, Chip } from "@nextui-org/react"

export const MobileVersion = ({ manga }: { manga: Manga  }) => {
  return (
    <div className="flex p-3 lg:hidden">
      <div className="z-30 mt-2 w-full">
        <div>
          <span className="text-2xl font-bold text-gray-500">{manga.title}</span>
        </div>
        <div className="subpixel-antialiased text-gray-500">
          {''}
        </div>
        <div className="subpixel-antialiased text-gray-500 mt-2">
          <Chip className="mx-1 my-1">Action</Chip>
          <Chip className="mx-1 my-1">Adventure</Chip>
          <Chip className="mx-1 my-1">Isekai</Chip>
          <Chip className="mx-1 my-1">Doujin</Chip>
          <Chip className="mx-1 my-1">Hentai</Chip>
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
        <div className="w-full">
          <Button className="w-full">Bookmarks</Button>
        </div>
      </div>
    </div>
  )
}
