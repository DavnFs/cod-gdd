import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ArticleContent from "@/components/article-content"
import Sidebar from "@/components/sidebar"

export default function WikipediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="p-2 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Wiki Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <div>
                <div className="text-xl font-serif tracking-wide">WIKIPEDIA</div>
                <div className="text-xs text-gray-500">The Free Encyclopedia</div>
              </div>
            </Link>
          </div>

          <div className="relative flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Wikipedia"
                className="w-full py-1 px-3 border border-gray-300 rounded-md text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <button className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex">
            <Link href="#" className="px-4 py-2 border-b-2 border-blue-500 font-medium text-blue-500">
              Article
            </Link>
            <Link href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100">
              Talk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:block md:w-64 pr-6">
          <Sidebar />
        </div>

        {/* Article Content */}
        <div className="flex-1 py-4">
          <ArticleContent />
        </div>
      </main>
    </div>
  )
}
