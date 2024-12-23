import NewsItemo from "@/components/A";
import AboutMaiaLabs from "@/components/AboutMaiaLabs";
import ContactForm from "@/components/ContactForm";
import FunctionalView from "@/components/FunctionalView";
import Hero from "@/components/F";
import IconTextRow from "@/components/IconTextRow";
import NewsItem from "@/components/NewItem";
import NewsColumn from "@/components/NewsList";
import NewsUpdates from "@/components/Newsupdates";
import PlatformIcons from "@/components/PlatformIcons";
import SocialMediaSection from "@/components/SocialMediaSection";
import TrailerSection from "@/components/TrailerSection";

const content = {
  articleLink: {
    href: "https://www.naughtydog.com/blog/intergalactic_the_heretic_prophet_announcement",
    backgroundImage:
      "https://s3.us-east-1.amazonaws.com/nd.images/uploads/Jordan_KeyArt_16x9-1.jpg",
    blogType: "News",
    title:
      "Announcing Intergalactic: The Heretic Prophet, a New Franchise From Naughty Dog",
  },
  textSection: {
    author: {
      name: "Neil Druckmann",
      profileLink: "/blog/authors/neil-druckmann/posts",
    },
    date: "December 12, 2024",
    articleTitle:
      "Announcing Intergalactic: The Heretic Prophet, a New Franchise From Naughty Dog",
    summary:
      "Explore a whole new world from the studio behind The Last of Us, Uncharted and more.",
    readMoreLink:
      "https://www.naughtydog.com/blog/intergalactic_the_heretic_prophet_announcement",
  },
  arrowLink: {
    href: "https://www.naughtydog.com/blog/intergalactic_the_heretic_prophet_announcement",
    iconSrc: "/assets/images/openings-arrow-up-red.svg",
    iconAlt: "Read more",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsUpdates />
      <FunctionalView />
      <TrailerSection />
      <PlatformIcons />
      
      <div className="p-4 space-y-6">
        <NewsItem
          href="https://www.naughtydog.com/blog/celebrating_the_10th_anniversary_of_the_last_of_us"
          imageUrl="/image/witcher.jpg"
          title="Celebrating the 10th Anniversary of The Last of Us"
          author="Naughty Dog"
          date="June 14, 2023"
          summary="Members of the development team for the original The Last of Us look back on lessons learned, favorite memories..."
        />
      </div>
      <NewsColumn />
      {/* <IconTextRow
        icon="/icons/company.svg"
        text="This is another row with a different icon."
      />
      <IconTextRow
        icon="/icons/company.svg"
        text="This is another row with a different icon."
      />
      // */}
      {/* <DeveloperCarousel /> */}
      {/* <section id="Goal">
        <Skills />
      </section> */}
      {/* <section id="Timeline">
        <Timeline />
      </section> */}
      {/* <section id="Projects">
        <Projects />
      </section> */}
      {/* <SocialMediaSection /> */}
      {/* <AboutMaiaLabs /> */}
      {/* <ContactForm /> */}
    </main>
  );
}
