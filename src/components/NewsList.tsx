import NewsItemo from "./A";
import DescriptionSection from "./DescriptionSection";

const NewsColumn = () => {
  const newsData = [
    {
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
      },
    },
    {
      articleLink: {
        href: "https://www.naughtydog.com/blog/another_announcement",
        backgroundImage:
          "https://s3.us-east-1.amazonaws.com/nd.images/uploads/Jordan_KeyArt_16x9-1.jpg",
        blogType: "Update",
        title: "Another Announcement From Naughty Dog",
      },
      textSection: {
        author: {
          name: "Haley Gross",
          profileLink: "/blog/authors/haley-gross/posts",
        },
        date: "December 15, 2024",
        articleTitle: "Another Announcement From Naughty Dog",
        summary: "Exciting news and updates from Naughty Dog.",
        readMoreLink: "https://www.naughtydog.com/blog/another_announcement",
      },
      arrowLink: {
        href: "https://www.naughtydog.com/blog/another_announcement",
      },
    },
    {
      articleLink: {
        href: "https://www.naughtydog.com/blog/another_announcement",
        backgroundImage:
          "https://s3.us-east-1.amazonaws.com/nd.images/uploads/Jordan_KeyArt_16x9-1.jpg",
        blogType: "Update",
        title: "Another Announcement From Naughty Dog",
      },
      textSection: {
        author: {
          name: "Haley Gross",
          profileLink: "/blog/authors/haley-gross/posts",
        },
        date: "December 15, 2024",
        articleTitle: "Another Announcement From Naughty Dog",
        summary: "Exciting news and updates from Naughty Dog.",
        readMoreLink: "https://www.naughtydog.com/blog/another_announcement",
      },
      arrowLink: {
        href: "https://www.naughtydog.com/blog/another_announcement",
      },
    },
  ];

  return (
    <section id="NewsColumn">
      <DescriptionSection title="News" subtitle="Updates" description="" />
      <div className="dark-background text-white flex flex-col items-center justify-center w-full">
        {newsData.map((item, index) => (
          <NewsItemo key={index} content={item} />
        ))}
      </div>
    </section>
  );
};

export default NewsColumn;
