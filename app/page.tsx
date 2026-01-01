"use client"

import { useState } from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsContent } from "@/components/docs-content"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Home() {
  const [activeTopic, setActiveTopic] = useState("introduction")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="flex h-16 items-center px-4 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-sm font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-lg font-semibold">metaninza</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              API
            </Button>
            <Button variant="ghost" size="sm">
              Examples
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <DocsSidebar
          activeTopic={activeTopic}
          setActiveTopic={setActiveTopic}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <DocsContent activeTopic={activeTopic} />
      </main>
      </div>
    </div>
  )
}
