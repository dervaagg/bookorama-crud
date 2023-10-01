import axios from "axios"
import Link from "next/link"

const Detail = ({ book }) => {

    return (
        <form className="max-w-md mx-auto p-6 border-4 border-black-500/100 rounded-md shadow-2xl mt-10">
            <label className="block text- font-boboldt-gray-700 py-2 text-center">
                Detail Buku
            </label>
            <div className="mb-6 mt-5">
                <label className="block text-sm font-bold text-gray-700 py-2">
                    ISBN
                </label>
                <p>{book.isbn}</p>
                <label className="block text-sm font-bold text-gray-700 py-2">
                    Author
                </label>
                <p>{book.author}</p>
                <label className="block text-sm font-bold text-gray-700 py-2">
                    Title
                </label>
                <p>{book.title}</p>
                <label className="block text-sm font-bold text-gray-700 py-2">
                    Category
                </label>
                <p>{book.name}</p>
                <label className="block text-sm font-bold text-gray-700 py-2">
                    Price
                </label>
                <p>{book.price}</p>
                <label className="block text-sm font-bold text-gray-700 py-2">
                    Stock
                </label>
                <p>{book.stok}</p>
            </div>
            <div className="flex justify-between">
                <div className="text-start">
                    <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
                    >
                        <Link href={"/"}>
                            Back
                        </Link>
                    </button>
                </div>
                <div className="text-end">
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
                        >
                        <Link href={'/edit/[book.isbn]'} as={`/edit/${book.isbn}`}>
                            Edit
                        </Link>
                    </button>
                </div>
            </div>
        </form>
    )
}

export async function getServerSideProps(context) {
    const { isbn } = context.query
    const res = await axios.get(`http://localhost:8080/api/detail/${isbn}`)
    const book = res.data

    return {
        props: {
            book
        }
    }
}

export default Detail