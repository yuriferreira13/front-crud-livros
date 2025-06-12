import BookManager from '../components/book/BookManager';

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-4xl font-bold text-center py-10">Biblioteca</h1>
      <BookManager />
    </div>
  );
}
