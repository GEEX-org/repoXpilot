import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AppSidebar from './app-sidebar'

type Props ={
    children : React.ReactNode
}

const Sidebarlayout = ( { children } : Props ) => {
  return (
    <SidebarProvider>
        <AppSidebar/>
        {/* App Sidebar */}
         <main className="w-full m-2">
            <div className='flex items-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-4'>
                {/* <Searchbar> */}
                <div className="ml-auto"></div>
                <UserButton />
            </div>
            <div className="h-4"></div>
            {/* <MainContent /> */}
            <div className="border-sidebar-border bg-sidebar border shadow rounder-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
                {children}
            </div>
        </main>
    </SidebarProvider>    
  )
}

export default Sidebarlayout