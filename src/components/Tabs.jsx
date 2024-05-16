import { Link } from "react-router-dom";
const Tabs = () => {
  return (
    <div className="flex justify-center w-full bg-base-200">
      <div role="tablist" className="w-3/4 tabs tabs-lifted">
        <Link to="/" role="tab" className="tab focus:tab-active">
          Home
        </Link>
        <Link to="/sports" role="tab" className="tab focus:tab-active">
          Sports
        </Link>
        <Link to="/politics" role="tab" className="tab focus:tab-active">
          Politics
        </Link>
        <Link to="/science" role="tab" className="tab focus:tab-active">
          Science
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
