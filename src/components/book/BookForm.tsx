import Book from "@/data/model/Book";

export interface FormBookProps {
  book: Partial<Book>;
  cancelar: () => void;
}

export default function BookForm(props: FormBookProps){
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span>Titulo</span>
        <input type="text" value={props.book.title} className="input"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span>Autor</span>
          <input type="text" value={props.book.author} className="input"/>
        </div>
        <div className="flex flex-col gap-1">
          <span>Ano publicação</span>
          <input type="number" value={props.book.publishedYear} className="input"/>
        </div>
      </div>
      <div className="flex gap-2 w-2">
        <span>Lido?</span>
        <input type="checkbox" checked={props.book.isRead}/>
      </div>
      <div className="flex gap-2">
        <button className="botao azul">Salvar</button>
        <button className="botao cinza" onClick={props.cancelar}>Cancelar</button>
      </div>
    </div>
  )
}

/*import { useState } from 'react';

export default function BookForm({ book, onCancel, onSuccess }) {
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [publishedYear, setPublishedYear] = useState(book?.publishedYear || '');
  const [isRead, setIsRead] = useState(book?.isRead || false);
console.log('BookForm renderizou!');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode chamar a API para atualizar ou criar
    onSuccess();
  };

  return (
    <form className="bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-700">
      <h2 className="text-xl font-semibold">{book ? '✏️ Editar Livro' : '➕ Adicionar Livro'}</h2>
      <input className="w-full bg-zinc-800 text-white rounded px-4 py-2"
        value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <input className="w-full bg-zinc-800 text-white rounded px-4 py-2"
        value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" required />
      <input className="w-full bg-zinc-800 text-white rounded px-4 py-2"
        value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} placeholder="Ano de publicação" type="number" required />
      <label className="flex items-center space-x-2">
        <input type="checkbox" checked={isRead} onChange={(e) => setIsRead(e.target.checked)} />
        <span>Lido?</span>
      </label>
      <div className="flex gap-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">Salvar</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}*/
