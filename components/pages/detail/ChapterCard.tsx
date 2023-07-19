'use client'
import { Chapter } from "@/app/page";
import SearchBar from "@/components/search";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

export const ChapterCard = ({ chapter }: { chapter: Chapter[] }) => {
  const [filter, setFilter] = useState<Chapter[]>([]);
  const [filterValue, setFilterValue] = useState('')

  const handleValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(evt.target.value)
    const filterData = chapter.filter((manga: Chapter) => {
      return manga.chapter.toString().includes(evt.target.value);
    })
    setFilter(filterData)
  };

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <span className="hidden lg:flex">Chapter List</span>
        <SearchBar onChange={(e) => handleValue(e)} value={filterValue} />
      </CardHeader>
      <CardBody className="h-60 overflow-auto">
        <div className="grid grid-cols-3 gap-2">
          {filter.length > 0 ?
            filter.map((val) => (
              <Card isPressable shadow="sm" key={val.chapter_id} className="flex border w-full h-16 justify-center items-center rounded ">
                {`Chapter-${val.chapter}`}
              </Card>
            )) : chapter.map((val) => (
              <Card isPressable shadow="sm" key={val.chapter_id} className="flex border w-full h-16 justify-center items-center rounded ">
                {`Chapter-${val.chapter}`}
              </Card>
            ))
          }
        </div>
      </CardBody>
    </Card>
  )
}
