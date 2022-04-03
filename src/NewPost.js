const NewPost = ({
  postTitle,
  postBody,
  setPostTitle,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <main className="NewPost">
      <h1>NewNotes</h1>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">
          <b>Notes Title</b>
        </label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <label htmlFor="postBody">
          <b>Notes</b>
        </label>
        <textarea
          id="postBody"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
