"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const getContents = (pathname) => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (pathname === "/") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="/#executive-summary"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "executive-summary")}
          >
            1 Executive Summary
          </Link>
        </li>
        <li>
          <Link
            href="/#gameplay"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "gameplay")}
          >
            2 Gameplay
          </Link>
        </li>
        <li>
          <Link
            href="/#story"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "story")}
          >
            3 Story
          </Link>
        </li>
        <li>
          <Link
            href="/#development"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "development")}
          >
            4 Development
          </Link>
        </li>
        <li>
          <Link
            href="/#reception"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "reception")}
          >
            5 Reception
          </Link>
        </li>
        <li>
          <Link
            href="/#awards"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "awards")}
          >
            6 Awards
          </Link>
        </li>
        <li>
          <Link
            href="/#references"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "references")}
          >
            7 References
          </Link>
        </li>
        <li>
          <Link
            href="/#external-links"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "external-links")}
          >
            8 External Links
          </Link>
        </li>
      </ul>
    );
  } else if (pathname === "/characters") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/characters#overview"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "overview")}
          >
            1 Overview
          </Link>
        </li>
        <li>
          <Link
            href="/characters#main-characters"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "main-characters")}
          >
            2 Main Characters
          </Link>
        </li>
      </ul>
    );
  } else if (pathname.startsWith("/characters/")) {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/characters" className="text-blue-600 hover:underline">
            ← Back to Characters
          </Link>
        </li>
        <li>
          <Link
            href="/characters/imran-zakhaev#imran-zakhaev"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "imran-zakhaev")}
          >
            1 Imran Zakhaev
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/imran-zakhaev#role-in-the-story"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "role-in-the-story")}
              >
                1.1 Role in the Story
              </Link>
            </li>
            <li>
              <Link
                href="/characters/imran-zakhaev#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                1.2 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/imran-zakhaev#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                1.3 Biography
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/characters/captain-price#captain-price"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "captain-price")}
          >
            2 Captain John Price
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/captain-price#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                2.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/captain-price#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                2.2 Biography
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/characters/soap-mactavish#soap-mactavish"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "soap-mactavish")}
          >
            3 John "Soap" MacTavish
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/soap-mactavish#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                3.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/soap-mactavish#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                3.2 Biography
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/characters/sergeant-jackson#sergeant-jackson"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "sergeant-jackson")}
          >
            4 Sergeant Paul Jackson
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/sergeant-jackson#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                4.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/sergeant-jackson#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                4.2 Biography
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/characters/khaled-al-asad#khaled-al-asad"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "khaled-al-asad")}
          >
            5 Khaled Al-Asad
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/khaled-al-asad#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                5.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/khaled-al-asad#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                5.2 Biography
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/characters/victor-zakhaev#victor-zakhaev"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "victor-zakhaev")}
          >
            6 Victor Zakhaev
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/victor-zakhaev#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                1.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/victor-zakhaev#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                1.2 Biography
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  } else if (pathname === "/gameplay") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/gameplay#overview"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "overview")}
          >
            1 Overview
          </Link>
        </li>
        <li>
          <Link
            href="/gameplay#single-player"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "single-player")}
          >
            2 Single-Player Campaign
          </Link>
        </li>
        <li>
          <Link
            href="/gameplay#multiplayer"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "multiplayer")}
          >
            3 Multiplayer Mode
          </Link>
        </li>
        <li>
          <Link
            href="/gameplay#weapons"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "weapons")}
          >
            4 Weapons
          </Link>
        </li>
        <li>
          <Link href="/gameplay#factions" className="text-blue-600 hover:underline" onClick={(e) => handleScroll(e, "factions")}>
            5 Factions
          </Link> 
        </li>
        <li>
          <Link href="/gameplay#killstreaks-perks" className="text-blue-600 hover:underline" onClick={(e) => handleScroll(e, "killstreaks-perks")}>
            6 Killstreaks and Perks
          </Link>
        </li>
        <li>
          <Link href="/gameplay#game-mechanics" className="text-blue-600 hover:underline" onClick={(e) => handleScroll(e, "game-mechanics")}>
            7 Game Mechanics
          </Link>
        </li>
      </ul>
    );
  } else if (pathname === "/story-outline") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/story-outline#overview"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "overview")}
          >
            1 Overview
          </Link>
        </li>
        <li>
          <Link
            href="/story-outline#key-events"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "key-events")}
          >
            2 Key Events
          </Link>
        </li>
        <li>
          <Link
            href="/story-outline#themes"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "themes")}
          >
            3 Themes
          </Link>
        </li>
      </ul>
    );
  } else if (pathname === "/game-mechanics") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/game-mechanics#introduction"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "introduction")}
          >
            1 Introduction
          </Link>
        </li>
        <li>
          <Link
            href="/game-mechanics#core-gameplay"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "core-gameplay")}
          >
            2 Core Gameplay
          </Link>
        </li>
        <li>
          <Link
            href="/game-mechanics#multiplayer-features"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "multiplayer-features")}
          >
            3 Multiplayer Features
          </Link>
        </li>
        <li>
          <Link
            href="/game-mechanics#single-player-campaign"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "single-player-campaign")}
          >
            4 Single-Player Campaign
          </Link>
        </li>
        <li>
          <Link
            href="/game-mechanics#communication"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "communication")}
          >
            5 Communication and Teamwork
          </Link>
        </li>
        <li>
          <Link
            href="/game-mechanics#conclusion"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "conclusion")}
          >
            6 Conclusion
          </Link>
        </li>
      </ul>
    );
  } else if (pathname === "/level-design") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/level-design#introduction"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "introduction")}
          >
            1 Introduction
          </Link>
        </li>
        <li>
          <Link
            href="/level-design#single-player-mission-design"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "single-player-mission-design")}
          >
            2 Single-Player Mission Design
          </Link>
        </li>
        <li>
          <Link
            href="/level-design#multiplayer-map-design"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "multiplayer-map-design")}
          >
            3 Multiplayer Map Design
          </Link>
        </li>
        <li>
          <Link
            href="/level-design#environmental-storytelling"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "environmental-storytelling")}
          >
            4 Environmental Storytelling
          </Link>
        </li>
        <li>
          <Link
            href="/level-design#conclusion"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "conclusion")}
          >
            5 Conclusion
          </Link>
        </li>
      </ul>
    );
  } else if (pathname === "/story-at-level") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/story-at-level#introduction"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "introduction")}
          >
            1 Introduction
          </Link>
        </li>
        <li>
          <Link
            href="/story-at-level#act-1"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "act-1")}
          >
            2 Act 1: Middle Eastern Conflict
          </Link>
        </li>
        <li>
          <Link
            href="/story-at-level#act-2"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "act-2")}
          >
            3 Act 2: Pursuit and Revelation
          </Link>
        </li>
        <li>
          <Link
            href="/story-at-level#act-3"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "act-3")}
          >
            4 Act 3: Climactic Showdown
          </Link>
        </li>
        <li>
          <Link
            href="/story-at-level#conclusion"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "conclusion")}
          >
            5 Conclusion
          </Link>
        </li>
      </ul>
    );
  } else if (pathname === "/soundtrack") {
    return (
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Main Page
          </Link>
        </li>
        <li>
          <Link
            href="/soundtrack#overview"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "overview")}
          >
            1 Overview
          </Link>
        </li>
        <li>
          <Link
            href="/soundtrack#composers"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "composers")}
          >
            2 Composers
          </Link>
        </li>
        <li>
          <Link
            href="/soundtrack#track-list"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "track-list")}
          >
            3 Track List
          </Link>
        </li>
        <li>
          <Link
            href="/soundtrack#sound-effects"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "sound-effects")}
          >
            4 Sound Effects
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="md:w-64 pl-3 pr-3 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      <div className="border border-gray-400 dark:border-gray-700 rounded-md overflow-hidden">
        <div className="bg-gray-200 dark:bg-gray-700 p-4 font-medium text-gray-900 dark:text-gray-100">
          Contents
        </div>
        <div className="p-4">{getContents(pathname)}</div>
      </div>
    </aside>
  );
}