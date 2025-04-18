import Link from "next/link";

export const metadata = {
  title: "Game Mechanics - GamePedia",
  description: "Explore the game mechanics of Call of Duty 4: Modern Warfare in this Wikipedia-style Game Design Document.",
};

export default function GameMechanicsPage() {
  return (
    <article className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-serif mb-4 text-gray-900 dark:text-gray-100">
        Game Mechanics
      </h1>
      <section id="introduction" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Introduction
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          <strong>Call of Duty 4: Modern Warfare</strong>, released in 2007 by Infinity Ward and Activision, revolutionized the first-person shooter (FPS) genre by shifting from historical World War II settings to contemporary conflicts. Its innovative mechanics, including fast-paced combat, customizable multiplayer features, and cinematic single-player missions, set new standards for the industry. This page explores the core systems that define the game’s immersive experience.
        </p>
      </section>

      <section id="core-gameplay" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Core Gameplay
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The game emphasizes fast-paced, tactical first-person shooter gameplay. Players engage in intense combat with realistic weapon handling, including assault rifles, sniper rifles, and explosives, designed with accurate ballistics and recoil patterns. The control scheme prioritizes responsiveness, allowing for quick aiming and movement, essential for both single-player and multiplayer modes.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li><strong>Tactical Combat</strong>: Players must use cover, flanking, and strategic positioning to outmaneuver enemies, with AI opponents exhibiting adaptive behaviors.</li>
          <li><strong>Health System</strong>: A regenerating health model encourages players to take cover during intense firefights, balancing accessibility with challenge.</li>
          <li><strong>Weapon Customization</strong>: Limited customization in single-player (e.g., attachments like silencers) contrasts with extensive multiplayer options.</li>
        </ul>
      </section>

      <section id="multiplayer-features" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Multiplayer Features
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The multiplayer mode introduced groundbreaking features that became genre staples, particularly the customizable killstreak system and diverse map designs.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li><strong>Killstreaks</strong>: Players earn rewards like UAV reconnaissance, airstrikes, or helicopter support after achieving consecutive kills without dying, adding strategic depth.</li>
          <li><strong>Game Modes</strong>: Includes Team Deathmatch, Search and Destroy, and Domination, each with unique objectives to encourage varied playstyles.</li>
          <li><strong>Prestige System</strong>: Players can reset their rank after reaching the maximum level, earning prestige icons and new challenges, enhancing replayability.</li>
          <li><strong>Perks and Loadouts</strong>: Customizable perks (e.g., Stopping Power, Juggernaut) and weapon loadouts allow players to tailor their playstyle.</li>
        </ul>
      </section>

      <section id="single-player-campaign" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Single-Player Campaign
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The single-player campaign features linear missions with cinematic storytelling, blending action and stealth elements to create an immersive narrative experience.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li><strong>Scripted Events</strong>: Missions like “Crew Expendable” use scripted sequences to enhance drama, such as explosions or NPC interactions.</li>
          <li><strong>Stealth Mechanics</strong>: Missions like “All Ghillied Up” require players to avoid detection, using silenced weapons and cover.</li>
          <li><strong>Dynamic Objectives</strong>: Objectives shift mid-mission (e.g., rescuing downed pilots in “Shock and Awe”), keeping gameplay unpredictable.</li>
        </ul>
      </section>

      <section id="communication" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Communication and Teamwork
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The game introduced voice chat for multiplayer, enabling real-time coordination among players, a feature that became standard in online FPS games.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-100">
          <li><strong>Voice Chat</strong>: Allows players to strategize and communicate during matches, enhancing team-based gameplay.</li>
          <li><strong>Character Animations</strong>: Realistic NPC and player animations, such as reloading or melee attacks, add immersion.</li>
        </ul>
      </section>

      <section id="conclusion" className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <h2 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
          Conclusion
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100">
          The game mechanics of *Call of Duty 4: Modern Warfare* redefined the FPS genre, blending fast-paced action, tactical depth, and innovative multiplayer features. Its influence is evident in subsequent titles, cementing its legacy as a cultural milestone.
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