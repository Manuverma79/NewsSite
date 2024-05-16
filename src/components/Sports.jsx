import Card from "./Card";

const Sports = ({ sportsList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
      {sportsList.map((data) => (
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

export default Sports;
