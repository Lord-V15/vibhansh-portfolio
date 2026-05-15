# Portfolio App - UI States Analysis

## Overview
This is a portfolio website for Vibhansh Gupta with a distinctive terminal/hacker aesthetic using a green-on-black Matrix-style theme. The app has **two distinct UI states** that toggle on click.

---

## State 1: Landing/Default State

### Layout
- **Left Side**: Terminal-style interface (~40% width)
  - Green text on black background
  - Terminal border in green
  
- **Right Side**: 3D visualization (~60% width)
  - Large green sphere made of particles/dots
  - Sphere appears to be a WebGL/Three.js 3D object with point cloud rendering
  
- **Background**: Pure black

### Terminal Content (Landing)
```
>_ [SYSTEM_READY] portfolio.exe

> whoami
  VIBHANSH GUPTA
  [MLOps_Engineer] [Product_Lead] [Python_Enthusiast]

> cat tagline.txt
  Make Products Scalable Again_

> cat bio.txt
  Tech enthusiast, Python lover and Space aficionado.
  I love bringing AI ideas into production.

> ls ./contact/
  [EMAIL]  [LINKEDIN]  [GITHUB]
```

### UI Indicators
- Bottom of terminal: `[SCROLL_DOWN_FOR_MORE_INFO] ↓`
- Bottom right corner: `[CLICK_TO_TOGGLE_MODE]`

---

## State 2: After Scroll (Still in Default State)

When user scrolls, different terminal content appears:

### Skills Section
```
<> ./skills--list-all

[TECH_STACK]:
  Tech badges displayed as pills:
  - FastAPI, Celery, Git, Redis, PyTest, Github Actions, Pandas
  - MongoDB, NumPy, PostgreSQL, spaCy, Scikit-learn, Tensorflow, Jupyter
  - Docker, Websockets, ElasticSearch, GCP, AWS, DigitalOcean

[LANGUAGES]:
  Python         [100%] ████████████████████████████
  Shell (Bash/ZSH) [80%] ████████████████████
```

### Projects Section
```
> cd /projects && ls

Three project cards displayed:
  [PROJECT_1]
  Context Search
  > NER based intelligence

  [PROJECT_2]
  OCR Notes Companion
  > iOS app for quick notes

  [PROJECT_3]
  DGL
  > send letters to the future (dgl_novyte.ai)
```

### Experience Section
```
> cat experience.log

[POSITION_1]                                📅 [12/2025 - Present]
Team Lead, Product                          📍 [Canberra, Australia (Remote)]
Novyte Materials

The computational backbone for autonomous materials science – from search to synthesis.

[ACHIEVEMENTS]:
▸ Leading development for O, the AI-based material synthesis platform for manufacturing R&D
▸ Architecting the platform's system design choices to ensure a scalable future
▸ Managing the Software and AI teams to ensure synergy across collaboration

[POSITION_2]                                📅 [06/2024 - 06/2025]
Senior Engineer - MLOps                     📍 [Bangalore, India]
Fractal Analytics (Client: Mondelez International)
```

---

## State 3: Toggled/Clicked State

### Visual Changes
**Triggered by**: Clicking anywhere (or clicking the `[CLICK_TO_TOGGLE_MODE]` indicator)

**Key Differences**:
1. **Background**: Changes from pure black to **grey grid pattern** covering entire viewport
2. **Grid**: Appears to be a 3D perspective grid (like a floor grid in 3D space)
3. **Particles**: The green dot particles from the sphere are now visible as background elements integrated with the grid
4. **Terminal**: Remains visible with same content but now overlays the grid background
5. **Overall Effect**: Creates a cyberspace/3D environment feeling vs the flat black background

### Grid Characteristics
- Grey/dark grey color scheme
- Appears to be a perspective grid (vanishing point visible)
- Covers full viewport
- Green particles/dots scattered across it
- Creates depth and dimension

---

## Technical Implementation Notes

### Likely Technologies
- **3D Sphere**: Three.js or similar WebGL library
  - Particle system with point cloud rendering
  - Possibly using `THREE.Points` with custom geometry
  
- **Terminal Effect**: 
  - Monospace font (looks like Courier or similar)
  - Terminal-style text rendering with typing animations (likely)
  
- **Grid Background**: 
  - Could be Three.js grid helper or custom shader
  - 3D perspective transformation
  
- **State Management**: 
  - React (likely) with state toggle
  - CSS classes or style switching between states

### Color Scheme
- **Primary**: `#00FF00` or similar bright green (Matrix green)
- **Secondary**: `#FF0000` for labels like [POSITION_1], [PROJECT_1]
- **Accent**: `#FFAA00` for text like tagline
- **Background Default**: `#000000` (pure black)
- **Background Toggle**: `#1a1a1a` to `#333333` (grey tones)
- **Grid**: `#404040` or similar dark grey

### Interaction Points
1. **Scroll**: Reveals more terminal content (skills, projects, experience)
2. **Click/Toggle**: Switches between black background and grey grid background
3. **Hover** (likely): Project cards and contact buttons probably have hover effects

---

## Design Theme
**Aesthetic**: Cyberpunk / Hacker / Terminal / Matrix-inspired
- Simulates a command-line interface
- All content presented as terminal commands and outputs
- 3D elements add modern, interactive dimension
- Green-on-black evokes classic hacker terminals and Matrix movies
- Professional content delivered through playful, tech-savvy presentation

---

## User Flow
1. **Landing**: User sees name, title, tagline, bio, and rotating 3D sphere
2. **Scroll Down**: Reveals skills, tech stack, projects
3. **Continue Scrolling**: Shows work experience
4. **Click Anywhere**: Toggles between clean black background and immersive 3D grid environment
5. **Navigation**: Likely scrolls back to top or has internal navigation between sections

---

## Questions / Unknowns
- Are there more states beyond the two identified?
- Does the sphere respond to mouse movement or scroll position?
- Are there animations when toggling between states?
- Do project cards link to individual project pages?
- Is there a navigation menu or is it purely scroll-based?
- Are contact buttons functional (email, LinkedIn, GitHub)?
