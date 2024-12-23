import Image from "next/image";
import DescriptionSection from "./DescriptionSection";
import DownloadButtons from "./DownloadButtons";

export default function InformationSection() {
  return (
    <section id="Information">
      <div className="dark-background text-white flex flex-col items-center justify-center w-full my-8">
      <DescriptionSection
          title="Information"
          subtitle="More Details"
          description=""
        />

      </div>
    </section>
  );
}
