import Link from "next/link";

export const metadata = {
  title: "Story Outline - GamePedia",
  description: "Explore the story outline of Call of Duty 4: Modern Warfare in this Wikipedia-style Game Design Document.",
};

export default function StoryOutlinePage() {
  return (
    <article className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-serif mb-4 text-gray-900 dark:text-gray-100">
        Story Outline
      </h1>
      <section id="overview" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Overview
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          <strong>Call of Duty 4: Modern Warfare</strong> is set in 2011, amidst escalating global tensions. In Russia, a civil war rages between the government and ultranationalists led by <Link href="/characters/imran-zakhaev" className="text-blue-600 dark:text-blue-400 hover:underline">Imran Zakhaev</Link>, who seeks to restore Soviet-era dominance. Concurrently, in an unnamed Middle Eastern country, <Link href="/characters/khaled-al-asad" className="text-blue-600 dark:text-blue-400 hover:underline">Khaled al-Asad</Link> seizes power through a violent coup, backed by Zakhaev’s forces. Fearing a nuclear alliance between Zakhaev and al-Asad, the United States and United Kingdom launch joint operations to neutralize these threats, unfolding a cinematic narrative seen through the eyes of a U.S. Marine and a British SAS commando.
        </p>
      </section>

      <section id="key-events" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Key Events
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li>
            <strong>The Coup</strong>: Al-Asad executes the president of the Middle Eastern country on live television, seizing control and aligning with Zakhaev’s ultranationalists, triggering U.S. intervention.
          </li>
          <li>
            <strong>Nuclear Detonation</strong>: During the mission “Shock and Awe,” al-Asad’s forces detonate a nuclear device, killing 30,000 U.S. Marines, including Sergeant Paul Jackson, escalating the conflict.
          </li>
          <li>
            <strong>Al-Asad’s Capture</strong>: In “Safehouse,” the SAS, led by <Link href="/characters/captain-price" className="text-blue-600 dark:text-blue-400 hover:underline">Captain John Price</Link>, captures and interrogates al-Asad, revealing Zakhaev’s involvement before Price executes him.
          </li>
          <li>
            <strong>Flashback Mission</strong>: In “One Shot, One Kill,” a 1996 flashback shows a young Lieutenant Price attempting to assassinate Zakhaev in Pripyat, Ukraine, under Captain MacMillan’s command. The shot severs Zakhaev’s arm but fails to kill him, fueling his vendetta.
          </li>
          <li>
            <strong>Climactic Showdown</strong>: In “Game Over,” <Link href="/characters/soap-mactavish" className="text-blue-600 dark:text-blue-400 hover:underline">Sergeant John “Soap” MacTavish</Link> and Price lead a desperate assault on Zakhaev’s Russian missile base. After a helicopter crash, Soap kills Zakhaev with Price’s pistol, preventing a nuclear strike on the U.S.
          </li>
        </ul>
      </section>

      <section id="characters" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Key Characters
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li>
            <strong><Link href="/characters/imran-zakhaev" className="text-blue-600 dark:text-blue-400 hover:underline">Imran Zakhaev</Link></strong>: The ultranationalist leader orchestrating Russia’s civil war and global chaos, driven by a vision of Soviet restoration.
          </li>
          <li>
            <strong><Link href="/characters/khaled-al-asad" className="text-blue-600 dark:text-blue-400 hover:underline">Khaled al-Asad</Link></strong>: Zakhaev’s Middle Eastern ally, whose coup and nuclear attack provoke international retaliation.
          </li>
          <li>
            <strong><Link href="/characters/captain-price" className="text-blue-600 dark:text-blue-400 hover:underline">Captain John Price</Link></strong>: SAS captain leading the fight against Zakhaev, with a past tied to the antagonist from a failed 1996 mission.
          </li>
          <li>
            <strong><Link href="/characters/soap-mactavish" className="text-blue-600 dark:text-blue-400 hover:underline">John “Soap” MacTavish</Link></strong>: A rookie SAS operative whose growth culminates in stopping Zakhaev’s nuclear plot.
          </li>
          <li>
          <strong><Link href="/characters/sergeant-jackson" className="text-blue-600 dark:text-blue-400 hover:underline">Sergeat Paul Jackson</Link></strong>: A U.S. Marine killed in al-Asad’s nuclear detonation, representing the human cost of the conflict.
          </li>
          <li>
            <strong><Link href="/characters/victor-zakhaev" className="text-blue-600 dark:text-blue-400 hover:underline">Victor Zakhaev</Link></strong>: Imran Zakhaev’s son, whose death in “The Sins of the Father” intensifies his father’s resolve.
          </li>
        </ul>
      </section>

      <section id="themes" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Themes
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The story explores themes of modern warfare’s brutality, the cost of ideological extremism, and the personal toll on soldiers. Zakhaev’s ultranationalism and al-Asad’s ruthless ambition highlight the dangers of unchecked power, while Price and Soap’s camaraderie underscores loyalty and sacrifice. The nuclear devastation and high-stakes missions reflect the fragility of global stability in a post-Cold War era.
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