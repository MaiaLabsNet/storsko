import Image from "next/image";
import DescriptionSection from "./DescriptionSection";

const newsData = [
  {
    id: 1,
    title: "Minecraft Dungeons passes 25 million players",
    description: "A heartfelt 'Thank you!' from the team",
    imageUrl: "/news/4.jpg", // Replace with your actual image path
    tag: "News",
  },
  {
    id: 2,
    title: "A towering challenge",
    description: "Tackling Minecraft Dungeon's latest feature!",
    imageUrl: "/news/3.jpg",
    tag: "Deep Dive",
  },
  {
    id: 3,
    title: "Toppling the Treetop Tangle",
    description: "Conquer a unique jungle mission in Minecraft Dungeons!",
    imageUrl: "/news/2.jpg",
    tag: "Deep Dive",
  },
  {
    id: 4,
    title: "Play Dungeons for free on PS+",
    description: "Download it free in March and keep it forever!",
    imageUrl: "/news/1.jpg",
    tag: "News",
  },
];

export default function NewsUpdates() {
  return (
    <section id="News">
      <div className="text-white p-6 mt-16 w-[80%] mx-auto">
        <DescriptionSection
          title="Neuerungen"
          subtitle="Aktuelles"
          description="Dank unserer regelmäßigen Updates kannst du neue Werkzeuge, Orte und Räume erkunden. Schau dir das neueste Update an."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-black rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-40">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-yellow-400 text-purple-900 text-xs font-semibold px-2 py-1 rounded mb-2">
                  {news.tag}
                </span>
                <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-300">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-6 inline-block font-bold hover:underline"
        >
          Alle Neuigkeiten anzeigen »
        </a>
      </div>
    </section>
  );
}
