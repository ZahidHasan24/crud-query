export const getAllBooks = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went wrong.");
  }
  return res.json();
};

export const removeBook = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(res.json().message);
  }
  return true;
};

export const createBook = async ({ ...data }) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(res.json().message);
  }

  return res.json();
};

export const getBook = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`);

  if (!res.ok) {
    throw new Error(res.json().message);
  }

  return res.json();
};

export const updateBook = async ({ id, ...data }) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(res.json().message);
  }

  return res.json();
};
