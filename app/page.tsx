import { LatestSection } from "@/components/pages/home/latest";
import { Sidebar } from "@/components/pages/home/sidebar";
import { generatePresignedUrl } from "@/utils/minio";
import { Spacer } from "@nextui-org/react";


export interface Response<T> {
  code: number
  message: string
  data: T
}

export interface Manga {
  id: number
  title: string
  status: string
  release_date: string
  total_chapter: number
  author: string
  type: string
  sinopsis: string
  media_type: string
  file_path: string
  chapter: Chapter[]
}

export interface Chapter {
  chapter_id: number
  chapter: number
  created_at: string
}
const getManga = async (): Promise<Response<Manga[]>> => {
  const req = await fetch("http://localhost:3000/manga/", { next: { revalidate: 5, tags: ["manga"] } })
  return req.json()
}

export default async function Home() {
  const { data } = await getManga()
  let newData = data.map(async (manga: Manga) => {
    const preSignedUrl = await generatePresignedUrl(manga.file_path)
    const modifiedManga = {
      ...manga,
      file_path: preSignedUrl
    }
    return modifiedManga
  })

  const result = await Promise.all(newData)

  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <LatestSection data={result} title="Latest Update" />
      </div>
      {/* Sidebar Not Showing On Desktop Mode*/}
      <div className="hidden md:flex flex-col w-2/6">
        <Sidebar title={"Chat"} variant={'Chat'} type="Chat" textSize="lg" />
        <Sidebar title={"Genre"} variant={'Genre'} type="Genre" textSize="lg" />
      </div>
    </div>
  )
}
