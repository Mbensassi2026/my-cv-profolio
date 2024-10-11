'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import Footer from '../Footer'

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow">
        <main className={`p-8 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-16' : 'ml-0'}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}