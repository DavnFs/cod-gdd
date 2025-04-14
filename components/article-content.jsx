import { Eye, Edit, Clock, FileText, Bookmark, Wand2, Printer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArticleContent() {
  return (
    <article className="max-w-4xl">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-serif mr-2">Game Title</h1>
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

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            <strong>Game Title</strong> (<em>Latin: Ludus Exemplaris</em>), commonly referred to as <strong>GT</strong>{" "}
            or <strong>Game</strong>, is a{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              video game
            </Link>{" "}
            developed by{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Studio Name
            </Link>
            . Recent advances in{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              game design
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              technology
            </Link>{" "}
            have shown that the{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              evolution of gameplay
            </Link>{" "}
            occurred in the{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              early 2020s
            </Link>
            . It is commonly played as a{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              single-player experience
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              multiplayer game
            </Link>
            , but also ranges freely as a{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              mobile game
            </Link>{" "}
            avoiding hardware limitations.
          </p>

          <p className="mb-4">
            It is valued by gamers for its compelling storyline and its ability to deliver{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              immersive experiences
            </Link>
            . Its retractable gameplay can be adapted to killing{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              enemy NPCs
            </Link>{" "}
            like{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              bosses
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              minions
            </Link>
            . It has a strong, flexible engine, quick{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              loading times
            </Link>
            , sharp graphics, and its{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              visual fidelity
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              sound design
            </Link>{" "}
            are well developed. It is a{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              AAA title
            </Link>
            , but a solitary experience and a{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              cult classic
            </Link>
            .{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Game communication
            </Link>{" "}
            includes vocalizations like{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              voice chat
            </Link>
            ,{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              pinging
            </Link>
            , typing, messaging,{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              emoting
            </Link>
            , and grunting as well as{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              character animations
            </Link>
            .
          </p>

          <div className="border-t border-gray-200 pt-4 mt-6">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Gameplay
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
              Game Title features an open world environment where players can explore various regions, complete quests,
              and interact with non-playable characters. The combat system combines real-time action with strategic
              elements, allowing players to customize their approach to encounters. Players can choose from multiple
              character classes, each with unique abilities and progression paths.
            </p>
            <p className="mb-4">
              The game includes both PvE (Player versus Environment) and PvP (Player versus Player) modes, with seasonal
              events and regular content updates. The crafting system allows players to create weapons, armor, and
              consumables using materials gathered throughout the game world.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Story
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
              Set in a post-apocalyptic world, Game Title follows the journey of the protagonist as they navigate a
              landscape transformed by a catastrophic event. The narrative explores themes of survival, redemption, and
              the consequences of technological advancement.
            </p>
            <p className="mb-4">
              The main storyline is complemented by numerous side quests that provide deeper insights into the game's
              lore and characters. Player choices throughout the game influence the narrative direction and can lead to
              multiple endings.
            </p>
          </div>
        </div>

        <div className="md:w-72">
          <div className="border border-gray-200 rounded-md overflow-hidden mb-6">
            <div className="bg-gray-100 p-2 font-medium text-center">Game Title</div>
            <div className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=240"
                alt="Game Screenshot"
                width={240}
                height={200}
                className="mx-auto mb-4"
              />
              <div className="text-center text-sm text-gray-600 mb-4">Screenshot from Game Title</div>

              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Developer:</div>
                  <div>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Studio Name
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Publisher:</div>
                  <div>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Publisher Inc.
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Release date:</div>
                  <div>April 2023</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Genre:</div>
                  <div>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Action RPG
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Platforms:</div>
                  <div>PC, PlayStation 5, Xbox Series X/S</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Mode:</div>
                  <div>Single-player, Multiplayer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-gray-100 p-2 font-medium">Contents</div>
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    1 Gameplay
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    2 Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    3 Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    4 Reception
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    5 Awards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    6 References
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    7 External links
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
