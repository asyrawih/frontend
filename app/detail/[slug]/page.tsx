'use client'
import { Manga, Response, Chapter } from "@/app/page";
import SearchBar from "@/components/search";
import { Image } from "@nextui-org/image";
import { Button, Card, CardBody, CardHeader, Checkbox, Chip, Divider, Spacer } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";

const getDetail = async ({ id }: { id: string }) : Promise<Response<Manga>> => {
  const result = await fetch("http://localhost:3000/manga/manga-slug?manga_id=" + id)
  return result.json()
}

export default async function DetailPages({ params }: { params: { slug: string } }) {
  const { data } = await getDetail({ id: params.slug })
  return (
    <>
      <Card>
        <CardBody className="relative p-0 overflow-y-hidden">
          <Image
            fetchPriority='auto'
            src='https://komikcast.io/wp-content/uploads/2020/04/jhfdjksahkj289a-e1586171017310.jpg'
            radius='none'
            loading='lazy'
            height={120}
            width={300}
            className="w-full object-cover"
            removeWrapper
            isBlurred
            style={{ height: "500px" }}
          />
          {/* Desktop Version */}
          <DesktopVersion manga={data} />

          {/* Mobile Version */}
          <MobileVersion manga={data} />
          {/* Chapter Card */}
          <Spacer y={12} />
        </CardBody>
      </Card>
      <Spacer y={6} />
      <ChapterCard chapter={data.chapter} />
      <Spacer y={12} />
    </>
  )
}

const ChapterCard = ({chapter} : {chapter : Chapter[]}) => {
  const [chap, setDummy] = useState(chapter);
  const [filter, setFilter] = useState('');

  const handleValue = (evt: ChangeEvent<HTMLInputElement>) => {
    const filterValue = evt.target.value;
    setFilter(filterValue);

  };

  useEffect(() => {
    if (filter == '') {
      setDummy(chapter)
    }
    // Filter the dummy data based on the filter value or revert back to the original data if the value is empty
    const filteredDummy = chap.filter((val) => val.chapter.toString().includes(filter.toLowerCase()))
    setDummy(filteredDummy);

  }, [filter])

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <span className="hidden lg:flex">Chapter List</span>
        <SearchBar onChange={handleValue} value={filter} />
      </CardHeader>
      <CardBody className="h-60 overflow-auto">
        <div className="grid grid-cols-3 gap-2">
          {chap.map((val) => (
            <Card isPressable shadow="sm" key={val.chapter_id} className="flex border w-full h-16 justify-center items-center rounded ">
              {`Chapter-${val.chapter}`}
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

const MobileVersion = ({manga}: {manga : Manga} ) => {
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

const DesktopVersion = ({manga}: {manga : Manga} ) => {
  return (
    <div className="hidden lg:flex">
      <div className="w-1/3">
        <div className="relative h-40 w-40 left-5 z-20 -top-[100px]">
          <Image
            src='https://komikcast.io/wp-content/uploads/2020/04/jhfdjksahkj289a-e1586171017310.jpg'
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
            <Checkbox defaultSelected isDisabled size="sm" >Author: {'hanan'}</Checkbox>
            <Checkbox defaultSelected isDisabled size="sm" >Type : {'manhwa'}</Checkbox>
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

