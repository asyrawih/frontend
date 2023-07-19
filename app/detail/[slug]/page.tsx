import { Manga, Response, Chapter } from "@/app/page";
import { Detail } from "@/components/pages/detail/Detail";
import { GeneratePresignedUrl } from "@/utils/minio";

const getDetail = async ({ id }: { id: string }): Promise<Response<Manga>> => {
  const result = await fetch("http://localhost:3000/manga/manga-slug?manga_id=" + id, { next: { revalidate: 5, tags: ['detail_manga'] } })
  return result.json()
}

export default async function DetailPages({ params }: { params: { slug: string } }) {
  const { data } = await getDetail({ id: params.slug })
  const result = await GeneratePresignedUrl(data.file_path)
  let newData: Manga = {
    ...data,
    file_path: result
  }

  return (
    <div>
      <Detail data={newData} />
    </div>
  )
}

