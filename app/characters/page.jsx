import { Eye, Edit, Clock, FileText, Bookmark, Wand2, Printer } from "lucide-react";
import Link from "next/link";

export default function CharactersPage() {
  return (
    <article className="max-w-4xl">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-serif mr-2">Characters</h1>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
      </div>

      {/* Article Tools */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <Eye size={16} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <Edit size={16} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <Clock size={16} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <FileText size={16} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <Bookmark size={16} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <Wand2 size={16} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md flex items-center justify-center">
          <Printer size={16} />
        </button>
      </div>

      <div className="flex-1">
        <div>
          <h2 className="text-xl font-serif mb-2 flex items-center">
            Overview
            <button className="ml-2 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </h2>
          <p className="mb-4">
            The characters of{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Call of Duty 4: Modern Warfare
            </Link>{" "}
            play a pivotal role in the game’s narrative and gameplay. From the protagonists of the British SAS to the antagonists leading the ultranationalist forces, each character contributes to the intense military conflict depicted in the game.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-6">
          <h2 className="text-xl font-serif mb-2 flex items-center">
            Main Characters
            <button className="ml-2 text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </h2>
          <ul className="space-y-4">
            <li>
              <Link href="/characters/imran-zakhaev" className="text-blue-600 hover:underline">
                Imran Zakhaev
              </Link>{" "}
              - The primary antagonist and leader of the ultranationalist forces.
            </li>
            <li>
              <Link href="/characters/captain-price" className="text-blue-600 hover:underline">
                Captain John Price
              </Link>{" "}
              - A British SAS officer and key protagonist.
            </li>
            <li>
              <Link href="/characters/soap-mactavish" className="text-blue-600 hover:underline">
                John "Soap" MacTavish
              </Link>{" "}
              - A new SAS recruit and playable character.
            </li>
            <li>
              <Link href="/characters/khaled-al-asad" className="text-blue-600 hover:underline">
                Khaled Al-Asad
              </Link>{" "}
              - A Middle Eastern warlord allied with Zakhaev.
            </li>
            <li>
              <Link href="/characters/victor-zakhaev" className="text-blue-600 hover:underline">
                Victor Zakhaev
              </Link>{" "}
              - Imran Zakhaev’s son and a key ultranationalist figure.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}