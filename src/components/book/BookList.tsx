"use client";
import Book from "@/data/model/Book";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListBooksProps {
  books: Book[];
  selecionarBook: (book: Book) => void;
  removerBook: (book: Book) => void;
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
      {props.books.map((book) => {
        return <li key={book.id}>{renderBook(book)}</li>;
      })}
    </ul>
  );
}
/*"use client";
import { useState } from 'react';

export default function BookList({ books, alterarBook, removerBook  }) {
  const [filteredBooks, setFilteredBooks] = useState<Book[] | null>(null); // 🔥 Renomeado!

  const [error, setError] = useState('');
console.log('Booklist renderizou!');

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-lg shadow-md border border-zinc-700">
      <h2 className="text-2xl font-semibold mb-4">📚 Livros Cadastrados</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg flex justify-between items-center">
            <div className='flex-1'>
              <span className="font-bold text-lg text-white">{book.title}</span> — {book.author} ({book.publishedYear})
            </div>
            <button
              onClick={() => alterarBook(book)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Editar
            </button>
            <button onClick={() => removerBook(book.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Excluir
              </button>

          </li>
        ))}
      </ul>
    </div>
  );
}*/
