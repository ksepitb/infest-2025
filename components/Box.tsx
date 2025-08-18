import React from "react";

// Kalau ada inputan bold maka bisa pake Text1**Text2**Text3 maka text2 akan menjadi bold
const BoxComponent = ({ description, StyleInput } : {description : string, StyleInput : string}) => {

  const BOLD_REGEX = /\*\*(.*?)\*\*/g;

 
  const renderFormattedDescription = () => {
    if (!description) return null;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = BOLD_REGEX.exec(description)) !== null) {
      const boldContent = match[1]; 
      const matchStart = match.index;
      const matchEnd = match.index + match[0].length;

      if (matchStart > lastIndex) {
        parts.push(
          <span key={`normal-${lastIndex}`}>
            {description.substring(lastIndex, matchStart)}
          </span>
        );
      }
      parts.push(<strong key={`bold-${matchStart}`}>{boldContent}</strong>);

      lastIndex = matchEnd;
    }


    if (lastIndex < description.length) {
      parts.push(
        <span key={`normal-end`}>{description.substring(lastIndex)}</span>
      );
    }

    return parts;
  };

  return (

    <div className={StyleInput} data-aos="zoom-out">
     
      <p className="text-base leading-relaxed">
        {renderFormattedDescription()}
      </p>
    </div>
  );
};

export default BoxComponent;
