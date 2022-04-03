import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditPost = ({
  posts,
  editTitle,
  editBody,
  setEditTitle,
  setEditBody,
  handleEdit,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.info);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      <h1>Edit Notes</h1>
      {editTitle && (
        <>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">
              <b>Notes Title</b>
            </label>
            <input
              type="text"
              id="editTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
            <label htmlFor="editBody">
              <b>Notes</b>
            </label>
            <textarea
              id="editBody"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
            ></textarea>
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Edit Post
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>No post to display..</h2>
          <p>Try for another post!! </p>
          <p>
            <Link to="/">Visit our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
