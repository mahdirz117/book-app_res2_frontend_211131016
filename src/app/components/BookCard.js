import Link from 'next/link';

const BookCard = ({ book }) => {
  const { title, author_name, first_publish_year, key, cover_i } = book;

  return (
    <Link href={`/book${key}`} passHref>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden cursor-pointer">
        <div className="h-56 bg-gray-200 flex items-center justify-center">
          {cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">No Image</span>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{author_name?.[0] || 'Unknown Author'}</p>
          <p className="text-xs text-gray-500 mt-1">Tahun Terbit: {first_publish_year || 'N/A'}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
