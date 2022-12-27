import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../hooks/useUserData";

export default function Comment({ comment, createdBy, createDate }) {
  const user = useUserData(createdBy);

  if (user.isLoading) {
    return (
      <div className="comment">
        <div>
          <div className="comment-header">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="comment">
      <img src={user.data.profilePictureUrl} alt="Commenter Avatar" />
      <div>
        <div className="comment-header">
          <span>{user.data.name}</span>
          <span>{relativeDate(createDate)}</span>
        </div>
        <div className="comment-body">{comment}</div>
      </div>
    </div>
  );
}
