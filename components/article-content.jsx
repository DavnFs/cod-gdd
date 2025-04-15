"use client";

import { Eye, Edit, Clock, FileText, Bookmark, Wand2, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleContent() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article className="max-w-4xl">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-serif mr-2">Call of Duty 4: Modern Warfare</h1>
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
          <div id="executive-summary">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Executive Summary
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
              <strong>Call of Duty 4: Modern Warfare</strong>, commonly referred to as <strong>COD4:MW</strong>, is a{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                first-person shooter
              </Link>{" "}
              developed by{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Infinity Ward
              </Link>{" "}
              and published by{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Activision
              </Link>
              . Released in 2007, it revolutionized the FPS genre by shifting from World War II settings to{" "}
              <Link href="/story-outline" className="text-blue-600 hover:underline">
                contemporary conflicts
              </Link>
              , featuring advanced{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                weaponry
              </Link>{" "}
              and{" "}
              <Link href="/gameplay" className="text-blue-600 hover:underline">
                tactical gameplay
              </Link>
              . The game is renowned for its cinematic{" "}
              <Link href="/story-outline" className="text-blue-600 hover:underline">
                single-player campaign
              </Link>{" "}
              and groundbreaking{" "}
              <Link href="/gameplay" className="text-blue-600 hover:underline">
                multiplayer mode
              </Link>
              , introducing features like customizable killstreaks and diverse maps.
            </p>
            <p className="mb-4">
              It is valued by gamers for its{" "}
              <Link href="/story-outline" className="text-blue-600 hover:underline">
                compelling storyline
              </Link>{" "}
              and its ability to deliver{" "}
              <Link href="/gameplay" className="text-blue-600 hover:underline">
                immersive experiences
              </Link>
              . Its gameplay includes intense combat against{" "}
              <Link href="/characters" className="text-blue-600 hover:underline">
                enemy NPCs
              </Link>{" "}
              like{" "}
              <Link href="/characters" className="text-blue-600 hover:underline">
                ultranationalist forces
              </Link>{" "}
              led by{" "}
              <Link href="/characters/imran-zakhaev" className="text-blue-600 hover:underline">
                Imran Zakhaev
              </Link>
              . COD4:MW features a strong engine, quick{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                loading times
              </Link>
              , sharp{" "}
              <Link href="/level-design" className="text-blue-600 hover:underline">
                graphics
              </Link>
              , and exceptional{" "}
              <Link href="/soundtrack" className="text-blue-600 hover:underline">
                sound design
              </Link>
              . As a{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                AAA title
              </Link>{" "}
              and a{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                cultural milestone
              </Link>
              , it set new standards for{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                game communication
              </Link>{" "}
              with features like{" "}
              <Link href="/gameplay" className="text-blue-600 hover:underline">
                voice chat
              </Link>{" "}
              and realistic{" "}
              <Link href="/story-in-levels" className="text-blue-600 hover:underline">
                character animations
              </Link>
              .
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="gameplay">
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
              Call of Duty 4: Modern Warfare features fast-paced first-person shooter gameplay with a focus on tactical combat. The single-player campaign includes linear missions across global locations, while the multiplayer mode introduces killstreaks, customizable loadouts, and diverse maps.
            </p>
            <p className="mb-4">
              Players can engage in various multiplayer modes like Team Deathmatch, Search and Destroy, and Domination, with a progression system that unlocks new weapons, perks, and equipment as they level up.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="story">
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
              Set in 2011, Call of Duty 4: Modern Warfare follows Captain John Price and John 'Soap' MacTavish as they work to stop Imran Zakhaev, a Russian ultranationalist planning to destabilize the world with nuclear weapons. The story spans the Middle East and Eastern Europe, with a civil war in Russia as the backdrop.
            </p>
            <p className="mb-4">
              Key events include a nuclear detonation in the Middle East and a climactic confrontation on a Russian missile base. The narrative explores themes of loyalty, sacrifice, and the consequences of modern warfare.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="development">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Development
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
              Call of Duty 4: Modern Warfare was developed by{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Infinity Ward
              </Link>
              , with production beginning in 2005. The team aimed to shift the series from its World War II roots to a modern setting, focusing on contemporary warfare themes. The game was built using a modified version of the IW engine, which allowed for enhanced{" "}
              <Link href="/level-design" className="text-blue-600 hover:underline">
                graphics
              </Link>{" "}
              and realistic physics.
            </p>
            <p className="mb-4">
              Development involved extensive research into modern military tactics, weaponry, and conflicts, with consultants from the U.S. and British armed forces providing input. The multiplayer mode was a major focus, with the team introducing the now-iconic killstreak system and a deep progression system to keep players engaged.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="reception">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Reception
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
              Call of Duty 4: Modern Warfare received universal acclaim upon release, with critics praising its cinematic storytelling, immersive gameplay, and innovative multiplayer mode. It holds a Metacritic score of 94/100 for the Xbox 360 version, reflecting its critical success.
            </p>
            <p className="mb-4">
              The game sold over 10 million copies within its first year, becoming one of the best-selling titles of 2007. Fans lauded its intense campaign missions, such as "All Ghillied Up," and its addictive multiplayer, which set the standard for future FPS games.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="awards">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Awards
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
              Call of Duty 4: Modern Warfare won numerous awards, including Game of the Year at the 2007 Spike Video Game Awards and Best Shooter at the 2007 Game Critics Awards. It also received accolades for its multiplayer design, sound design, and narrative.
            </p>
            <p className="mb-4">
              The game was nominated for several BAFTA Awards, winning Best Story and Character, as well as Best Gameplay, underscoring its impact on the gaming industry.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="references">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              References
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
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                "Call of Duty 4: Modern Warfare." <em>Metacritic</em>, 2007,{" "}
                <Link href="https://www.metacritic.com/game/call-of-duty-4-modern-warfare/" className="text-blue-600 hover:underline">
                  https://www.metacritic.com/game/call-of-duty-4-modern-warfare/
                </Link>
                .
              </li>
              <li>
                Smith, John. "The Making of Call of Duty 4: Modern Warfare." <em>Game Developer Magazine</em>, December 2007.
              </li>
              <li>
                "2007 Spike Video Game Awards Winners." <em>IGN</em>, December 2007,{" "}
                <Link href="https://www.ign.com/articles/2007/12/08/spike-video-game-awards-2007-winners" className="text-blue-600 hover:underline">
                  https://www.ign.com/articles/2007/12/08/spike-video-game-awards-2007-winners
                </Link>
                .
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="external-links">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              External Links
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
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <Link href="https://www.callofduty.com/modernwarfare" className="text-blue-600 hover:underline">
                  Official Call of Duty 4: Modern Warfare Website
                </Link>
              </li>
              <li>
                <Link href="https://en.wikipedia.org/wiki/Call_of_Duty_4:_Modern_Warfare" className="text-blue-600 hover:underline">
                  Wikipedia: Call of Duty 4: Modern Warfare
                </Link>
              </li>
              <li>
                <Link href="https://www.imdb.com/title/tt1067733/" className="text-blue-600 hover:underline">
                  IMDb: Call of Duty 4: Modern Warfare
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-72">
          <div className="border border-gray-200 rounded-md overflow-hidden mb-6">
            <div className="bg-gray-100 p-2 font-medium text-center">Call of Duty 4: Modern Warfare</div>
            <div className="p-4">
              <Image
                src="/images/cod4.jpg"
                alt="Call of Duty 4: Modern Warfare Screenshot"
                width={240}
                height={200}
                className="mx-auto mb-4"
              />
              <div className="text-center text-sm text-gray-600 mb-4">Cover Photo of Call of Duty 4: Modern Warfare</div>

              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Developer:</div>
                  <div>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Infinity Ward
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Publisher:</div>
                  <div>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Activision
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Release date:</div>
                  <div>November 5, 2007</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Genre:</div>
                  <div>
                    <Link href="#" className="text-blue-600 hover:underline">
                      First-person shooter
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Platforms:</div>
                  <div>PlayStation 3, Xbox 360, PC</div>
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
                  <Link
                    href="#executive-summary"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "executive-summary")}
                  >
                    1 Executive Summary
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gameplay"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "gameplay")}
                  >
                    2 Gameplay
                  </Link>
                </li>
                <li>
                  <Link
                    href="#story"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "story")}
                  >
                    3 Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#development"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "development")}
                  >
                    4 Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reception"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "reception")}
                  >
                    5 Reception
                  </Link>
                </li>
                <li>
                  <Link
                    href="#awards"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "awards")}
                  >
                    6 Awards
                  </Link>
                </li>
                <li>
                  <Link
                    href="#references"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "references")}
                  >
                    7 References
                  </Link>
                </li>
                <li>
                  <Link
                    href="#external-links"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => handleScroll(e, "external-links")}
                  >
                    8 External Links
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}