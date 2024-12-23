import React from "react";

interface DescriptionSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="mb-10 text-center">
      <h3 className="text-gray-200 text-lg font-semibold uppercase">
        {subtitle}
      </h3>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      {description && (
        <p className="text-lg font-normal text-gray-400 mx-auto w-full px-4 lg:w-1/2 py-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default DescriptionSection;
