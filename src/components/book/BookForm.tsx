import { useEffect } from "react";
import Book from "@/data/model/Book";

export interface FormBookProps {
  book: Partial<Book>;
  alterarBook: (book: Partial<Book>) => void;
  cancelar: () => void;
  salvar: () => void;
}

export default function BookForm(props: FormBookProps) {
  const { book, cancelar, alterarBook, salvar } = props;

  useEffect(() => {
    if (book.isRead === undefined) {
      alterarBook({ ...book, isRead: false });
    }
  }, [book, alterarBook]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span>Titulo</span>
        <input
          type="text"
          value={book.title ?? ""}
          className="input"
          onChange={(e) => alterarBook({ ...book, title: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span>Autor</span>
          <input
            type="text"
            value={book.author ?? ""}
            className="input"
            onChange={(e) => alterarBook({ ...book, author: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Ano publicação</span>
          <input
            type="number"
            value={book.publishedYear ?? ""}
            className="input"
            onChange={(e) =>
              alterarBook({
                ...book,
                publishedYear: Number(e.target.value) || 0,
              })
            }
          />
        </div>
      </div>
      <div className="flex gap-2 w-2">
        <span>Lido?</span>
        <input
          type="checkbox"
          checked={Boolean(book?.isRead)}
          onChange={(e) =>
            alterarBook({ ...book, isRead: e.target.checked ?? false })
          }
        />
      </div>
      <div className="flex gap-2">
        <button className="botao azul" onClick={salvar}>
          Salvar
        </button>
        <button className="botao cinza" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
