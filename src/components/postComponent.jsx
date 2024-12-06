import axios from "axios";
import React, { useEffect, useState } from "react";

const PostComponent = () => {
  const [postData, setPostData] = useState();
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(url)
      .then((responses) => {
        setPostData(responses.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(()=>{
      console.log(postData)
  },[postData])
  return (
    <div className="p-6">
      {postData?.slice(0, 10).map((post) => (
        <div className="my-4">
          <div className="userData border rounded-md p-4 shadow-md">
            <h3>{post.title}</h3>
            <hr />
            <p>
              {post.body}
            </p>
            <hr />
            <div className="flex">
              <button className="m-4">bookmark</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
