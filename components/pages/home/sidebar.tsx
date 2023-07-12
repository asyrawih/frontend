'use client'

import { Card, CardHeader, Divider } from "@nextui-org/react"

export const Sidebar = ({ title }: { title?: string }) => {
  return (
    <Card className="lg:flex w-full mt-3 ml-2 p-3">
      <CardHeader>{title}</CardHeader>
      <Divider />
    </Card>
  )
}
