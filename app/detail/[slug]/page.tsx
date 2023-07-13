'use client'
import { Image } from "@nextui-org/image";
import { Button, Card, CardBody, CardHeader, Checkbox, Chip, Divider, Spacer } from "@nextui-org/react";


export default function DetailPages({ params }: { params: { slug: string } }) {
  return (
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
              <span className="text-4xl font-bold text-gray-500">Kuro no Shoukanshi Bahasa Indonesia</span>
            </div>
            <div className="subpixel-antialiased text-gray-500">
              The Berserker Rises to Greatness.
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
                <Checkbox defaultSelected size="sm" >Released : {'2022'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Status: {'ongoing'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Total Chapter {'200'}</Checkbox>
              </div>
              <div className="flex flex-col">
                <Checkbox defaultSelected size="sm" >Author: {'hanan'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Type : {'manhwa'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Update On: {'july 2022'}</Checkbox>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-around mt-2">
            <div className="flex flex-col">
              <div className="w-40 h-40 bg-gray-500">
                Rating Start In Here
              </div>
              <Spacer y={3} />
              <Button>Bookmark</Button>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex p-3 lg:hidden">
          <div className="z-30 mt-2">
            <div>
              <span className="text-2xl font-bold text-gray-500">Kuro no Shoukanshi Bahasa Indonesia</span>
            </div>
            <div className="subpixel-antialiased text-gray-500">
              The Berserker Rises to Greatness.
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
                <Checkbox defaultSelected size="sm" >Released : {'2022'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Status: {'ongoing'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Total Chapter {'200'}</Checkbox>
              </div>
              <div className="flex flex-col">
                <Checkbox defaultSelected size="sm" >Author: {'hanan'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Type : {'manhwa'}</Checkbox>
                <Checkbox defaultSelected size="sm" >Update On: {'july 2022'}</Checkbox>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
