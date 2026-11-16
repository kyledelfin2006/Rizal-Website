/** How well a fact is supported. Shown as a badge next to the fact. */
export type Confidence = "biography" | "repeated" | "differ";

export const confidenceLabel: Record<Confidence, string> = {
  biography: "In a biography",
  repeated: "Widely repeated",
  differ: "Sources differ",
};

export const confidenceHelp: Record<Confidence, string> = {
  biography: "Stated in Austin Craig's 1913 biography, which draws on Rizal's diary.",
  repeated: "Found consistently in several later summaries. Not checked against a primary source.",
  differ: "Accounts disagree. The page says how.",
};

export const nav = [
  { id: "voyage", label: "The voyage" },
  { id: "route", label: "The route" },
  { id: "days", label: "The 45 days" },
  { id: "did", label: "What he did" },
  { id: "people", label: "Who he met" },
  { id: "onward", label: "The road on" },
  { id: "visit", label: "Visit today" },
  { id: "sources", label: "Sources" },
];

/* ---------- Voyage ribbon ---------- */
export interface Leg {
  place: string;
  note: string;
  japan?: boolean;
}

export const legs: Leg[] = [
  { place: "Manila", note: "Leaves in February 1888 after Noli Me Tangere stirs up powerful enemies." },
  { place: "Hong Kong", note: "Short stay. He meets José Maria Basa, an exile who looks after Filipino students." },
  { place: "Macau", note: "A side trip, where he meets another exile and admires his patient bearing." },
  { place: "Yokohama and Tokyo", note: "45 days, from 28 February to about 13 April. The longest stop of this stretch.", japan: true },
  { place: "San Francisco", note: "Reached by the steamer Belgic. The ship is held in quarantine for a time." },
  { place: "Across America", note: "By train through the Rockies, Chicago, Niagara Falls and the Hudson valley." },
  { place: "London", note: "Where the voyage ends. A Japanese journalist travels with him all the way." },
];

/* ---------- Route chapters ---------- */
export type PlaceKey = "yokohama" | "tokyo" | "nikko" | "hakone";

export interface Chapter {
  id: string;
  when: string;
  title: string;
  places: PlaceKey[];
  confidence: Confidence;
  body: string[];
  note?: string;
}

export const chapters: Chapter[] = [
  {
    id: "arrive",
    when: "28 February 1888",
    title: "Arrival in Yokohama",
    places: ["yokohama"],
    confidence: "repeated",
    body: [
      "Rizal is 26 years old. He steps off a steamer from Hong Kong into Yokohama, the main treaty port of Meiji Japan, and registers at the Grand Hotel.",
      "Japan is meant to be a short stop on the way to America and Europe.",
    ],
  },
  {
    id: "tokyo-hotel",
    when: "29 February to 7 March",
    title: "The Tokyo Hotel",
    places: ["tokyo"],
    confidence: "repeated",
    body: [
      "The next day he travels by train to Tokyo and takes a room at the Tokyo Hotel.",
      "A diplomat from the Spanish Legation, Juan Perez Caballero, visits him there and invites him to stay at the legation.",
    ],
    note: "Today a bust of Rizal stands in Hibiya Park, on the site where the Tokyo Hotel once was.",
  },
  {
    id: "legation",
    when: "From 7 March",
    title: "Living at the Spanish Legation",
    places: ["tokyo"],
    confidence: "biography",
    body: [
      "Rizal accepts and moves into the legation in Tokyo. Craig's biography says he was hospitably entertained, and that the Spanish minister even offered him a position, probably as an interpreter, if he wished to stay in Japan. He declined.",
      "From here he studies Japanese life and language, and meets the people described in the next section.",
    ],
  },
  {
    id: "day-trips",
    when: "March to April, dates unknown",
    title: "Day trips beyond Tokyo",
    places: ["nikko", "hakone"],
    confidence: "differ",
    body: [
      "Later summaries say he visited Meguro, Nikko, Hakone and Miyanoshita, along with smaller villages.",
      "Nikko is known for its shrines and cedar avenues. Hakone has hot springs and views toward Mount Fuji.",
    ],
    note: "No source checked here gives dates for these trips, so they are drawn as dashed lines on the map. Some student summaries also mention Kyoto, Osaka or Kobe. None of the sources I could check support that, so they are left out.",
  },
  {
    id: "depart",
    when: "13 April 1888",
    title: "Sailing from Yokohama",
    places: ["yokohama"],
    confidence: "differ",
    body: [
      "Rizal boards the English steamer Belgic, bound for San Francisco. Craig writes that he left with regret, and called the month or so in Japan one of the happiest of his travels.",
    ],
    note: "Most sources give 13 April for the sailing. One study guide says 18 April. This page uses 13 April, which also gives the commonly quoted 45 days.",
  },
];

