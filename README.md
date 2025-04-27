# 🎵 Lovable.dev Tone Generator App

## Project Description
Create a professional-quality AI-assisted backing track generator. Features include:
- Genre, mood, BPM, key, and length-based track generation
- Dynamic sample selection
- Per-instrument volume sliders
- Master output fader
- Track meters
- Test tone functionality
- Toggle-able debug panel
- Firebase backend for samples and metadata

Built with:
- Next.js 14 + React 18
- Tailwind CSS
- Tone.js
- Firebase 10 (Hosting, Storage, Firestore)
- TypeScript (recommended)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/lovabledev-tone-generator.git
cd lovabledev-tone-generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up Firebase
- Create a Firebase project.
- Add Firebase config to `/src/firebase/firebase-config.ts`.
- Set up Firestore and Storage.

### 4. Run the Development Server
```bash
npm run dev
```

Server should run at [http://localhost:3000](http://localhost:3000)

---

## Project Structure
```
/src
  /app
    /components
    /hooks
    /lib
  /firebase
/public
```

---

## Development Notes
- Samples should be normalized and tagged properly.
- Genre/mood selectors must map correctly to sample metadata.
- Track generation should fallback gracefully if a sample is missing.
- Extend AI generator as needed for unique chord progressions.

---

## Commands
- `npm run dev` – Run development server
- `npm run build` – Build for production
- `npm run start` – Start production server

---

## License
MIT License © 2025 Lovable.dev

