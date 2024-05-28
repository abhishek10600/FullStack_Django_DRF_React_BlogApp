import moment from "moment";

const CommentCard = ({ id, author, description, created_at }) => {
  return (
    <div className="">
      <div className="flex gap-3">
        <p className="md:text-sm">@{author}</p>
        <p className="text-gray-500 md:text-sm">
          {moment(created_at).calendar()}
        </p>
      </div>
      <p className="">{description}</p>
    </div>
  );
};

export default CommentCard;
