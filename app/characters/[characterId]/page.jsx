import { Eye, Edit, Clock, FileText, Bookmark, Wand2, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define characters data
const characters = {
  "imran-zakhaev": {
    name: "Imran Zakhaev",
    affiliation: "Ultranationalists",
    role: "Primary Antagonist",
    status: "Killed in Action (2011)",
    image: "/images/Imran.png",
    description: (
      <>
        <p className="mb-4">
          <strong>Imran Zakhaev</strong>, the mastermind behind the Ultranationalist movement in{" "}
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Call of Duty 4: Modern Warfare
          </Link>
          , is a Russian warlord driven by a vision to restore Soviet-era dominance. His chilling presence looms over the game’s narrative, orchestrating a{" "}
          <Link href="/story-outline" className="text-blue-600 dark:text-blue-400 hover:underline">
            global conflict
          </Link>{" "}
          through proxies like Khaled Al-Asad and his son, Victor Zakhaev. Zakhaev’s ruthless ambition—culminating in a nuclear threat against the West—makes him one of gaming’s most formidable villains.
        </p>
        <p className="mb-4">
          Known for his cold pragmatism and unyielding resolve, Zakhaev commands loyalty through fear and ideology. His actions, including backing a Middle Eastern coup and planning a missile strike, drive the SAS and U.S. Marines into a desperate race against time. Zakhaev’s scarred past, marked by a near-fatal encounter with Captain Price, fuels his vendetta, setting the stage for a climactic showdown.
        </p>
      </>
    ),
    roleInStory: (
      <>
        <p className="mb-4">
          Zakhaev operates as the puppet master behind the game’s chaos, initially hidden as he manipulates Khaled Al-Asad’s coup in the Middle East. His plan to launch nuclear missiles at the United States, revealed in “Ultimatum,” aims to cripple the West and ignite a Russian resurgence. The SAS, led by Captain Price, uncovers his scheme after capturing Al-Asad, leading to a high-stakes assault on his missile base in “Game Over.”
        </p>
        <p className="mb-4">
          A flashback mission, “One Shot, One Kill,” reveals Zakhaev’s survival of a 1996 assassination attempt by Price, where a sniper shot cost him his arm. This event shapes his hatred, driving his 2011 campaign. Zakhaev’s death at the hands of John “Soap” MacTavish marks the campaign’s climax, halting his apocalyptic vision but leaving his ideology’s echoes.
        </p>
      </>
    ),
    characterDetails: {
      personality: "Ruthless, calculating, and fiercely nationalistic. Zakhaev’s charisma masks a brutal pragmatism, willing to sacrifice millions for his vision.",
      relationships: "Father to Victor Zakhaev, ally to Khaled Al-Asad, and nemesis to Captain Price and the SAS.",
      appearance: "Tall, imposing, with a distinctive missing left arm from Price’s 1996 shot, often clad in military attire.",
    },
    keyMissions: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“One Shot, One Kill”</strong>: A flashback where Price attempts to assassinate Zakhaev in Pripyat, Ukraine.
          </li>
          <li>
            <strong>“Ultimatum”</strong>: Zakhaev’s nuclear threat is revealed, escalating the conflict.
          </li>
          <li>
            <strong>“Game Over”</strong>: The final confrontation where Soap kills Zakhaev on a Russian missile base.
          </li>
        </ul>
      </>
    ),
    notableQuotes: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>“Our so-called leaders prostituted us to the West… destroyed our culture… our honor…” – Zakhaev’s manifesto, reflecting his ultranationalist zeal.</li>
        </ul>
      </>
    ),
    biography: (
      <>
        <p className="mb-4">
          Born in the 1940s in Soviet Russia, Imran Zakhaev grew up during the Cold War’s peak, steeped in military tradition. His father, a Red Army officer, instilled a fierce patriotism that defined Zakhaev’s early career in the Soviet Army. By the 1980s, he was a high-ranking officer, but the USSR’s collapse in 1991 shattered his worldview, sparking his ultranationalist crusade.
        </p>
        <p className="mb-4">
          Zakhaev founded the Ultranationalist Party, leveraging arms trafficking to fund his vision. In 1996, he survived Captain Price’s assassination attempt in Pripyat, losing his left arm and gaining a vendetta against the West. Over the next 15 years, he built a shadow empire, allying with figures like Khaled Al-Asad to destabilize rival powers.
        </p>
        <p className="mb-4">
          By 2011, Zakhaev’s plan to launch nuclear missiles from a Russian base aimed to reshape global power. His Middle Eastern coup, executed via Al-Asad, killed 30,000 U.S. Marines with a nuclear detonation. Cornered by the SAS, Zakhaev fought to the end, dying on the missile base, his legacy a warning of unchecked ambition.
        </p>
      </>
    ),
  },
  "captain-price": {
    name: "Captain John Price",
    affiliation: "British SAS",
    role: "Protagonist, Team Leader",
    status: "Alive (2011)",
    image: "/images/Price_3.jpg",
    description: (
      <>
        <p className="mb-4">
          <strong>Captain John Price</strong>, callsign Bravo Six, is the heart of{" "}
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Call of Duty 4: Modern Warfare
          </Link>
          ’s narrative. A grizzled SAS veteran, Price leads his squad with unwavering resolve against Imran Zakhaev’s ultranationalist threat. His tactical genius and loyalty define him as a fan-favorite hero.
        </p>
        <p className="mb-4">
          Price’s journey spans past and present, from a 1996 mission to kill Zakhaev to 2011’s desperate bid to stop a nuclear strike. Mentoring John “Soap” MacTavish, Price’s leadership shines in high-stakes operations, blending stealth, combat prowess, and moral clarity in the face of chaos.
        </p>
      </>
    ),
    roleInStory: (
      <>
        <p className="mb-4">
          Price commands the SAS team central to the campaign, starting with a cargo ship raid in “Crew Expendable.” His pursuit of Zakhaev intensifies after Al-Asad’s nuclear detonation, leading to missions like “Safehouse,” where he executes Al-Asad, and “All In,” where he storms Zakhaev’s base.
        </p>
        <p className="mb-4">
          In “All Ghillied Up,” a flashback shows a younger Lieutenant Price failing to kill Zakhaev, a mistake he rectifies in 2011. In “Game Over,” Price’s resilience after a helicopter crash allows him to pass his pistol to Soap, enabling Zakhaev’s death, cementing Price’s legacy.
        </p>
      </>
    ),
    characterDetails: {
      personality: "Stoic, principled, and fiercely loyal. Price combines dry humor with a relentless drive to protect his team and country.",
      relationships: "Mentor to Soap MacTavish, comrade to Gaz, and rival to Zakhaev and Al-Asad.",
      appearance: "Rugged, with a signature boonie hat and mustache, exuding authority and experience.",
    },
    keyMissions: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“All Ghillied Up”</strong>: Price’s 1996 stealth mission to snipe Zakhaev.
          </li>
          <li>
            <strong>“Safehouse”</strong>: Price interrogates and kills Al-Asad, uncovering Zakhaev’s role.
          </li>
          <li>
            <strong>“Game Over”</strong>: Price’s leadership stops Zakhaev’s missile launch.
          </li>
        </ul>
      </>
    ),
    notableQuotes: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>“Right… what the hell kind of name is Soap, eh?” – Price’s first meeting with Soap, showing his gruff camaraderie.</li>
          <li>“Stay frosty.” – Price’s iconic command, reflecting his cool-headedness.</li>
        </ul>
      </>
    ),
    biography: (
      <>
        <p className="mb-4">
          Born in London in the 1960s, John Price was raised on stories of wartime heroism. Joining the British Army in his teens, he excelled in training, earning a spot in the SAS by his 20s. His early missions honed his skills in covert operations, leading to his 1996 assignment under Captain MacMillan.
        </p>
        <p className="mb-4">
          In Pripyat, Price’s failed shot at Zakhaev left a mark, driving his career to redeem that moment. By 2011, as a Captain, he led Bravo Team against global threats, from Middle Eastern coups to Russian missile bases. His bond with Soap grew through shared trials, shaping both men.
        </p>
        <p className="mb-4">
          Price’s actions in 2011—stopping Zakhaev and saving millions—earned him legendary status in the SAS. His career continued, tackling new threats, but his resolve remained rooted in duty and loyalty, traits that defined his life’s work.
        </p>
      </>
    ),
  },
  "soap-mactavish": {
    name: "John 'Soap' MacTavish",
    affiliation: "British SAS",
    role: "Protagonist, Operative",
    status: "Alive (2011)",
    image: "/images/soap.png",
    description: (
      <>
        <p className="mb-4">
          <strong>John “Soap” MacTavish</strong> is the player’s window into{" "}
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Call of Duty 4: Modern Warfare
          </Link>
          . A fresh SAS recruit, Soap’s skill and courage under Captain Price’s guidance make him a rising star, culminating in his pivotal role against Imran Zakhaev.
        </p>
        <p className="mb-4">
          From his training in “F.N.G.” to the campaign’s climax, Soap’s growth from rookie to hero captivates players. His marksmanship and loyalty shine, especially in “Game Over,” where he delivers the fatal shot to Zakhaev, saving the world from nuclear disaster.
        </p>
      </>
    ),
    roleInStory: (
      <>
        <p className="mb-4">
          Soap is the primary playable character, starting with a trial-by-fire in “Crew Expendable.” He aids Price in tracking Al-Asad, surviving intense battles like “War Pig.” His role peaks in “Game Over,” where, injured but determined, he kills Zakhaev with Price’s pistol.
        </p>
        <p className="mb-4">
          Soap’s perspective drives the narrative, offering players an intimate view of the SAS’s fight. His trust in Price and camaraderie with Gaz build the team’s dynamic, making his final act a testament to his growth and resolve.
        </p>
      </>
    ),
    characterDetails: {
      personality: "Eager, brave, and quick-witted. Soap’s determination and adaptability mark him as a natural leader.",
      relationships: "Protégé of Price, teammate to Gaz, and adversary to Zakhaev’s forces.",
      appearance: "Young, athletic, with a shaved head and tactical gear, embodying a rookie’s readiness.",
    },
    keyMissions: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“F.N.G.”</strong>: Soap’s SAS training, proving his potential.
          </li>
          <li>
            <strong>“Shock and Awe”</strong>: Soap survives the Middle East nuclear blast.
          </li>
          <li>
            <strong>“Game Over”</strong>: Soap’s shot kills Zakhaev, saving millions.
          </li>
        </ul>
      </>
    ),
    notableQuotes: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>“Got a positive ID on Zakhaev!” – Soap’s callout in “Game Over,” marking his decisive moment.</li>
        </ul>
      </>
    ),
    biography: (
      <>
        <p className="mb-4">
          Born in Glasgow, Scotland, in the 1980s, John MacTavish grew up with a restless spirit, excelling in sports and marksmanship. Joining the British Army at 18, his talent caught the SAS’s eye, earning him a spot in 2011’s selection process.
        </p>
        <p className="mb-4">
          Under Price’s mentorship, Soap faced trials few could endure, from infiltrating a cargo ship to surviving a nuclear blast. His nickname, earned for his speed in clearing rooms, became a badge of honor. By the campaign’s end, Soap’s actions proved his worth, setting him on a path to leadership.
        </p>
        <p className="mb-4">
          Soap’s 2011 heroics—killing Zakhaev after a brutal chase—marked him as a key SAS asset. His bond with Price and his resilience ensured his legacy would grow beyond *Call of Duty 4*, shaping future battles against global threats.
        </p>
      </>
    ),
  },
  // Add this to your characters object
  "sergeant-jackson": {
    name: "Sergeant Paul Jackson",
    affiliation: "United States Marine Corps",
    role: "Protagonist, Marine Force Recon",
    status: "Killed in Action (2011)",
    image: "/images/Jackson.jpg",
    description: (
      <>
        <p className="mb-4">
          <strong>Sergeant Paul Jackson</strong> serves as one of the player's perspectives in{" "}
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Call of Duty 4: Modern Warfare
          </Link>
          , providing a ground-level view of the American military response to Al-Asad's coup. His storyline parallels the SAS operations, showing the global scale of the conflict.
        </p>
        <p className="mb-4">
          Jackson's journey through urban warfare culminates in "Shock and Awe," where Al-Asad's nuclear detonation creates one of gaming's most powerful moments. His death, experienced in first-person, underscores the human cost of war and the campaign's high stakes.
        </p>
      </>
    ),
    roleInStory: (
      <>
        <p className="mb-4">
          Jackson appears as a playable character in the U.S. Marine campaign, starting with "Charlie Don't Surf," where his team secures a broadcasting station. In "The Bog" and "War Pig," he fights through enemy territory to rescue a stranded tank crew and secure passage through the city.
        </p>
        <p className="mb-4">
          His final mission, "Shock and Awe," sees Jackson participating in what appears to be a successful operation until Al-Asad's nuclear device detonates. The player experiences Jackson's final moments as he crawls from the wreckage of his helicopter, witnessing the devastation before succumbing to his injuries, a pivotal moment that elevates the narrative's intensity.
        </p>
      </>
    ),
    characterDetails: {
      personality: "Professional, resilient, and dedicated. Jackson embodies the Marine Corps ethos with his disciplined approach to combat and loyalty to his unit.",
      relationships: "Subordinate to Lieutenant Vasquez, teammate to Private West and Sergeant Griggs, and opponent to Al-Asad's forces.",
      appearance: "Standard Marine Corps Force Recon gear, identified primarily through first-person perspective rather than visible character model.",
    },
    keyMissions: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>"Charlie Don't Surf"</strong>: Jackson and his squad secure a Middle Eastern broadcasting station.
          </li>
          <li>
            <strong>"The Bog"</strong>: Jackson helps rescue a stranded M1A2 Abrams tank crew under heavy fire.
          </li>
          <li>
            <strong>"Shock and Awe"</strong>: Jackson participates in the massive assault that ends with Al-Asad's nuclear detonation and his death.
          </li>
        </ul>
      </>
    ),
    notableQuotes: (
      <>
        <p className="mb-4">As a silent protagonist, Jackson has no spoken dialogue, reflecting the first-person immersion of his gameplay sequences.</p>
      </>
    ),
    biography: (
      <>
        <p className="mb-4">
          Born in the early 1980s in a small town in the American Midwest, Paul Jackson was raised with strong values of service and duty. His father, a Vietnam veteran, instilled in him a sense of patriotism that led Jackson to enlist in the United States Marine Corps shortly after high school, seeking purpose and challenge.
        </p>
        <p className="mb-4">
          Rising quickly through training, Jackson showed exceptional aptitude in urban combat scenarios, earning him a place in the prestigious 1st Force Reconnaissance Company by 2010. His leadership qualities and tactical acumen caught the attention of Lieutenant Vasquez, who requested Jackson for his fire team prior to their deployment to the Middle East.
        </p>
        <p className="mb-4">
          In 2011, Jackson's unit was among the first responders to Al-Asad's coup, participating in operations to stabilize the region and neutralize the threat. Through intense urban firefights and high-risk extractions, Jackson proved himself repeatedly, earning the respect of veterans like Sergeant Griggs. His promising career and life were cut short during Operation "Shock and Awe," when Al-Asad's nuclear device detonated in the city center, killing him and 30,000 others—a sacrifice that highlighted the conflict's brutal reality and strengthened the resolve of forces opposing the Ultranationalists.
        </p>
      </>
    ),
  },
  "khaled-al-asad": {
    name: "Khaled Al-Asad",
    affiliation: "Ultranationalists",
    role: "Secondary Antagonist",
    status: "Killed in Action (2011)",
    image: "/images/Al-asad.png",
    description: (
      <>
        <p className="mb-4">
          <strong>Khaled Al-Asad</strong> is a brutal warlord in{" "}
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Call of Duty 4: Modern Warfare
          </Link>
          , serving as Imran Zakhaev’s proxy in a Middle Eastern coup. His actions spark the game’s central conflict, drawing global powers into war.
        </p>
        <p className="mb-4">
          Al-Asad’s execution of President Yasir Al-Fulani and his nuclear detonation in “Shock and Awe” shock players, highlighting his ruthlessness. Captured in “Safehouse,” his interrogation by Price reveals Zakhaev’s plans, sealing his fate.
        </p>
      </>
    ),
    roleInStory: (
      <>
        <p className="mb-4">
          Al-Asad’s coup, seen in “The Coup,” sets the campaign’s tone, with his televised execution of Al-Fulani signaling his alliance with Zakhaev. His nuclear attack kills 30,000 U.S. Marines, escalating the stakes. In “Safehouse,” Price’s team tracks him down, and his death shifts focus to Zakhaev.
        </p>
        <p className="mb-4">
          Al-Asad’s role is pivotal but brief, acting as Zakhaev’s frontman. His betrayal of Al-Fulani and reliance on Ultranationalist support underscore his ambition and ultimate expendability in Zakhaev’s larger scheme.
        </p>
      </>
    ),
    characterDetails: {
      personality: "Ambitious, cruel, and power-hungry. Al-Asad’s charisma fuels his rise, but his arrogance leads to his downfall.",
      relationships: "Subordinate to Zakhaev, enemy to Price and U.S. forces, and betrayer of Al-Fulani.",
      appearance: "Middle-aged, with a stern demeanor and military uniform, commanding fear.",
    },
    keyMissions: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“The Coup”</strong>: Al-Asad’s takeover and execution of Al-Fulani.
          </li>
          <li>
            <strong>“Shock and Awe”</strong>: Al-Asad’s nuclear detonation devastates U.S. forces.
          </li>
          <li>
            <strong>“Safehouse”</strong>: Al-Asad’s capture and execution by Price.
          </li>
        </ul>
      </>
    ),
    notableQuotes: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>“As you can see, victory is ours!” – Al-Asad’s broadcast post-coup, exuding false triumph.</li>
        </ul>
      </>
    ),
    biography: (
      <>
        <p className="mb-4">
          Khaled Al-Asad was born in the 1960s in a war-torn Middle Eastern nation, where poverty and conflict shaped his ruthless worldview. Rising through militia ranks, he gained a reputation for brutality, catching Zakhaev’s attention in the 2000s.
        </p>
        <p className="mb-4">
          With Ultranationalist backing, Al-Asad launched his 2011 coup, aiming to rule through fear. His nuclear attack, meant to cement his power, instead drew global retaliation. Fleeing to Azerbaijan, he underestimated the SAS’s resolve, meeting his end under Price’s fist.
        </p>
        <p className="mb-4">
          Al-Asad’s brief reign left a bloody mark, with 30,000 dead and a nation in chaos. His betrayal of his people for Zakhaev’s cause defined him as a pawn in a larger game, his ambition outstripped by his hubris.
        </p>
      </>
    ),
  },
  "victor-zakhaev": {
    name: "Victor Zakhaev",
    affiliation: "Ultranationalists",
    role: "Minor Antagonist",
    status: "Killed in Action (2011)",
    image: "/images/victor.png",
    description: (
      <>
        <p className="mb-4">
          <strong>Victor Zakhaev</strong>, son of Imran Zakhaev, is a loyal Ultranationalist officer in{" "}
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Call of Duty 4: Modern Warfare
          </Link>
          . His brief but critical role amplifies the stakes of the campaign’s latter half.
        </p>
        <p className="mb-4">
          In “The Sins of the Father,” Victor’s pursuit by the SAS aims to pressure his father. His suicide to avoid capture deepens Imran Zakhaev’s resolve, pushing the conflict toward its climax.
        </p>
      </>
    ),
    roleInStory: (
      <>
        <p className="mb-4">
          Victor appears in “The Sins of the Father,” leading Ultranationalist forces in Russia. The SAS targets him to disrupt Zakhaev’s plans, chasing him through a city. His death by his own hand, rather than surrender, galvanizes his father’s nuclear ambitions.
        </p>
        <p className="mb-4">
          Victor’s role is small but impactful, serving as a personal link to Zakhaev and a catalyst for the campaign’s final missions. His loyalty underscores the Ultranationalist cause’s fervor.
        </p>
      </>
    ),
    characterDetails: {
      personality: "Arrogant, devoted, and uncompromising. Victor’s loyalty to his father overshadows his own identity.",
      relationships: "Son of Imran Zakhaev, subordinate to Ultranationalist leaders, and target of Price’s team.",
      appearance: "Younger and less imposing than his father, with tactical gear reflecting his role.",
    },
    keyMissions: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“The Sins of the Father”</strong>: Victor’s pursuit and suicide during an SAS ambush.
          </li>
        </ul>
      </>
    ),
    notableQuotes: (
      <>
        <p className="mb-4">Victor has no notable quotes, reflecting his brief screen time and focus on action over dialogue.</p>
      </>
    ),
    biography: (
      <>
        <p className="mb-4">
          Born in the 1980s to Imran Zakhaev, Victor grew up in wealth but under his father’s domineering shadow. Trained in military tactics, he embraced the Ultranationalist cause, seeing it as his birthright to restore Russia’s glory.
        </p>
        <p className="mb-4">
          By 2011, Victor was a trusted commander, overseeing operations. His role in the Middle Eastern coup was minor, but his presence in Russia drew the SAS’s attention. Cornered in “The Sins of the Father,” his suicide reflected his refusal to betray his father.
        </p>
        <p className="mb-4">
          Victor’s death intensified Zakhaev’s rage, indirectly triggering the nuclear threat. His life, though short, was a testament to blind loyalty, leaving little personal legacy beyond his father’s shadow.
        </p>
      </>
    ),
  },
};

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { characterId } = await params;
  const character = characters[characterId];

  if (!character) {
    return {
      title: "Character Not Found - Wikigames GDD",
      description: "A Wikipedia-style Game Design Document",
    };
  }

  return {
    title: `${character.name} - Wikigames GDD`,
    description: `Learn about ${character.name}, a character in Call of Duty 4: Modern Warfare, in this Wikipedia-style Game Design Document.`,
  };
}

