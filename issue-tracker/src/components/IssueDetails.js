import { useParams } from "react-router-dom";
import useIssueData from "../hooks/useIssueData";
import IssueHeader from "./IssueHeader";

export default function IssueDetails() {
  const { number } = useParams();
  const issueQuery = useIssueData(number);

  return (
    <div className="issue-details">
      {issueQuery.isLoading ? (
        <p>Loading issue</p>
      ) : (
        <>
          <IssueHeader {...issueQuery.data} />
        </>
      )}
    </div>
  );
}
