import { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import SubHeading from "./components/SubHeading";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Sports from "./components/Sports";
import Tabs from "./components/Tabs";
import Politics from "./components/Politics";
import Science from "./components/Science";
import api from "./components/api";

export default function App() {
  const [newsList, setNewsListState] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [sportsList, setSportsListState] = useState([]);
  const [politicsList, setPoliticsListState] = useState([]);
  const [scienceList, setScienceListState] = useState([]);

  async function fetchNewsSports() {
    const sportsResponse = await fetch(
      `https://newsdata.io/api/1/news?apikey=${api()}&category=sports`
    );
    const sportsResult = await sportsResponse.json();
    setSportsListState(sportsResult.results);

    const politicsResponse = await fetch(
      `https://newsdata.io/api/1/news?apikey=${api()}&category=politics`
    );
    const politicsResult = await politicsResponse.json();
    setPoliticsListState(politicsResult.results);

    const scienceResponse = await fetch(
      `https://newsdata.io/api/1/news?apikey=${api()}&category=science`
    );
    const scienceResult = await scienceResponse.json();
    setScienceListState(scienceResult.results);
  }

  useEffect(() => {
    fetchNewsSports();
  }, []);

  async function fetchNews() {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${api()}${
        nextPage === null ? "" : `&page=${nextPage}`
      }`
    );
    const result = await response.json();
    setNextPage(result.nextPage);
    setNewsListState((prevData) => [...prevData, ...result.results]);
  }

  useEffect(() => {
    fetchNews();
  }, [pageCount]);

  return (
    <Router>
      <Header></Header>
      <SubHeading word={setKeyword}></SubHeading>
      <Tabs></Tabs>
      <Routes>
        <Route
          path="/"
          element={
            <CardGrid
              pc={pageCount}
              spc={setPageCount}
              newsList={newsList}
            ></CardGrid>
          }
        />
        <Route path="/search" element={<Search keyword={keyword} />} />
        <Route path="/sports" element={<Sports sportsList={sportsList} />} />
        <Route
          path="/politics"
          element={<Politics politicsList={politicsList} />}
        />
        <Route
          path="/science"
          element={<Science scienceList={scienceList} />}
        />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
