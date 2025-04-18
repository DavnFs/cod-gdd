import { Eye, Edit, Clock, FileText, Bookmark, Wand2, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Level Design - GameplayPedia",
  description: "Explore the level design of Call of Duty 4: Modern Warfare in this Wikipedia-style Game Design Document.",
};

export default function SoundtrackPage() {
  return (
    <article className="max-w-4xl">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-serif mr-2">Soundtrack</h1>
        <button className="text-gray-400 hover:text-gray-600">
          <Edit size={16} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div id="overview">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Overview
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit size={14} />
              </button>
            </h2>
            <p className="mb-4">
              The soundtrack for <strong>Call of Duty 4: Modern Warfare</strong>, developed by{" "}
              <Link href="/developers/infinity-ward" className="text-blue-600 hover:underline">
                Infinity Ward
              </Link>
              , is a critical component of its immersive experience. Composed primarily by Stephen Barton, with contributions from Harry Gregson-Williams, the score blends orchestral and electronic elements to enhance the game's intense military atmosphere.
            </p>
            <p className="mb-4">
              The music complements the game's{" "}
              <Link href="/story-outline" className="text-blue-600 hover:underline">
                narrative
              </Link>{" "}
              and{" "}
              <Link href="/gameplay" className="text-blue-600 hover:underline">
                gameplay
              </Link>
              , creating tension during combat and emotional depth in key story moments. The soundtrack is available digitally and has been praised for its cinematic quality.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="composers">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Composers
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit size={14} />
              </button>
            </h2>
            <p className="mb-4">
              Stephen Barton served as the primary composer, crafting a score that balances high-energy action with somber, reflective tones. Harry Gregson-Williams, known for his work on films like *The Chronicles of Narnia*, contributed additional tracks, including the iconic main theme.
            </p>
            <p className="mb-4">
              Their collaboration resulted in a soundtrack that amplifies the game's emotional stakes, from the chaos of battle to the quiet moments of strategy.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="track-list">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Track List
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit size={14} />
              </button>
            </h2>
            <p className="mb-4">
              The soundtrack includes a variety of tracks that correspond to specific missions and moments in the game. Below is a selection of notable tracks:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Main Theme</strong> - Composed by Harry Gregson-Williams, sets the tone for the game's military narrative.</li>
              <li><strong>Armada Seanprice Church Cln</strong> - Played during the mission "Crew Expendable," enhancing the tension of the ship infiltration.</li>
              <li><strong>Airlift Deploy v1</strong> - Accompanies the AC-130 mission "Death From Above," with a pulsating rhythm.</li>
              <li><strong>The Coup Intro v38</strong> - Sets a dramatic tone for the cinematic mission "The Coup."</li>
              <li><strong>All Ghillied Up</strong> - A subtle, suspenseful track for the stealth mission in Pripyat.</li>
              <li><strong>Game Over</strong> - An intense score for the climactic final mission.</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6" id="sound-effects">
            <h2 className="text-xl font-serif mb-2 flex items-center">
              Sound Effects
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit size={14} />
              </button>
            </h2>
            <p className="mb-4">
              Beyond the musical score, the game's sound effects play a crucial role in immersion. Realistic weapon sounds, explosions, and ambient noises like radio chatter and footsteps enhance the battlefield experience.
            </p>
            <p className="mb-4">
              The sound design team worked closely with military consultants to ensure authenticity, particularly for weapons like the M4 Carbine and AK-47, which feature distinct firing sounds.
            </p>
          </div>
        </div>

        <div className="md:w-72">
          <div className="border border-gray-200 rounded-md overflow-hidden mb-6">
            <div className="bg-gray-200 dark:bg-gray-700 p-2 font-medium text-center">Call of Duty 4: Modern Warfare</div>
            <div className="p-4">
              <Image
                src="/images/soundtrack.jpg"
                alt="Call of Duty 4: Modern Warfare Soundtrack Cover"
                width={240}
                height={200}
                className="mx-auto mb-4"
              />
              <div className="text-center text-sm text-gray-600 mb-4">
                Soundtrack Cover for Call of Duty 4: Modern Warfare
              </div>

              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Developer:</div>
                  <div>
                    <Link href="https://www.infinityward.com/" className="text-blue-600 hover:underline">
                      Infinity Ward
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Publisher:</div>
                  <div>
                    <Link href="https://www.activision.com/" className="text-blue-600 hover:underline">
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
                    <Link href="/genres/first-person-shooter" className="text-blue-600 hover:underline">
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