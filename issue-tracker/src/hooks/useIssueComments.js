import { useQuery } from "react-query";

export default function useIssueComments(issueNumber) {
  return useQuery(["issues", issueNumber, "comments"], () => {
    return fetch(`/api/issues/${issueNumber}/comments`).then((res) =>
      res.json()
    );
  });
}
