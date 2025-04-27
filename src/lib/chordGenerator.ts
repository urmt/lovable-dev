export const chordProgressions: Record<string, string[][]> = {
  rock: [
    ['C', 'G', 'Am', 'F'],
    ['D', 'A', 'Bm', 'G'],
    ['E', 'B', 'C#m', 'A'],
  ],
  jazz: [
    ['Cmaj7', 'Dmin7', 'G7', 'Cmaj7'],
    ['Fmaj7', 'Gmin7', 'C7', 'Fmaj7'],
  ],
  pop: [
    ['G', 'Em', 'C', 'D'],
    ['A', 'F#m', 'D', 'E'],
  ],
};

export function generateChordProgression(genre: string, length: number = 4): string[] {
  const progressions = chordProgressions[genre] || chordProgressions['rock'];
  const randomProg = progressions[Math.floor(Math.random() * progressions.length)];
  return randomProg.slice(0, length);
}
