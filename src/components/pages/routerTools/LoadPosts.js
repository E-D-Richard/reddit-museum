import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeGenre,
  fetchRedditInfo,
} from "../../../features/apiRequests/redditApiRequestSlice";
import { capitalizeFirstCharacter } from "../../../utils/helperFunctions";
import { genresObject } from "../../../utils/helperObjects";
import Posts from "../../posts/Posts";
import NotFound from "../notFound/NotFound";

const LoadPosts = ({category, subCategory}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const contextObj = useOutletContext();
  const genreName = id ? id : "";
  // const genreName = id ? id : "ai";
  const genrePath = genresObject[genreName.toLowerCase()]
    ? genresObject[genreName.toLowerCase()].path
    : false;
  //console.log(genrePath);
  useEffect(() => {
    if (genrePath) {
      dispatch(fetchRedditInfo(genrePath));
      dispatch(changeGenre({ genreName: genreName, path: genrePath }));
    }
  });
  return (
    <main className="posts-section">
      {/* <h3>id = {id}</h3> */}
      {genrePath ? (
        <>
          <h1 className="category-name">{capitalizeFirstCharacter(category)}</h1>
          <Posts />
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default LoadPosts;