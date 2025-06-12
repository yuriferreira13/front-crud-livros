"use client";
import { useState, useEffect } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import Book from "../../data/model/Book";
import {
  fetchBooks,
  deleteBook,
  createBook,
  updateBook,
  updateReadStatus,
} from "../../services/bookService";

export default function BookManager() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookSelected, setBookSelected] = useState<Partial<Book> | null>(null);

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((err) => console.error(err));
  }, []);

  async function salvarBook() {
    if (!bookSelected) return;

    const bookExistente = books.find((b) => b.id === bookSelected?.id);

    try {
      if (bookExistente) {
        if (bookSelected?.id !== undefined) {
          await updateBook(
            {
              title: bookSelected.title,
              author: bookSelected.author,
              publishedYear: bookSelected.publishedYear,
              isRead: bookSelected.isRead,
            },
            bookSelected.id
          );
        } else {
          console.error("Erro: ID do livro está indefinido.");
        }
      } else {
        await createBook(bookSelected as Book);
      }

      const updatedBooks = await fetchBooks();
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Erro ao salvar livro:", error);
    }

    setBookSelected(null);
  }

  function selecionarBook(book: Partial<Book>) {
    setBookSelected(book);
  }
  function cancelar() {
    setBookSelected(null);
  }

  const alterarStatusLeitura = async (id: number, isRead: boolean) => {
    try {
      await updateReadStatus(id, isRead);
      const updatedBooks = await fetchBooks();
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Erro ao atualizar status de leitura:", error);
    }
  };

  async function removerBook(book: Book) {
    try {
      await deleteBook(book.id);
      const todosMenosBookInformado = books.filter((u) => u.id !== book.id);
      setBooks(todosMenosBookInformado);
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  }

  return (
    <div className="flex flex-col mx-100 gap-5">
      <button
        className="botao verde self-end"
        onClick={() => selecionarBook({})}
      >
        Novo Livro
      </button>
      {bookSelected ? (
        <BookForm
          book={bookSelected}
          cancelar={cancelar}
          alterarBook={setBookSelected}
          salvar={salvarBook}
        />
      ) : (
        <BookList
          books={books}
          removerBook={removerBook}
          selecionarBook={selecionarBook}
          alterarStatusLeitura={alterarStatusLeitura}
        />
      )}
    </div>
  );
}
