const API_URL = "http://localhost:3000/books";

export const fetchBooks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Erro ao buscar os livros");
  }
  return response.json();
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

  if (!response.ok) {
    throw new Error("Erro ao criar o livro");
  }
  return response.json();
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

  if (!response.ok) {
    throw new Error("Erro ao atualizar o livro");
  }
  return response.json();
};

export const deleteBook = async (id: number) => {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar o livro");
  }

  return response.json();
};

export const updateReadStatus = async (id: number, isRead: boolean) => {
  try {
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

    if (!response.ok) {
      throw new Error("Erro ao atualizar status de leitura");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
