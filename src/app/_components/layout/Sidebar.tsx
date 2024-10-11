'use client'

import { Home, User, Folder, Mail, Menu } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"
import { cn } from "~/lib/utils"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const sidebarItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Folder, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ]

  return (
    <TooltipProvider>
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-16 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 ease-in-out z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {sidebarItems.map((item) => (
            <Tooltip key={item.label} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link href={item.href} passHref>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
        className={cn(
          "fixed top-4 left-4 z-50 rounded-full shadow-md transition-transform duration-300 ease-in-out",
          isOpen && "translate-x-16"
        )}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </TooltipProvider>
  )
}