/* Approximate positions on the cropped map (SVG units). */
export const mapPoints: Record<PlaceKey, { x: number; y: number; name: string; kanji: string; dx: number; dy: number }> = {
  yokohama: { x: 614, y: 678, name: "Yokohama", kanji: "横浜", dx: 8, dy: 14 },
  tokyo: { x: 619, y: 666, name: "Tokyo", kanji: "東京", dx: 10, dy: -4 },
  nikko: { x: 611, y: 604, name: "Nikko", kanji: "日光", dx: 10, dy: 2 },
  hakone: { x: 574, y: 694, name: "Hakone", kanji: "箱根", dx: -8, dy: 16 },
};

/* ---------- Calendar ---------- */
export interface DayEvent {
  iso: string; // yyyy-mm-dd
  label: string;
  confidence: Confidence;
}

export const dayEvents: DayEvent[] = [
  { iso: "1888-02-28", label: "Arrives in Yokohama", confidence: "repeated" },
  { iso: "1888-02-29", label: "Moves to the Tokyo Hotel, where Caballero invites him to the legation", confidence: "repeated" },
  { iso: "1888-03-07", label: "Moves into the Spanish Legation", confidence: "repeated" },
  { iso: "1888-04-13", label: "Sails from Yokohama on the Belgic", confidence: "differ" },
];

/* ---------- What he did ---------- */
export interface Doing {
  kanji: string;
  title: string;
  text: string;
  confidence: Confidence;
}

export const doings: Doing[] = [
  {
    kanji: "言",
    title: "He learned the language",
    text: "Craig reports that Rizal gained such ease with Japanese that, together with his appearance, people found it hard to believe he was not Japanese.",
    confidence: "biography",
  },
  {
    kanji: "社",
    title: "He studied Japanese society",
    text: "He made a considerable investigation into the condition of the different classes of Japanese, comparing what he saw with life at home.",
    confidence: "biography",
  },
  {
    kanji: "絵",
    title: "He drew in the Japanese style",
    text: "He took in the spirit of Japanese artists and learned to draw in their manner. In one joke sketch he reversed the lines of a German face and turned it into an old-style Japanese one.",
    confidence: "biography",
  },
  {
    kanji: "職",
    title: "He turned down a job",
    text: "The Spanish minister offered him a position, probably as an interpreter, if he wanted to stay. Rizal declined and kept to his journey.",
    confidence: "biography",
  },
];

/* ---------- People ---------- */
export interface Person {
  name: string;
  jp?: string;
  role: string;
  text: string;
  confidence: Confidence;
  img?: string;
  imgNote?: string;
}

