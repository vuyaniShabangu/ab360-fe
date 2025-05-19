'use client'

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MenuItem } from "@/types/menu-items.enum"
import { Header } from "@/components/header"
import BrandingModule from "@/components/branding/branding-module"

export default function BrandingPage() {
  return (
    <div className="flex bg-background font-lexend">
      <DashboardSidebar activeMenuItem={MenuItem.BrandManagement} />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-6">
          <h1 className="text-3xl font-normal">Brand Management</h1>
          
          <section className="mt-8">
            <BrandingModule />
          </section>
        </main>
      </div>
    </div>
  );
}