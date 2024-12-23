"use client";

import React from "react";

const NewsItemo = ({ content }) => {
  return (
    <article className="news-item flex flex-col md:flex-row gap-6 my-12 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-900 max-w-[860px] w-full">
      {/* Article Link */}
      <a
        href={content.articleLink.href}
        className="block relative w-full md:w-6/12 lg:w-7/12 order-1 md:order-1"
      >
        {/* Blog Type */}
        <div className="blog-type absolute top-2 left-4 text-sm font-semibold text-white bg-gray-800 py-1 px-2 rounded-lg opacity-75">
          {content.articleLink.blogType}
        </div>
        {/* Background Image */}
        <div
          className="bg-image bg-cover bg-center rounded-lg overflow-hidden w-full h-0 pb-[56.25%] mt-2 transition-all duration-300 ease-in-out hover:bg-[url('https://s3.us-east-1.amazonaws.com/nd.images/uploads/Jordan_KeyArt_16x9-1.jpg')] hover:bg-right hover:bg-no-repeat"
          style={{
            backgroundImage: `url(${content.articleLink.backgroundImage})`,
          }}
          title={content.articleLink.title}
        ></div>
      </a>

      {/* Text Section */}
      <div className="entry_txt flex flex-col justify-center text-white mt-4 md:mt-0 md:w-6/12 lg:w-5/12 order-2 md:order-2 px-4 transition-all duration-300 ease-in-out hover:text-gray-400">
        {/* Author */}
        <a
          className="author text-sm font-medium text-white hover:text-gray-400"
          href={content.textSection.author.profileLink}
          title="View author's posts"
        >
          {content.textSection.author.name} /
        </a>
        {/* Date */}
        <div className="date text-xs text-gray-400 my-2">
          {content.textSection.date}
        </div>
        {/* Article Title and Link */}
        <a
          href={content.textSection.readMoreLink}
          className="hover:text-gray-400"
        >
          <h3 className="text-2xl font-bold mb-2 leading-tight">
            {content.textSection.articleTitle}
          </h3>
          <p className="summary text-sm text-gray-300 mb-4">
            {content.textSection.summary}
          </p>
        </a>
      </div>

      {/* Arrow Link */}
      <div className="arrow-link order-3 mt-4 md:mt-0 transition-all duration-300 ease-in-out hover:scale-110">
        <a href={content.arrowLink.href} className="inline-block text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 transition-all duration-200 transform hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default NewsItemo;
