import { Form, redirect } from "react-router-dom";
import "../routes/App.css";

const CreatePost = () => {
  return (
    <>
      <div className="formParent">
        <Form method="POST" className="formCont">
          <h1 className=" text-center ">CREATE POST</h1>
          <div className="mb-3 ">
            <label htmlFor="userId" className="form-label">
              User Id
            </label>
            <input
              name="userId"
              type="text"
              className="form-control"
              id="userId"
              placeholder="Enter your user Id!"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="What's in your mind?"
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              rows="4"
              type="text"
              className="form-control"
              id="body"
              name="body"
              placeholder="Just write here!"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="reactions" className="form-label">
              Reactions
            </label>
            <input
              type="text"
              className="form-control"
              id="reactions"
              name="reactions"
              placeholder="Enter the number of reactions!"
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              name="tags"
              placeholder="Enter the tags with space!"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </Form>
      </div>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
