import { useEffect, useState } from "react";
import { getBlogAllComments } from "../../api/commentService";
import CommentCard from "./CommentCard";

const Comments = ({ blogId, refresh }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    getBlogAllComments(blogId).then((blogComments) =>
      setComments(blogComments)
    );
  }, [refresh]);
  return (
    <div className="text-white px-4 my-8">
      {comments?.map((comment) => (
        <div key={comment.id} className="my-8">
          <CommentCard {...comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
