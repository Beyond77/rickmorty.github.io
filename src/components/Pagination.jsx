import { useDispatch } from "react-redux";
import { decrementPage, incrementPage } from "../store/slices/rickmorty";

const Pagination = ({ page }) => {

  const dispatch = useDispatch();

  return (
    <div className="buttons-container">
      <button onClick={() => dispatch(decrementPage())}> &lt; </button>
      <div>{ page }</div>
      <button onClick={() => dispatch(incrementPage())}> &gt; </button>
    </div>
  );
};

export default Pagination;
