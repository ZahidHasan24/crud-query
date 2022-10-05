export const getAllBooks = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went wrong.");
  }
  return res.json();
};
