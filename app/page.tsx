import { LatestSection } from "@/components/pages/home/latest";
import { Sidebar } from "@/components/pages/home/sidebar";
import { Spacer } from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <LatestSection title="Hot Update" />
        <LatestSection title="Latest Update" />
        <LatestSection title="Manhwa" />
      </div>
      {/* Sidebar Not Showing On Desktop Mode*/}
      <div className="hidden md:flex flex-col w-2/6">
        <Sidebar title={"Chat"} variant={'Chat'} type="Chat" textSize="lg" />
        <Sidebar title={"Genre"} variant={'Genre'} type="Genre" textSize="lg" />
      </div>
    </div>
  )
}
