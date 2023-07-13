'use client'

import { Card, CardBody, CardHeader, Chip, Divider } from "@nextui-org/react"
import clsx from "clsx"


enum Variant {
  Genre = "",
  Chat = ""
}

enum TextVariant {
  lg = "text-xl font-bold",
  xs = "text-xs font-bold"
}

type SidebarProps = {
  title?: string
  type: keyof typeof Variant
  variant: keyof typeof Variant
  textSize: keyof typeof TextVariant
}


export const Sidebar = ({ title, variant, type, textSize }: SidebarProps) => {
  let SidebarBarVariant = clsx('lg:flex w-full mt-3 ml-2 p-3', Variant[variant], TextVariant[textSize])
  return (
    <Card className={SidebarBarVariant}>
      <CardHeader>{title}</CardHeader>
      <Divider />
      <CardBody>
        {type == 'Genre' && (
          <div className="flex">
            <Chip className="m-1">Genre</Chip>
            <Chip className="m-1">Manhwa</Chip>
            <Chip className="m-1">Sonen</Chip>
            <Chip className="m-1">Manga</Chip>
          </div>
        )}
      </CardBody>
    </Card>
  )
}
