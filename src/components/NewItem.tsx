import Link from "next/link";
import NextImage from "next/image";

interface NewsItemProps {
  href: string;
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  summary: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  href,
  imageUrl,
  title,
  author,
  date,
  summary,
}) => {
  return (
    <div className="news-item flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <NextImage
        src={imageUrl}
        alt={title}
        width={1920}
        height={1080}
        className="media-wrapper flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
      />

      {/* Text Content */}
      <div className="entry-text p-4 md:p-6 flex flex-col justify-between w-full md:w-1/2 items-center justify-center my-auto">
        <div>
          <Link
            href={`/blog/authors/${author
              .toLowerCase()
              .replace(/\s+/g, "-")}/posts`}
            className="text-sm font-medium text-gray-600 hover:text-red-500"
          >
            {author}
          </Link>
          <div className="date text-xs text-gray-500">{date}</div>
          <Link href={href}>
            <h3 className="text-lg font-bold text-gray-800 mt-2 hover:text-red-500">
              {title}
            </h3>
            <p className="summary text-sm text-gray-600 mt-2">{summary}</p>
          </Link>
          <Link
            href={href}
            className="arrow-link mt-4 self-start text-red-500 hover:text-red-700 flex items-center"
          >
            <img
              src="/assets/images/openings-arrow-up-red.svg"
              alt="Read more"
              className="w-4 h-4 inline-block mr-2"
            />
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
