"use client";
import { useState, useEffect } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import Book from "../../data/model/Book";
import { fetchBooks, deleteBook } from "../../services/bookService";

export default function BookManager() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookSelected, setBookSelected] = useState<Partial<Book> | null>(null);

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((err) => console.error(err));
  }, []);

  // const selecionarBook = (selectedBook) => {
  //   setBookSelected(selectedBook);
  // };
  function selecionarBook(book: Partial<Book>) {
    setBookSelected(book);
  }
  function cancelar(){
    setBookSelected(null);
  }

  async function removerBook(book: Book) {
    console.log(`Tentando deletar o livro com ID: ${book.id}`);
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
      
      <button className="botao verde self-end" onClick={() =>selecionarBook({})}>Novo Livro</button>
      {bookSelected ? (
        <BookForm book={bookSelected} cancelar={cancelar}/>
      ) : (
        <BookList
          books={books}
          removerBook={removerBook}
          selecionarBook={selecionarBook}
        />
      )}
    </div>
  );
}
