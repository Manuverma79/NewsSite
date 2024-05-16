import React from "react";
import Card from "./Card";

const CardGrid = ({ newsList, pc, spc }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {newsList.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image_url}
            link={data.link}
          ></Card>
          // <Card />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button onClick={() => spc(pc + 1)} className="btn btn-active btn-link">
          More
        </button>
      </div>
    </>
  );
};

export default CardGrid;
