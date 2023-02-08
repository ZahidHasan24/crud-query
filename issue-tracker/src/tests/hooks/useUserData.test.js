import { QueryClient, QueryClientProvider } from "react-query";
import useUserData from "../../hooks/useUserData";
import { renderHook, waitFor } from "@testing-library/react";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useLabelsData", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it("should return data on success", async () => {
    const mockData = {
      id: "1",
      name: "mockUser",
      profilePictureUrl: "mockUrl",
    };

    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(({ userId }) => useUserData(userId), {
      initialProps: { userId: 1 },
      wrapper,
    });

    expect(result.current.status).toBe("loading");
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.status).toBe("success");
    expect(result.current.data).toEqual(mockData);
  });

  it("should not run the query when userId is not provided", async () => {
    const { result } = renderHook(({ userId }) => useUserData(userId), {
      initialProps: { userId: "" },
      wrapper,
    });
    expect(result.current.status).toBe("idle");
    expect(window.fetch).not.toHaveBeenCalled();
  });
});
