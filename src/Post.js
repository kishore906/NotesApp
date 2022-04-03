import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <p className="postBody">
        {post.info <= 25 ? post.info : `${post.info.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
