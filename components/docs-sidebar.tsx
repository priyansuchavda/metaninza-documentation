"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, ChevronDown, Book, Zap, Shield, User, Users, Gamepad2, Trophy, Gift, ShoppingBag, Target, Swords } from "lucide-react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface DocsSidebarProps {
  activeTopic: string
  setActiveTopic: (topic: string) => void
  isOpen: boolean
  onClose: () => void
}

const productTopics = [
  {
    id: "product-overview",
    title: "Product Overview",
    icon: Gamepad2,
  },
  {
    id: "tournaments",
    title: "Tournaments",
    icon: Trophy,
  },
  {
    id: "casual-games",
    title: "Casual Games",
    icon: Target,
  },
  {
    id: "quests-rewards",
    title: "Quests & Rewards",
    icon: Gift,
  },
  {
    id: "shop",
    title: "Shop & Rewards",
    icon: ShoppingBag,
  },
]

const apiTopics = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Zap,
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: Shield,
  },
  {
    id: "user",
    title: "User & Login",
    icon: User,
  },
  {
    id: "teams",
    title: "Teams",
    icon: Users,
  },
]

const tournamentSubTopics = [
  {
    id: "tournaments-api-overview",
    title: "Overview",
    icon: Swords,
  },
  {
    id: "tournaments-api-tournament",
    title: "Tournament API",
    icon: Swords,
  },
  {
    id: "tournaments-api-rounds-groups",
    title: "Rounds & Groups",
    icon: Swords,
  },
  {
    id: "tournaments-api-matches",
    title: "Matches",
    icon: Swords,
  },
]

export function DocsSidebar({ activeTopic, setActiveTopic, isOpen, onClose }: DocsSidebarProps) {
  const [tournamentsExpanded, setTournamentsExpanded] = useState(() => {
    // Auto-expand if any tournament topic is active
    return activeTopic.startsWith("tournaments-api")
  })
  const [prevActiveTopic, setPrevActiveTopic] = useState(activeTopic)

  const isTournamentActive = activeTopic.startsWith("tournaments-api")
  const wasTournamentActive = prevActiveTopic.startsWith("tournaments-api")

  // Auto-expand when switching TO a tournament topic from a non-tournament topic
  useEffect(() => {
    if (isTournamentActive && !wasTournamentActive) {
      setTournamentsExpanded(true)
    }
    setPrevActiveTopic(activeTopic)
  }, [activeTopic, isTournamentActive, wasTournamentActive])

  const handleTournamentsToggle = () => {
    setTournamentsExpanded(!tournamentsExpanded)
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card transition-transform duration-200 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="text-sm font-semibold">Navigation</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {/* Product Documentation Section */}
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Product Documentation
                </h4>
                <div className="space-y-1">
                  {productTopics.map((topic) => {
                    const Icon = topic.icon
                    return (
                      <button
                        key={topic.id}
                        onClick={() => {
                          setActiveTopic(topic.id)
                          onClose()
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          activeTopic === topic.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="flex-1 text-left">{topic.title}</span>
                        {activeTopic === topic.id && <ChevronRight className="h-4 w-4 shrink-0" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* API Documentation Section */}
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  API Documentation
                </h4>
                <div className="space-y-1">
                  {apiTopics.map((topic) => {
                    const Icon = topic.icon
                    return (
                      <button
                        key={topic.id}
                        onClick={() => {
                          setActiveTopic(topic.id)
                          onClose()
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          activeTopic === topic.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="flex-1 text-left">{topic.title}</span>
                        {activeTopic === topic.id && <ChevronRight className="h-4 w-4 shrink-0" />}
                      </button>
                    )
                  })}
                  
                  {/* Tournaments Expandable Section */}
                  <div>
                    <button
                      onClick={handleTournamentsToggle}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                    >
                      <Swords className="h-4 w-4 shrink-0" />
                      <span className="flex-1 text-left">Tournaments</span>
                      {tournamentsExpanded ? (
                        <ChevronDown className="h-4 w-4 shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      )}
                    </button>
                    
                    {tournamentsExpanded && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {tournamentSubTopics.map((topic) => {
                          return (
                            <button
                              key={topic.id}
                              onClick={() => {
                                setActiveTopic(topic.id)
                                onClose()
                              }}
                              className={cn(
                                "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                                activeTopic === topic.id
                                  ? "bg-accent text-accent-foreground"
                                  : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                              )}
                            >
                              <span className="flex-1 text-left">{topic.title}</span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-border p-4">
            <p className="text-xs text-muted-foreground">Version 1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  )
}
