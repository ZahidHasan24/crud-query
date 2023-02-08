import { QueryClient, QueryClientProvider } from "react-query";
import useLabelsData from "../../hooks/useLabelsData";
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
    const mockData = [{ color: "red", id: "bug", name: "bug" }];

    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(() => useLabelsData(), { wrapper });

    expect(result.current.status).toBe("loading");
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.status).toBe("success");
    expect(result.current.data).toEqual(mockData);
  });
});
