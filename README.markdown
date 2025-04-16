# Wiki Games: Call of Duty 4: Modern Warfare GDD

## Overview

Wiki Games is a Wikipedia-style Game Design Document (GDD) for *Call of Duty 4: Modern Warfare*, built using Next.js and Tailwind CSS. The project aims to provide a comprehensive resource for the game’s design, including its mechanics, level design, story, and characters. The app features a clean, responsive UI with dark mode support, smooth scrolling navigation, and a dynamic sidebar for easy access to content sections.

### Features
- **Game Overview**: Detailed summary of *Call of Duty 4: Modern Warfare*, including gameplay, story, and development history (`app/page.jsx`).
- **Game Mechanics**: In-depth breakdown of gameplay systems, such as combat, multiplayer features, and communication (`app/game-mechanics/page.jsx`).
- **Level Design**: Analysis of single-player mission and multiplayer map design (`app/level-design/page.jsx`).
- **Story by Act**: Narrative breakdown into Act 1, Act 2, and Act 3, detailing key events and missions (`app/story/page.jsx`).
- **Characters**: Detailed profiles for key characters like Imran Zakhaev, Captain Price, and Sergeant Paul Jackson (`app/characters/[characterId]/page.jsx`).
- **Dynamic Sidebar**: A client-side sidebar that adjusts content based on the current page, with smooth scrolling to sections (`Sidebar.jsx`).
- **Dark Mode**: Full support for light and dark themes using Tailwind CSS (`dark:` classes).

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or Yarn
- Git

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/wiki-games-cod4.git
   cd wiki-games-cod4
   ```

2. **Install Dependencies**
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```

3. **Run the Development Server**
   Using npm:
   ```bash
   npm run dev
   ```
   Or using Yarn:
   ```bash
   yarn dev
   ```

4. **Open the App**
   Open your browser and navigate to `http://localhost:3000` to view the app.

## File Structure

```
wiki-games-cod4/
├── app/
│   ├── page.jsx              # Homepage for Call of Duty 4: Modern Warfare
│   ├── game-mechanics/
│   │   └── page.jsx          # Game Mechanics page
│   ├── level-design/
│   │   └── page.jsx          # Level Design page
│   ├── story/
│   │   └── page.jsx          # Story page (by act)
│   ├── characters/
│   │   ├── [characterId]/
│   │   │   └── page.jsx      # Dynamic character pages (e.g., /characters/imran-zakhaev)
│   ├── story-outline/
│   │   └── page.jsx          # Story Outline page
│   ├── gameplay/
│   │   └── page.jsx          # Gameplay page
│   ├── soundtrack/
│   │   └── page.jsx          # Soundtrack page
│   └── layout.jsx            # Root layout with header, search bar, and sidebar
├── components/
│   └── Sidebar.jsx           # Dynamic sidebar component with smooth scrolling
├── public/
│   ├── images/               # Character images (e.g., Imran.png, Price_3.jpg)
│   └── ...                   # Other static assets
├── styles/
│   └── globals.css           # Global styles with Tailwind CSS
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation (this file)
```

## Usage

- **Homepage**: Visit `/` to see the main overview of *Call of Duty 4: Modern Warfare*, including sections like Executive Summary, Gameplay, and Story.
- **Game Mechanics**: Navigate to `/game-mechanics` to explore the game’s core mechanics, multiplayer features, and more.
- **Level Design**: Go to `/level-design` to learn about mission and map design principles.
- **Story by Act**: Access `/story` to read the narrative breakdown by Act 1, Act 2, and Act 3.
- **Characters**: Visit `/characters/[characterId]` (e.g., `/characters/captain-price`) for detailed character profiles.
- **Navigation**: Use the sidebar to jump to specific sections within a page, with smooth scrolling enabled.
- **Dark Mode**: Toggle between light and dark themes using the button in the header (if implemented in `layout.jsx`).

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**
   Click the "Fork" button on GitHub to create your own copy of the repository.

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   Implement your changes or additions, ensuring they align with the project’s style (e.g., Tailwind CSS for styling, consistent Markdown formatting for content).

4. **Test Your Changes**
   Run the app locally (`npm run dev`) and verify that your changes work as expected, including dark mode compatibility.

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add your commit message here"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   Open a pull request on GitHub, describing your changes and their purpose.

### Guidelines
- Follow the existing code style (e.g., use Tailwind CSS classes, maintain consistent section structures in pages).
- Ensure all new pages are accessible via the sidebar (`Sidebar.jsx`) and search bar (`layout.jsx`).
- Test for dark mode compatibility (`dark:` classes for Tailwind CSS).
- Document any new features or pages in the README.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Infinity Ward and Activision**: For creating *Call of Duty 4: Modern Warfare*, the inspiration for this GDD.
- **Next.js and Tailwind CSS**: For providing the tools to build a modern, responsive web app.
- **Sources**: Information is sourced from reliable references like the Call of Duty Wiki, IMDb, and Wikipedia.

## Contact

For questions or feedback, reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue on GitHub.