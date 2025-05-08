"use client"

import Link from "next/link"
import {
  Home,
  Briefcase,
  BarChart2,
  Search,
  Calendar,
  LineChart,
  FileText,
  Lightbulb,
  Plus,
  MessageSquare,
  HelpCircle,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r font-lexend font-light text-text-black">
        <SidebarHeader className="flex flex-row items-center gap-2 px-5 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200">
            <span className="text-sm">🐻</span>
          </div>
          <span className="text-lg font-medium text-text-black">Bear Fruit</span>
        </SidebarHeader>
        <SidebarContent className="px-5 text-text-black text-xs">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="bg-purple-light-bg text-slate-700">
                <Link href="/dashboard">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Briefcase className="h-5 w-5" />
                  <span>Brand Management</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <BarChart2 className="h-5 w-5" />
                  <span>Digital Marketing</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Search className="h-5 w-5" />
                  <span>Marketing Research</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Calendar className="h-5 w-5" />
                  <span>Media Planning</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <LineChart className="h-5 w-5" />
                  <span>Marketing Strategy</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <FileText className="h-5 w-5" />
                  <span>Proposal & Pitch Development</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Lightbulb className="h-5 w-5" />
                  <span>Experiential Marketing</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="bg-primary text-white hover:bg-slate-800">
                <button className="flex justify-center text-sm font-normal">
                  <span>New Campaign</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button>
                  <Plus className="h-5 w-5" />
                  <span>Invite team</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button>
                  <MessageSquare className="h-5 w-5" />
                  <span>Feedback</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button>
                  <HelpCircle className="h-5 w-5" />
                  <span>Help and docs</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
