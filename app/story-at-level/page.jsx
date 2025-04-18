import Link from "next/link";

export const metadata = {
  title: "Story by Act - GameplayPedia",
  description: "Explore the story of Call of Duty 4: Modern Warfare by act in this Wikipedia-style Game Design Document.",
};

export default function StoryPage() {
  return (
    <article className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-serif mb-4 text-gray-900 dark:text-gray-100">
        Story by Act
      </h1>
      <section id="introduction" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Introduction
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          <strong>Call of Duty 4: Modern Warfare</strong>’s campaign is divided into three acts, each escalating the stakes of a global conflict set in 2011. The story follows U.S. Marines and British SAS operatives as they combat a Middle Eastern coup and a Russian ultranationalist threat. This page breaks down the narrative by act, detailing key events, characters, and missions.
        </p>
      </section>

      <section id="act-1" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Act 1: Middle Eastern Conflict
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          Act 1 introduces the Middle Eastern conflict sparked by <Link href="/characters/khaled-al-asad" className="text-blue-600 dark:text-blue-400 hover:underline">Khaled al-Asad</Link>’s coup. Players control Sergeant Paul Jackson of the U.S. Marines and <Link href="/characters/soap-mactavish" className="text-blue-600 dark:text-blue-400 hover:underline">John “Soap” MacTavish</Link> of the SAS, experiencing the early stages of the war.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li>
            <strong>Key Missions</strong>: 
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>“F.N.G.”: Soap undergoes SAS training, establishing his role.</li>
              <li>“Crew Expendable”: Soap and <Link href="/characters/captain-price" className="text-blue-600 dark:text-blue-400 hover:underline">Captain Price</Link> raid a cargo ship in the Bering Strait, uncovering a nuclear device.</li>
              <li>“The Coup”: Players witness al-Asad’s execution of President Yasir Al-Fulani, setting the stage for U.S. intervention.</li>
              <li>“War Pig”: Jackson fights through a Middle Eastern city to rescue a stranded tank crew.</li>
              <li>“Shock and Awe”: Jackson’s squad searches for al-Asad, culminating in a nuclear detonation that kills 30,000 U.S. Marines, including Jackson.</li>
            </ul>
          </li>
          <li>
            <strong>Focus</strong>: Act 1 establishes the dual perspectives of the U.S. Marines and SAS, highlighting the brutality of al-Asad’s regime and the global stakes of the conflict.
          </li>
        </ul>
      </section>

      <section id="act-2" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Act 2: Pursuit and Revelation
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          Act 2 shifts focus to the SAS as they pursue al-Asad and uncover <Link href="/characters/imran-zakhaev" className="text-blue-600 dark:text-blue-400 hover:underline">Imran Zakhaev</Link>’s involvement. This act deepens the narrative with a flashback mission and escalates the conflict.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li>
            <strong>Key Missions</strong>: 
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>“Safehouse”: Price and Soap capture and interrogate al-Asad in Azerbaijan, where Price executes him after learning of Zakhaev’s role.</li>
              <li>“All Ghillied Up” and “One Shot, One Kill”: A flashback to 1996 shows Price attempting to assassinate Zakhaev in Pripyat, Ukraine, under Captain MacMillan’s command. The failed shot costs Zakhaev his arm but not his life.</li>
              <li>“Heat”: Soap defends a village from Ultranationalist forces, showcasing intense defensive gameplay.</li>
              <li>“The Sins of the Father”: The SAS pursues <Link href="/characters/victor-zakhaev" className="text-blue-600 dark:text-blue-400 hover:underline">Victor Zakhaev</Link> in Russia, hoping to pressure his father. Victor commits suicide to avoid capture.</li>
            </ul>
          </li>
          <li>
            <strong>Focus</strong>: Act 2 reveals Zakhaev as the true antagonist, connecting past events to the present conflict and escalating the stakes with Victor’s death.
          </li>
        </ul>
      </section>

      <section id="act-3" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Act 3: Climactic Showdown
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          Act 3 delivers the campaign’s climax as the SAS confronts Zakhaev to prevent a nuclear strike on the U.S., culminating in a desperate battle in Russia.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li>
            <strong>Key Missions</strong>: 
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>“Ultimatum”: Zakhaev demands the West’s withdrawal, revealing his plan to launch nuclear missiles at the U.S.</li>
              <li>“All In”: The SAS assaults Zakhaev’s missile base to stop the launch, facing heavy resistance.</li>
              <li>“No Fighting in the War Room”: Soap and Price race against time to abort the missile launch, navigating a tense underground facility.</li>
              <li>“Game Over”: After a helicopter crash, Soap kills Zakhaev with Price’s pistol, preventing the nuclear strike and ending the conflict.</li>
            </ul>
          </li>
          <li>
            <strong>Focus</strong>: Act 3 focuses on the high-stakes battle to stop Zakhaev, with intense action and a satisfying resolution as Soap emerges as a hero.
          </li>
        </ul>
      </section>

      <section id="conclusion" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Conclusion
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The story of *Call of Duty 4: Modern Warfare*, structured across three acts, delivers a cinematic narrative of global conflict, personal sacrifice, and heroism. Each act builds on the last, culminating in a thrilling conclusion that cements the game’s legacy.
        </p>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}