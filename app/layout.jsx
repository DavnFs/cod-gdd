"use client";

import { Inter } from "next/font/google";
import { Search, Sun, Moon, X } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState("system");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Dark mode logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    let newTheme;
    if (theme === "light") {
      newTheme = "dark";
      document.documentElement.classList.add("dark");
    } else if (theme === "dark") {
      newTheme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      newTheme = prefersDark ? "light" : "dark";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();

    // Define searchable routes and their display names
    const routes = [
      { path: "/", name: "call of duty 4: modern warfare" },
      { path: "/gameplay", name: "gameplay" },
      { path: "/story-outline", name: "story outline" },
      { path: "/characters", name: "characters" },
      { path: "/characters/imran-zakhaev", name: "imran zakhaev" },
      { path: "/characters/captain-price", name: "captain price" },
      { path: "/characters/soap-mactavish", name: "soap mactavish" },
      { path: "/characters/khaled-al-asad", name: "khaled al-asad" },
      { path: "/characters/victor-zakhaev", name: "victor zakhaev" },
      { path: "/soundtrack", name: "soundtrack" },
      { path: "/level-design", name: "level design" },
      { path: "/game-mechanics", name: "game mechanics" },
      { path: "/game-mechanics", name: "mekanik game" },
      { path: "/story-at-level", name: "cerita pada level" },
      { path: "/story-at-level", name: "story at level" },
    ];

    // Find the first matching route
    const matchedRoute = routes.find((route) =>
      route.name.toLowerCase().includes(query)
    );

    if (matchedRoute) {
      router.push(matchedRoute.path);
      setSearchQuery(""); // Clear the search bar
      setIsSidebarOpen(false); // Close sidebar on mobile after search
    } else {
      // Optionally handle "no results" (e.g., redirect to a search results page)
      router.push("/"); // Redirect to homepage if no match
      setSearchQuery("");
      setIsSidebarOpen(false);
    }
  };

  const getLinkClassName = (path) => {
    // Check if the current path is either exactly this path or a subpath for characters
    const isActive =
      pathname === path ||
      (path === "/characters" && pathname.startsWith("/characters/"));
    return isActive
      ? "px-4 py-2 border-b-2 border-blue-500 dark:border-blue-400 font-medium text-blue-500 dark:text-blue-400"
      : "px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700";
  };

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Header */}
        <header className="w-full border-b bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="lg:hidden">
                  {isSidebarOpen ? (
                    <button
                      onClick={toggleSidebar}
                      className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <X size={24} />
                    </button>
                  ) : (
                    <button
                      onClick={toggleSidebar}
                      className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <span className="sr-only">Open sidebar</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <Link href="/" className="flex-shrink-0 flex items-center mx-2 lg:mx-0">
                  <img
                    src="/images/gamepedia.png"
                    alt="Game Pedia Logo"
                    className="h-8 w-8 mr-2"
                  />
                  <span className="text-xl font-bold">GamePedia</span>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-md mx-4">
                <form onSubmit={handleSearch} className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                      className="w-full py-1 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <Search size={18} className="text-gray-400" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto">
              <nav className="flex space-x-1">
                <Link href="/" className={getLinkClassName("/")}>
                  Home
                </Link>
                <Link href="/gameplay" className={getLinkClassName("/gameplay")}>
                  Gameplay
                </Link>
                <Link
                  href="/story-outline"
                  className={getLinkClassName("/story-outline")}
                >
                  Story Outline
                </Link>
                <Link
                  href="/game-mechanics"
                  className={getLinkClassName("/game-mechanics")}
                >
                  Game Mechanic
                </Link>
                <Link
                  href="/characters"
                  className={getLinkClassName("/characters")}
                >
                  Characters
                </Link>
                <Link
                  href="/soundtrack"
                  className={getLinkClassName("/soundtrack")}
                >
                  Soundtrack
                </Link>
                <Link
                  href="/level-design"
                  className={getLinkClassName("/level-design")}
                >
                  Level Design
                </Link>
                <Link
                  href="/story-at-level"
                  className={getLinkClassName("/story-at-level")}
                >
                  Story on Level
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-4 flex">
          {/* Sidebar - Hidden on mobile, shown when toggled */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:static lg:w-64 transition-transform duration-300 ease-in-out`}
          >
            <Sidebar />
          </div>

          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleSidebar}
            />
          )}

          {/* Page Content */}
          <div className="flex-1 lg:ml-4">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}