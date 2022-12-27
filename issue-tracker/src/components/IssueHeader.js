import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { possibleStatus } from "../helpers/defaultData";
import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../hooks/useUserData";

export default function IssueHeader({
  title,
  number,
  status = "todo",
  createdBy,
  createdDate,
  comments,
}) {
  const statusItem = possibleStatus.find(
    (statusObj) => statusObj.id === status
  );
  const user = useUserData(createdBy);

  return (
    <header>
      <h2>
        {" "}
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span
          className={
            status === "done" || status === "cancelled" ? "closed" : "open"
          }
        >
          {status === "done" || status === "cancelled" ? (
            <GoIssueClosed />
          ) : (
            <GoIssueOpened />
          )}
          {statusItem.label}
        </span>
        <span className="created-by">
          {user.isLoading ? "..." : user.data?.name}
        </span>{" "}
        opened this issue {relativeDate(createdDate)} · {comments.length}{" "}
        comments
      </div>
    </header>
  );
}