export default async function CharacterPage({ params }) {
  const { characterId } = await params;

  const character = characters[characterId];

  if (!character) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="flex items-center mb-4">
        <h1 id={characterId} className="text-3xl font-serif mr-2 text-gray-900 dark:text-gray-100">
          {character.name}
        </h1>
        <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
      <div id="character-details" className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
        <h2 className="text-xl font-serif mb-2 flex items-center text-gray-900 dark:text-gray-100">
          Character Details
          <button className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
        <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-2 font-medium text-center text-gray-900 dark:text-gray-100">
            {character.name}
          </div>
          <div className="p-4">
            <Image
              src={character.image}
              alt={`${character.name} in Call of Duty 4: Modern Warfare`}
              width={240}
              height={200}
              className="mx-auto mb-4"
            />
            <div className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
              {character.name} in Call of Duty 4: Modern Warfare
            </div>
            <div className="space-y-2 text-sm text-gray-900 dark:text-gray-100">
              <div className="grid grid-cols-2 gap-1">
                <div className="font-medium">Affiliation:</div>
                <div>{character.affiliation}</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="font-medium">Role:</div>
                <div>{character.role}</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="font-medium">Status:</div>
                <div>{character.status}</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="font-medium">Appears in:</div>
                <div>
                  <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Call of Duty 4: Modern Warfare
                  </Link>
                </div>
              </div>
              {character.characterDetails.personality && (
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Personality:</div>
                  <div>{character.characterDetails.personality}</div>
                </div>
              )}
              {character.characterDetails.relationships && (
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Relationships:</div>
                  <div>{character.characterDetails.relationships}</div>
                </div>
              )}
              {character.characterDetails.appearance && (
                <div className="grid grid-cols-2 gap-1">
                  <div className="font-medium">Appearance:</div>
                  <div>{character.characterDetails.appearance}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div id="description">
            <h2 className="text-xl font-serif mb-2 flex items-center text-gray-900 dark:text-gray-100">
              Overview
              <button className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
            {character.description}
          </div>

          <div id="role-in-the-story" className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
            <h2 className="text-xl font-serif mb-2 flex items-center text-gray-900 dark:text-gray-100">
              Role in the Story
              <button className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
            {character.roleInStory}
          </div>
          <div id="key-missions" className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
            <h2 className="text-xl font-serif mb-2 flex items-center text-gray-900 dark:text-gray-100">
              Key Missions
              <button className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
            {character.keyMissions}
          </div>

          <div id="notable-quotes" className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
            <h2 className="text-xl font-serif mb-2 flex items-center text-gray-900 dark:text-gray-100">
              Notable Quotes
              <button className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
            {character.notableQuotes}
          </div>

          <div id="biography" className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
            <h2 className="text-xl font-serif mb-2 flex items-center text-gray-900 dark:text-gray-100">
              Biography
              <button className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
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
            {character.biography}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/characters" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Characters
        </Link>
      </div>
    </article>
  );
}

// Add Sergeant Jackson to generateStaticParams function at the bottom of your file
export async function generateStaticParams() {
  return [
    { characterId: "imran-zakhaev" },
    { characterId: "captain-price" },
    { characterId: "soap-mactavish" },
    { characterId: "khaled-al-asad" },
    { characterId: "victor-zakhaev" },
    { characterId: "sergeant-jackson" }, // Add this line
  ];
}