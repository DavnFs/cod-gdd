import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="py-4">
     <div className="mb-6">
  <div className="flex items-center mb-2">
    <ChevronDown className="w-4 h-4 mr-1" />
    <h3 className="font-medium text-sm">Contents</h3>
  </div>
  <ul className="pl-4 text-sm space-y-2">
    <li className="flex justify-between">
      <Link href="#" className="text-blue-600 hover:underline">
        Campaign
      </Link>
      <ChevronRight className="w-4 h-4" />
    </li>
    <li className="flex justify-between">
      <Link href="#" className="text-blue-600 hover:underline">
        Multiplayer
      </Link>
      <ChevronRight className="w-4 h-4" />
    </li>
    <li className="flex justify-between">
      <Link href="#" className="text-blue-600 hover:underline">
        Weapons
      </Link>
      <ChevronRight className="w-4 h-4" />
    </li>
    <li className="flex justify-between">
      <Link href="#" className="text-blue-600 hover:underline">
        Maps
      </Link>
      <ChevronRight className="w-4 h-4" />
    </li>
    <li>
      <Link href="#" className="text-blue-600 hover:underline">
        Development
      </Link>
    </li>
  </ul>
  </div>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <ChevronDown className="w-4 h-4 mr-1" />
          <h3 className="font-medium text-sm">Top-level articles</h3>
        </div>
        <ul className="pl-4 text-sm space-y-2">
          <li className="flex justify-between">
            <Link href="#" className="text-blue-600 hover:underline">
              Felis Cameora species
            </Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="flex justify-between">
            <Link href="#" className="text-blue-600 hover:underline">
              Cats
            </Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="flex justify-between">
            <Link href="#" className="text-blue-600 hover:underline">
              Breeds
            </Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="pl-4">
            <Link href="#" className="text-blue-600 hover:underline">
              American curl
            </Link>
          </li>
          <li className="pl-4">
            <Link href="#" className="text-blue-600 hover:underline">
              Sphynx
            </Link>
          </li>
          <li className="pl-4">
            <Link href="#" className="text-blue-600 hover:underline">
              German Rex
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <ChevronDown className="w-4 h-4 mr-1" />
          <h3 className="font-medium text-sm">Tools</h3>
        </div>
        <ul className="pl-4 text-sm space-y-2">
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="#" className="text-blue-600 hover:underline">
              Watch changes
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <Link href="#" className="text-blue-600 hover:underline">
              Related pages
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="#" className="text-blue-600 hover:underline">
              Permanent link
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="#" className="text-blue-600 hover:underline">
              Cite this page
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="#" className="text-blue-600 hover:underline">
              Download PDF
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