export const people: Person[] = [
  {
    name: "Juan Perez Caballero",
    img: "assets/people/caballero.jpg",
    imgNote: "Photographed later in life, by Christian Franzen",
    role: "Diplomat at the Spanish Legation",
    text: "He called on Rizal at the Tokyo Hotel and invited him to live at the legation. Sources differ on his title: some say secretary, Craig says minister.",
    confidence: "differ",
  },
  {
    name: "O-Sei-San (Seiko Usui)",
    jp: "臼井勢以子",
    role: "Friend and guide in Tokyo",
    text: "Described as a young woman from a samurai family who spoke English and French. Accounts say she showed him around Tokyo and helped him with Japanese. She later married Alfred Charlton in 1897.",
    confidence: "repeated",
  },
  {
    name: "Tetcho Suehiro",
    img: "assets/people/suehiro.jpg",
    imgNote: "Portrait, before 1896",
    jp: "末広鉄腸",
    role: "Journalist and novelist",
    text: "Met aboard the Belgic. Craig does not name him but describes a Japanese newspaperman who spoke no other language and travelled with Rizal all the way to London, with Rizal acting as interpreter.",
    confidence: "repeated",
  },
  {
    name: "Mrs. Jackson",
    role: "Fellow passenger on the way to Japan",
    text: "A Filipino woman married to an Englishman. She praised a novel by a Filipino author to Rizal, who then admitted he had written it.",
    confidence: "biography",
  },
  {
    name: "José Maria Basa",
    img: "assets/people/basa.jpg",
    imgNote: "Portrait, 1922 publication",
    role: "Exile in Hong Kong",
    text: "Met just before Japan. He looked after Filipino students in the colony and had been exiled in 1872.",
    confidence: "biography",
  },
];

/* ---------- The road on ---------- */
export interface Parallel {
  seen: string;
  home: string;
}

export const parallels: Parallel[] = [
  { seen: "Niagara Falls", home: "He called its mystery awe-inspiring, but said the cascades of his native Laguna were more delicate and daintier." },
  { seen: "The Hudson River", home: "Its busy banks reminded him of the Pasig, with the difference that the Pasig had far less traffic." },
  { seen: "Chicago's cigar stores", home: "Each had a figure of a Native American outside. He noticed that America kept the memory of its first people alive, while in the Philippines it survived mostly in foreign museums." },
];

export const roadOn: string[] = [
  "At San Francisco the Belgic was held in quarantine because of sickness aboard. Rizal noticed that the valuable cargo of silk was moved ashore without delay.",
  "First-class passengers were then allowed to land, and he stayed at the Palace Hotel.",
  "He crossed the Rocky Mountains by train, passed through Chicago and Niagara Falls, and followed the Hudson from Albany.",
];

/* ---------- Visit today ---------- */
export interface Visit {
  place: string;
  kanji: string;
  text: string;
}

export const visits: Visit[] = [
  { place: "Hibiya Park, Tokyo", kanji: "日比谷", text: "A bust of Rizal stands on the former site of the Tokyo Hotel where he stayed in 1888. The Philippine Embassy holds commemorations there." },
  { place: "Yokohama waterfront", kanji: "横浜", text: "Where he landed and where he sailed. The port is still the best place to picture the arrival." },
  { place: "Nikko", kanji: "日光", text: "Shrines and cedar-lined paths north of Tokyo. Reported on his list of day trips." },
  { place: "Hakone", kanji: "箱根", text: "Hot springs, a mountain lake and views of Mount Fuji. Reported on his list of day trips." },
];

/* ---------- Quiz ---------- */
export interface Question {
  q: string;
  options: string[];
  answer: number;
  why: string;
}

export const quiz: Question[] = [
  {
    q: "How long did Rizal stay in Japan?",
    options: ["About 45 days", "About 4 months", "About 2 weeks"],
    answer: 0,
    why: "From 28 February to 13 April 1888 is 45 days.",
  },
  {
    q: "Where did Rizal live in Tokyo after the hotel?",
    options: ["A temple in Nikko", "The Spanish Legation", "A friend's farmhouse"],
    answer: 1,
    why: "He moved into the Spanish Legation, reported as 7 March.",
  },
  {
    q: "What did Rizal do when the Spanish minister offered him a job?",
    options: ["Accepted it", "Asked for more pay", "Declined it"],
    answer: 2,
    why: "Craig writes that he declined and continued his journey.",
  },
];

