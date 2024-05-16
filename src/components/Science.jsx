import React from "react";
import Card from "./Card";

const Science = ({ scienceList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
      {scienceList.map((data) => (
        <Card
          key={data.title}
          title={data.title}
          description={data.description}
          image={data.image_url}
          link={data.link}
        ></Card>
      ))}
    </div>
  );
};

export default Science;
