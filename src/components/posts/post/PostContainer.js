
import Media from "./Media";
import EmbedGal from "../../../features/embedGal/EmbedGal";
import PostMenu from "./menu/PostMenu";

const PostContainer = ({ post, postIndex }) => {
  const className = `post-container ${
    post.isGallery
      ? "gallery"
      : post.isLocalVideo || post.isYoutubeVideo
      ? "video"
      : ""
  }`;
  return (
    <div className={className}>
      {!post.isGallery ? (
        <Media post={post} />
      ) : post.isGallery && post.gallery ? (
        <EmbedGal post={post} />
      ) : (
        ""
      )}
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
