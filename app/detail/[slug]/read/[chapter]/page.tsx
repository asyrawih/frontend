import { Response } from "@/app/page"
import { GeneratePresignedUrl } from "@/utils/minio"

type ReadChapter = {

}


export interface Chapter {
  id: number
  manga_id: number
  chapter_id: number
  file_path: string
}

const GetChapter = async (): Promise<Response<Chapter[]>> => {
  const backend = process.env.BACKEND_URL
  let chapter = await fetch(backend + "/chapter/read?chapter_id=3", { next: { revalidate: 3 } })
  return chapter.json()
}

export default async function ChapterRead() {
  let { data } = await GetChapter()

  let newData = data.map(async (chapter: Chapter) => {
    const preSignedUrl = await GeneratePresignedUrl(chapter.file_path)
    const modifiedChapter = {
      ...chapter,
      file_path: preSignedUrl
    }
    return modifiedChapter
  })

  let result = await Promise.all(newData)
  return (
    <div>
      {result.map((manga) => (
        <img
          alt={manga.file_path}
          key={manga.id}
          src={manga.file_path}
        />
      ))}
    </div>
  )
}
