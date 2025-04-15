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
        <Link href="/soundtrack" className="text-blue-600 hover:underline">
            7 soundtrack
          </Link>
        </li>
        <li>
        <Link href="/characters" className="text-blue-600 hover:underline">
            8 character
          </Link>
        </li>
        <li>
          <Link
            href="/#references"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "references")}
          >
            9 References
          </Link>
        </li>
        <li>
          <Link
            href="/#external-links"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "external-links")}
          >
            10 External Links
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
            href="/characters/khaled-al-asad#khaled-al-asad"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "khaled-al-asad")}
          >
            4 Khaled Al-Asad
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/khaled-al-asad#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                4.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/khaled-al-asad#biography"
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
            href="/characters/victor-zakhaev#victor-zakhaev"
            className="text-blue-600 hover:underline"
            onClick={(e) => handleScroll(e, "victor-zakhaev")}
          >
            5 Victor Zakhaev
          </Link>
          <ul className="ml-4 space-y-1 text-sm">
            <li>
              <Link
                href="/characters/victor-zakhaev#character-details"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "character-details")}
              >
                5.1 Character Details
              </Link>
            </li>
            <li>
              <Link
                href="/characters/victor-zakhaev#biography"
                className="text-blue-600 hover:underline"
                onClick={(e) => handleScroll(e, "biography")}
              >
                5.2 Biography
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
    <aside className="md:w-64 pr-6">
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <div className="bg-gray-100 p-2 font-medium">Contents</div>
        <div className="p-4">{getContents(pathname)}</div>
      </div>
    </aside>
  );
}