const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.62)}&q=80`;

const site = {
  name: "Akt Warszawski",
  domain: "akt.waw.pl",
  tagline: "Kronika miasta — decyzje, ulice, dzielnice i to, co zostaje w aktach codzienności",
  city: "Warszawa",
  address: "ul. Senatorska 27/4, 00-095 Warszawa",
  issue: "rocznik 2026",
  author: "Ada Borowska",
  authorBio: "Redaktorka miejska. Śledzi uchwały, remonty i życie dzielnic bez urzędowego żargonu.",
  authorRole: "Redakcja",
  authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1519197924295-bbaa1a1b4e5a", 1600),
  covers: {
    Śródmieście: u("photo-1520986606214-8b456906c813"),
    Praga: u("photo-1558618666-fcd25c85cd64"),
    Mokotów: u("photo-1449824913935-59a10b8d2000"),
    Wola: u("photo-1486406146926-c627a92ad1ab"),
    Transport: u("photo-1544620341-9adcce27b464"),
    default: u("photo-1519197924295-bbaa1a1b4e5a"),
  } as Record<string, string>,
  dzielnice: [
    { name: "Śródmieście", blurb: "Centrum decyzji, placów i remontów, które widać z okna tramwaju." },
    { name: "Praga", blurb: "Prawy brzeg — podwórka, neony i zmiany, które nie zaczynają się od folderu inwestora." },
    { name: "Mokotów", blurb: "Bloki, skwery i codzienność między Dolnym a Górnym." },
    { name: "Wola", blurb: "Biurowce obok kamienic — tempo miasta w jednym kadrze." },
    { name: "Transport", blurb: "Metro, tramwaj, parkingi — jak porusza się Warszawa." },
  ],
};

export function dzielnicaSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(dzielnica?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[dzielnica || ""] || site.covers.default;
}

export default site;
