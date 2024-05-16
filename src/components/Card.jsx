import React from "react";

const truncate = (inputText) => {
  if (inputText == null) {
    return inputText;
  }
  return inputText.length > 150
    ? inputText.substring(0, 149) + "..."
    : inputText;
};

const Card = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      className="w-1/2 m-10 shadow-xl max-h-96 card card-compact bg-neutral"
    >
      <figure className="w-full h-full">
        <img src={image} className="object-contain" alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary hover:underline">{title}</h2>
        <p className="text-wrap">{truncate(description)}</p>
      </div>
    </a>
  );
};

export default Card;
