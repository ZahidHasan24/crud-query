import { useQuery } from "react-query";

export default function useIssueData(issueNumber) {
  return useQuery(["issues", issueNumber], () => {
    return fetch(`/api/issues/${issueNumber}`).then((res) => res.json());
  });
}
