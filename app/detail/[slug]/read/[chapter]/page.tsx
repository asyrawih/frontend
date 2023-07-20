import { Response } from "@/app/page"
import { GeneratePresignedUrl } from "@/utils/minio"

export interface Chapter {
  id: number
  manga_id: number
  chapter_id: number
  file_path: string
}

const GetChapter = async (id: string): Promise<Response<Chapter[]>> => {
  const backend = process.env.BACKEND_URL
  let chapter = await fetch(backend + "/chapter/read?chapter_id=" + id, { next: { revalidate: 2 } })
  return chapter.json()
}

export default async function ChapterRead({params} : {params: {slug: string, chapter: string}}) {
  let { data } = await GetChapter(params.chapter)

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
