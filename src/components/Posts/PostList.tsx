import { useState, useEffect } from "react";
import usePostStore from "../../store/usePostStore";

type Post = {
  id: string;
  title: string;
  content: string;
};

const PostList = () => {
  const { posts, getPosts, createPost, updatePost, deletePost } = usePostStore();
  const [editPost, setEditPost] = useState<Post | null>(null);
  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, content } = formData;
    if (editPost) {
      updatePost({ ...editPost, title, content });
      setEditPost(null);
    } else {
      createPost({ title, content });
    }
    setFormData({ title: "", content: "" });
  };

  const handleEditClick = (post: Post) => {
    setEditPost(post);
    setFormData({ title: post.title, content: post.content });
  };

  const handleCancelClick = () => {
    setEditPost(null);
    setFormData({ title: "", content: "" });
  };

  const handleDelete=(id:string)=>{
    deletePost(id)
  }

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {editPost === post ? (
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Content"
              />
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => handleEditClick(post)}>Edit</button>
              <button onClick={()=>handleDelete(post.id)}>delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
