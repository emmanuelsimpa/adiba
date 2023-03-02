import * as React from 'react'
import { Fragment, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import MobileSidebar from './components/MobileSidebar'
import MobileSidebarToggle from './components/MobileSidebarToggle'
// import Settings from '../components/Settings'

interface MasterLayoutProps {
  content: React.ReactNode
}

export default function MasterLayout(props: React.PropsWithChildren<MasterLayoutProps>) {

  const { content } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <MobileSidebar show={sidebarOpen} toggle={setSidebarOpen}/>

        {/* Static sidebar for desktop */}
          <Sidebar/>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <MobileSidebarToggle toggle={setSidebarOpen}/>
            <Topbar/>
          </div>
          <div className='px-4 sm:pr-6 lg:px-8 sm:pt-8'>
          {content}
          </div>
        </div>
      </div>
    </>
  )
}
