"use client";
import Book from "@/data/model/Book";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListBooksProps {
  books: Book[];
  selecionarBook: (book: Book) => void;
  removerBook: (book: Book) => void;
  alterarStatusLeitura: (id: number, isRead: boolean) => void;
}

export default function BookList(props: ListBooksProps) {
  function renderBook(book: Book) {
    return (
      <div className="flex items-center px-6 py-3 rounded-md bg-zinc-900">
        <div className="flex-1 flex flex-col">
          <span className="font-semibold ">{book.title}</span>
          <span className="text-sm text-zinc-400">{book.author}</span>
        </div>
        <div className="flex gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className={book.isRead ? "text-green-500" : "text-gray-400"}>
              {book.isRead ? "Lido" : "Não lido"}
            </span>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={book.isRead}
              onChange={() => props.alterarStatusLeitura(book.id, !book.isRead)}
            />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-green-500 transition"></div>
          </label>

          <button
            className="botao azul"
            onClick={() => props.selecionarBook(book)}
          >
            <IconEdit />
          </button>
          <button
            className="botao vermelho"
            onClick={() => props.removerBook(book)}
          >
            <IconTrash />
          </button>
        </div>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {props.books.map((book, index) => {
        return <li key={book.id || `temp-${index}`}>{renderBook(book)}</li>;
      })}
    </ul>
  );
}