/* ---------- Sources ---------- */
export interface Source {
  label: string;
  url?: string;
  used: string;
}

export const sources: Source[] = [
  {
    label: "Craig, A. (1913). Lineage, Life and Labors of José Rizal, Philippine Patriot. Project Gutenberg ebook 6867.",
    url: "https://www.gutenberg.org/ebooks/6867",
    used: "Primary reference. Read directly. Source for everything tagged In a biography.",
  },
  {
    label: "Inquirer.net. Rizal impersonating a Japanese man.",
    url: "https://opinion.inquirer.net/?p=31017",
    used: "Cited in search results for the 45-day stay. The page itself could not be opened.",
  },
  {
    label: "Inquirer Lifestyle. Monuments and memorials to Jose Rizal around the world.",
    url: "https://lifestyle.inquirer.net/248798/monuments-memorials-jose-rizal-around-world/",
    used: "Cited in search results for the Hibiya Park bust at the Tokyo Hotel site. The page itself could not be opened.",
  },
  {
    label: "Philippine Embassy in Tokyo. Rizal commemoration page.",
    url: "https://tokyo.philembassy.net/?p=13129",
    used: "Cited in search results for yearly commemorations. Not opened.",
  },
  {
    label: "Rizal: Romantic Interlude in Japan, 1888 (student slides).",
    url: "https://www.slideshare.net/kenjiekris/chapter-12pptx-253826867",
    used: "Cross-check for dates (28 February, 7 March, 13 April), the excursions and O-Sei-San. Secondary, not scholarly.",
  },
];

export const furtherReading: string[] = [
  "Guerrero, L. M. (1963). The First Filipino: A Biography of José Rizal.",
  "Zaide, G. F., and Zaide, S. M. José Rizal: Life, Works and Writings.",
  "Philippine National Library. Rizal's diaries and letters.",
];

export interface Credit {
  what: string;
  who: string;
  licence: string;
}

export const credits: Credit[] = [
  { what: "Portrait of José Rizal", who: "Wikimedia Commons, Jose_Rizal_full.jpg", licence: "Public domain" },
  { what: "The Great Wave off Kanagawa", who: "Katsushika Hokusai, via Wikimedia Commons", licence: "Public domain" },
  { what: "Yokohama Foreign Settlement", who: "Kusakabe Kimbei, via Wikimedia Commons", licence: "Public domain" },
  { what: "View of Mount Fuji from the Hakone Mountains, 1878", who: "Kobayashi Kiyochika, Honolulu Museum of Art, via Wikimedia Commons", licence: "Public domain" },
  { what: "Yomei Mon (Great Gate) at Nikko", who: "1880s photograph, via Wikimedia Commons", licence: "No known restrictions" },
  { what: "Ginza in the 1880s", who: "Via Wikimedia Commons", licence: "Public domain" },
  { what: "Blank map of Japan (outline cropped and recoloured)", who: "Lincun, modified by Erida539, via Wikimedia Commons", licence: "CC BY-SA 3.0" },
];

export const peopleCredits: Credit[] = [
  { what: "Juan Pérez Caballero (photograph by Christian Franzen, printed in Nuevo Mundo)", who: "Via Wikimedia Commons, Juan_Pérez_Caballero,_de_Christian_Franzen.jpg", licence: "Public domain" },
  { what: "Tetchō Suehiro (portrait)", who: "Unknown author, via Wikimedia Commons, Suehiro_Tetcho.jpg", licence: "Public domain" },
  { what: "José Maria Basa (portrait)", who: "Via Wikimedia Commons, Jose_ma_basa_PG.jpg", licence: "Public domain" },
];

export const disclaimer =
  "Facts tagged Widely repeated come from later summaries. Check them against Guerrero or Zaide before you cite them in formal work.";
