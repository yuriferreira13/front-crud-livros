import { handleApiError } from "./errorHandler";

const API_URL = "http://localhost:3000/books";

export const fetchBooks = async () => {
  const response = await fetch(API_URL);

  return await handleApiError(response);
};

export const createBook = async (book: {
  title: string;
  author: string;
  publishedYear: number;
  isRead: boolean;
}) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });

  return await handleApiError(response);
};

export const updateBook = async (
  book: {
    title?: string;
    author?: string;
    publishedYear?: number;
    isRead?: boolean;
  },
  id: number
) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });

  return await handleApiError(response);
};

export const deleteBook = async (id: number) => {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  });

  return await handleApiError(response);
};

export const updateReadStatus = async (id: number, isRead: boolean) => {
  const response = await fetch(
    `http://localhost:3000/books/${id}/read-status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isRead }),
    }
  );

  return await handleApiError(response);
};
