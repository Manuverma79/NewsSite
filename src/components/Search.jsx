import { useEffect, useState } from "react";
import api from "./api";
import Card from "./Card";

const Search = ({ keyword }) => {
  const [searchList, setSearchList] = useState([]);
  async function search(item) {
    // item = item.split(" ").join("OR");
    // console.log(item);
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${api()}&q=${item}`
    );
    const result = await response.json();
    console.log(searchList);
    setSearchList(result.results);
  }
  useEffect(() => {
    search();
  }, [keyword]);
  // console.log(list);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {searchList.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image_url}
            link={data.link}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Search;
