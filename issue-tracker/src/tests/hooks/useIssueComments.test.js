import { QueryClient, QueryClientProvider } from "react-query";
import useIssueComments from "../../hooks/useIssueComments";
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
    const mockData = [
      { id: 1, comment: "Comment 1" },
      { id: 2, comment: "Comment 2" },
    ];

    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(() => useIssueComments(1), { wrapper });

    expect(result.current.status).toBe("loading");
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.status).toBe("success");
    expect(result.current.data).toEqual(mockData);
  });
});
