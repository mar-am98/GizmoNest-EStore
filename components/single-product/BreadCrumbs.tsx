
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { linkPages } from "@/utils/links"
  
import React from 'react'

function BreadCrumbs({name}:{name:string}) {
  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href={linkPages.HOME.href} className="capitalize text-lg">{linkPages.HOME.name}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href={linkPages.PRODUCTS.href} className="capitalize text-lg">{linkPages.PRODUCTS.name}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem className="capitalize text-lg">
                <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>

  )
}

export default BreadCrumbs