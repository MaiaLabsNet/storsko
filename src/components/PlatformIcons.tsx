import Image from "next/image";
import DescriptionSection from "./DescriptionSection";
import DownloadButtons from "./DownloadButtons";

const platforms = [
  { id: 1, name: "Android", icon: "/icons/android-icon.svg" },
  { id: 2, name: "Apple", icon: "/icons/apple-icon.svg" },
  { id: 3, name: "Windows", icon: "/icons/windows-icon.svg" },
  { id: 4, name: "Linux", icon: "/icons/linux-icon.svg" },
  { id: 5, name: "PlayStation", icon: "/icons/playstation-icon.svg" },
  { id: 6, name: "Nintendo Switch", icon: "/icons/switch-icon.svg" },
  { id: 7, name: "Xbox", icon: "/icons/xbox-icon.svg" },
];

export default function PlatformIcons() {
  return (
    <section id="Platforms">
      <div className="dark-background text-white flex flex-col items-center justify-center w-full my-8">
        <DescriptionSection
          title="Alle Downloads"
          subtitle="Platformen"
          description=""
        />
        <div>
          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-8 bg-gray max-w-screen-lg mx-auto">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="max-h-16 max-w-16 w-20 h-20 p-4 bg-white rounded-full flex items-center justify-center"
              >
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={32}
                  height={32}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <DownloadButtons />
    </section>
  );
}
