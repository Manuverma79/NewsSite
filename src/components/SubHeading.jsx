import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SubHeading = ({ word }) => {
  const searchKeyword = useRef();
  // const [keyword, setKeyword] = useState("");
  const searchClicked = (event) => {
    try {
      const word = searchKeyword.current.value;
      // console.log(searchKeyword);
      return word;
    } catch (error) {
      return (word = "");
    }
    // setKeyword(word);
  };
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-2xl uppercase font-heading font-normal tracking-[0.14em]">
            news that keeps you up to date!
          </h1>
          <label className="flex items-center gap-2 m-3 input input-bordered">
            <input
              ref={searchKeyword}
              type="text"
              className="grow"
              placeholder="Search: Eg. Weather"
            />
            <button
              onClick={() => {
                word(searchClicked);
              }}
              className="btn btn-sm bg-neutral"
            >
              <Link to="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
