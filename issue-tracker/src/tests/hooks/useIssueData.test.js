import { QueryClient, QueryClientProvider } from "react-query";
import useIssueData from "../../hooks/useIssueData";
import { renderHook, waitFor } from "@testing-library/react";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useIssueComments", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it("should return data on success", async () => {
    const mockData = {
      assignee: "1",
      comments: ["1"],
      completedDate: null,
      createdBy: "1",
      id: "1",
      labels: ["duplicate"],
      number: 1,
      status: "todo",
      title: "some text",
    };

    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(() => useIssueData(1), { wrapper });

    expect(result.current.status).toBe("loading");
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.status).toBe("success");
    expect(result.current.data).toEqual(mockData);
  });
});
