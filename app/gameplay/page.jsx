import { Eye, Edit, Clock, FileText, Bookmark, Wand2, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gameplay - GamePedia",
  description: "Explore the gameplay of Call of Duty 4: Modern Warfare in this Wikipedia-style Game Design Document.",
};

export default function GameplayPage() {
  return (
    <article className="max-w-4xl">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-serif mr-2">Gameplay</h1>
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

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div id="overview">
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
              <strong>Call of Duty 4: Modern Warfare</strong> offers fast-paced{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                first-person shooter
              </Link>{" "}
              gameplay with a focus on tactical combat. Developed by{" "}
              <Link href="https://www.infinityward.com/" className="text-blue-600 hover:underline">
                Infinity Ward
              </Link>
              , the game features both a cinematic{" "}
              <Link href="/gameplay#single-player" className="text-blue-600 hover:underline">
                single-player campaign
              </Link>{" "}
              and a groundbreaking{" "}
              <Link href="/gameplay" className="text-blue-600 hover:underline">
                multiplayer mode
              </Link>
              .
            </p>
            <p className="mb-4">
              Players engage in intense combat against{" "}
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
              . The game’s mechanics emphasize realistic{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                weaponry
              </Link>
              , quick decision-making, sharp{" "}
              <Link href="/level-design" className="text-blue-600 hover:underline">
                graphics
              </Link>
              , and immersive{" "}
              <Link href="/soundtrack" className="text-blue-600 hover:underline">
                sound design
              </Link>
              .
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="single-player">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Single-Player Campaign
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
              The single-player campaign features linear missions across global locations, including the Middle East and Eastern Europe. Players control multiple characters, such as{" "}
              <Link href="/characters/soap-mactavish" className="text-blue-600 hover:underline">
                John "Soap" MacTavish
              </Link>
              , U.S. Marine Paul Jackson, and{" "}
              <Link href="/characters/captain-price" className="text-blue-600 hover:underline">
                Captain John Price
              </Link>
              , as they undertake operations to stop a global threat led by{" "}
              <Link href="/characters/imran-zakhaev" className="text-blue-600 hover:underline">
                Imran Zakhaev
              </Link>
              .
            </p>
            <p className="mb-4">
              Missions range from stealth operations like "All Ghillied Up" to large-scale assaults like "Shock and Awe," with objectives that include rescuing hostages, securing locations, and eliminating high-value targets.
            </p>
            <h3 className="text-lg font-serif mb-2">Campaign Missions</h3>
            <p className="mb-4">The campaign is divided into a prologue, three acts, and an epilogue, featuring the following missions:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Prologue:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li><strong>F.N.G.</strong> - Training mission introducing Soap MacTavish to SAS protocols.</li>
                  <li><strong>Crew Expendable</strong> - Infiltration of a ship to secure a nuclear device.</li>
                  <li><strong>The Coup</strong> - Cinematic showing a Middle Eastern coup (non-playable).</li>
                </ul>
              </li>
              <li><strong>Act I:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li><strong>Blackout</strong> - Rescue of a Russian informant in the Caucasus Mountains.</li>
                  <li><strong>Charlie Don't Surf</strong> - U.S. Marines search for Al-Asad in the Middle East.</li>
                  <li><strong>The Bog</strong> - Defense of a stranded tank in a war-torn city.</li>
                  <li><strong>Hunted</strong> - Escape from enemy forces after a helicopter crash.</li>
                  <li><strong>Death From Above</strong> - AC-130 gunship support for ground troops.</li>
                  <li><strong>War Pig</strong> - Escort a tank through enemy territory.</li>
                  <li><strong>Shock and Awe</strong> - Large-scale assault ending in a nuclear explosion.</li>
                  <li><strong>Aftermath</strong> - Cinematic aftermath of the nuclear blast (non-playable).</li>
                </ul>
              </li>
              <li><strong>Act II:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li><strong>Safehouse</strong> - Search for Al-Asad in a Russian village.</li>
                  <li><strong>All Ghillied Up</strong> - Flashback stealth mission to assassinate Zakhaev in 1996.</li>
                  <li><strong>One Shot, One Kill</strong> - Escape after the assassination attempt.</li>
                  <li><strong>Heat</strong> - Defend a village from enemy forces.</li>
                  <li><strong>The Sins of the Father</strong> - Pursue Victor Zakhaev to gain leverage.</li>
                </ul>
              </li>
              <li><strong>Act III:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li><strong>Ultimatum</strong> - Confront Zakhaev’s forces to prevent a missile launch.</li>
                  <li><strong>All In</strong> - Infiltrate a missile facility.</li>
                  <li><strong>No Fighting In The War Room</strong> - Stop the missile launch from a control room.</li>
                  <li><strong>Game Over</strong> - Final confrontation with Zakhaev.</li>
                </ul>
              </li>
              <li><strong>Epilogue:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li><strong>Mile High Club</strong> - Bonus mission involving a hostage rescue on a plane.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="multiplayer">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Multiplayer Mode
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
              The multiplayer mode introduces killstreaks, customizable loadouts, and diverse maps. Players can engage in modes such as Team Deathmatch, Search and Destroy, Domination, Headquarters, Free-for-All, and Sabotage, each requiring unique strategies.
            </p>
            <p className="mb-4">
              Popular multiplayer maps include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Crash</strong> - Urban environment with tight streets.</li>
              <li><strong>Crossfire</strong> - Long sightlines for sniping.</li>
              <li><strong>Overgrown</strong> - Rural area with open fields.</li>
              <li><strong>Shipment</strong> - Small, chaotic map for close-quarters combat.</li>
              <li><strong>Vacant</strong> - Abandoned office building.</li>
              <li><strong>Bog</strong> - Nighttime map with a central tank for intense combat.</li>
              <li><strong>Pipeline</strong> - Industrial setting with underground tunnels.</li>
              <li><strong>Strike</strong> - Middle Eastern town with varied terrain.</li>
            </ul>
            <p className="mt-4">
              The multiplayer experience is enhanced by features like{" "}
              <Link href="/game-mechanics" className="text-blue-600 hover:underline">
                voice chat
              </Link>{" "}
              and a ranking system that allows players to progress from Level 1 to 55, unlocking new weapons, perks, and equipment as they level up.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="weapons">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Weapons
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
              Call of Duty 4: Modern Warfare features a diverse arsenal of modern weaponry, categorized into assault rifles, submachine guns, shotguns, sniper rifles, light machine guns, pistols, and explosives. These weapons are used by both players and NPCs across the campaign and multiplayer modes.
            </p>
            <h3 className="text-lg font-serif mb-2">Weapon Categories and Examples</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Assault Rifles:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>M16A4 - Burst-fire, effective at medium to long range.</li>
                  <li>AK-47 - Fully automatic, high power for medium range.</li>
                  <li>M4 Carbine - Low recoil, versatile for medium range.</li>
                  <li>G3 - Single-fire, high capacity for medium to long range.</li>
                  <li>G36C - High rate of fire, effective at medium range.</li>
                  <li>M14 - Single-fire, high power for medium range.</li>
                  <li>MP44 - Fully automatic, good accuracy for medium range.</li>
                </ul>
              </li>
              <li><strong>Submachine Guns:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>MP5 - High accuracy, effective at close to medium range.</li>
                  <li>Mini-Uzi - High fire rate, ideal for close quarters.</li>
                  <li>P90 - Large magazine, effective at close range.</li>
                  <li>Skorpion - Fast fire rate, suitable for close combat.</li>
                  <li>AK-74u - Compact, balances power and mobility.</li>
                </ul>
              </li>
              <li><strong>Shotguns:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>W1200 - Pump-action, deadly at close range.</li>
                  <li>M1014 - Semi-automatic, effective in close quarters.</li>
                </ul>
              </li>
              <li><strong>Sniper Rifles:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>M40A3 - Bolt-action, high accuracy for long range.</li>
                  <li>Barrett .50cal - Semi-automatic, powerful for long range.</li>
                  <li>R700 - Bolt-action, balanced for long-range sniping.</li>
                  <li>Dragunov - Semi-automatic, effective at long range.</li>
                  <li>M21 - Semi-automatic, versatile for long range.</li>
                </ul>
              </li>
              <li><strong>Light Machine Guns:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>M249 SAW - High capacity, effective at medium range.</li>
                  <li>RPD - High fire rate, suitable for sustained fire.</li>
                  <li>M60E4 - Powerful, effective at medium to long range.</li>
                </ul>
              </li>
              <li><strong>Pistols:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>M9 - Semi-automatic, reliable sidearm.</li>
                  <li>USP .45 - Balanced power and accuracy.</li>
                  <li>M1911 .45 - High damage, classic pistol.</li>
                  <li>Desert Eagle - Powerful semi-automatic pistol.</li>
                </ul>
              </li>
              <li><strong>Explosives:</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>Frag Grenade - Standard explosive grenade.</li>
                  <li>Flashbang - Temporarily blinds enemies.</li>
                  <li>Smoke Grenade - Creates a smoke screen for cover.</li>
                  <li>C4 - Remote-detonated explosive.</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              Weapons can be customized with attachments like red dot sights, silencers, and grenade launchers in multiplayer, enhancing tactical options.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="factions">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Factions
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
              The game features distinct factions that shape the campaign and multiplayer dynamics:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>British SAS (Special Air Service)</strong> - Elite special forces unit of the British Army, led by{" "}
                <Link href="/characters/captain-price" className="text-blue-600 hover:underline">
                  Captain John Price
                </Link>
                . They specialize in covert operations and counter-terrorism, often working alongside U.S. forces to thwart global threats.
              </li>
              <li>
                <strong>U.S. Marine Corps Force Reconnaissance (USMC)</strong> - Special operations unit of the U.S. Marine Corps, involved in large-scale assaults and reconnaissance missions. They are primarily deployed in the Middle East to combat OpFor forces.
              </li>
              <li>
                <strong>Russian Ultranationalists</strong> - A radical group led by{" "}
                <Link href="/characters/imran-zakhaev" className="text-blue-600 hover:underline">
                  Imran Zakhaev
                </Link>
                , aiming to restore Russia’s Soviet-era power through extreme measures. They are the primary antagonists in the campaign and often clash with SAS and USMC forces.
              </li>
              <li>
                <strong>OpFor (Opposing Force)</strong> - A Middle Eastern insurgent group allied with the Ultranationalists, led by{" "}
                <Link href="/characters/khaled-al-asad" className="text-blue-600 hover:underline">
                  Khaled Al-Asad
                </Link>
                . They control a fictional Middle Eastern country and are responsible for escalating the conflict with a coup and nuclear detonation.
              </li>
              <li>
                <strong>Russian Loyalists</strong> - Forces loyal to the Russian government, fighting against the Ultranationalists. They ally with the SAS in missions like "Blackout" to rescue informants and combat Zakhaev’s forces.
              </li>
            </ul>
            <p className="mt-4">
              In multiplayer, players are assigned to either the coalition (SAS and USMC) or the opposing forces (Ultranationalists and OpFor), depending on the map and game mode.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="killstreaks-perks">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Killstreaks and Perks
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
              The multiplayer mode introduces killstreaks and perks, which add depth to gameplay by rewarding skill and allowing customization of playstyles.
            </p>
            <h3 className="text-lg font-serif mb-2">Killstreaks</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>3 Kills - Radar (UAV)</strong> - Reveals enemy positions on the minimap for 30 seconds.</li>
              <li><strong>5 Kills - Airstrike</strong> - Calls in a precision airstrike on a designated area.</li>
              <li><strong>7 Kills - Helicopter</strong> - Summons a helicopter to provide air support for a limited time.</li>
            </ul>
            <h3 className="text-lg font-serif mb-2 mt-4">Perks</h3>
            <p className="mb-4">
              Perks are divided into three tiers, allowing players to customize their loadouts:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tier 1 (Perk 1):</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>C4 x2 - Additional C4 for explosive traps.</li>
                  <li>Special Grenades x3 - Extra flashbangs or smoke grenades.</li>
                  <li>Bomb Squad - Detect enemy explosives.</li>
                  <li>Claymore x2 - Additional claymore mines.</li>
                  <li>RPG-7 x2 - Additional RPG rockets.</li>
                </ul>
              </li>
              <li><strong>Tier 2 (Perk 2):</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>Stopping Power - Increases bullet damage.</li>
                  <li>Juggernaut - Increases health.</li>
                  <li>Sleight of Hand - Faster reload speed.</li>
                  <li>Double Tap - Increases fire rate.</li>
                  <li>Overkill - Carry two primary weapons.</li>
                </ul>
              </li>
              <li><strong>Tier 3 (Perk 3):</strong>
                <ul className="list-circle pl-5 space-y-1">
                  <li>Extreme Conditioning - Sprint for longer distances.</li>
                  <li>Steady Aim - Increases hip-fire accuracy.</li>
                  <li>Last Stand - Survive lethal damage with a pistol.</li>
                  <li>Martyrdom - Drop a live grenade upon death.</li>
                  <li>Dead Silence - Reduces footstep noise.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="game-mechanics">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Game Mechanics
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
              Call of Duty 4: Modern Warfare introduces several game mechanics that enhance immersion and tactical gameplay:
            </p>
            <h3 className="text-lg font-serif mb-2">Controls</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Move</strong> - WASD (PC) or left analog stick (console).</li>
              <li><strong>Aim/Look</strong> - Mouse (PC) or right analog stick (console).</li>
              <li><strong>Fire</strong> - Left mouse button (PC) or R2/RT (console).</li>
              <li><strong>ADS (Aim Down Sights)</strong> - Right mouse button (PC) or L2/LT (console).</li>
              <li><strong>Sprint</strong> - Shift (PC) or hold left analog stick (console).</li>
              <li><strong>Melee</strong> - V (PC) or R3 (console).</li>
              <li><strong>Throw Grenade</strong> - G (PC) or R1/RB (console).</li>
            </ul>
            <h3 className="text-lg font-serif mb-2 mt-4">Difficulty Levels</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Recruit</strong> - Easiest difficulty, ideal for beginners with minimal enemy resistance.</li>
              <li><strong>Regular</strong> - Balanced difficulty with moderate enemy aggression.</li>
              <li><strong>Hardened</strong> - Increased enemy accuracy and damage, requiring tactical play.</li>
              <li><strong>Veteran</strong> - Hardest difficulty with aggressive enemies and limited checkpoints.</li>
            </ul>
            <h3 className="text-lg font-serif mb-2 mt-4">Additional Mechanics</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Health Regeneration</strong> - Health regenerates over time if the player avoids damage for a few seconds.</li>
              <li><strong>Weapon Switching</strong> - Players can carry two weapons and switch between them using the number keys (1, 2) on PC or Y/Triangle on console.</li>
              <li><strong>Objective Markers</strong> - On-screen indicators guide players to mission objectives.</li>
              <li><strong>Breaching</strong> - Certain missions allow players to breach doors with explosives, creating dynamic entry points.</li>
            </ul>
          </div>
        </div>

        <div className="md:w-72">
          <div className="border border-gray-200 rounded-md overflow-hidden mb-6">
            <div className="bg-gray-200 dark:bg-gray-700 p-2 font-medium text-center">Call of Duty 4: Modern Warfare</div>
            <div className="p-4">
              <Image
                src="/images/gameplay.jpg"
                alt="Call of Duty 4: Modern Warfare Gameplay Screenshot"
                width={240}
                height={200}
                className="mx-auto mb-4"
              />
              <div className="text-center text-sm text-gray-600 mb-4">
                Gameplay Screenshot from Call of Duty 4: Modern Warfare
              </div>

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
        </div>
      </div>
    </article>
  );
}