import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Edit = ({book}) => {
  const router = useRouter();

    const categories = [
        {
            name: 'Novel',
            id: 1
        },
        {
            name: 'Majalah',
            id: 2
        },
        {
            name: 'Biografi',
            id: 3
        },
        {
            name: 'Komik',
            id: 4
        },
        {
            name: 'Panduan',
            id: 5
        },
    ]

    const [formData, setFormData] = useState({
        isbn: book.isbn,
        title: book.title,
        categoryid: book.categoryid,
        author: book.author,
        price: book.price,
        stok: book.stok,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const data = {
            title: formData.title,
            categoryid: parseInt(formData.categoryid, 10),
            author: formData.author,
            price: parseInt(formData.price),
            stok: parseInt(formData.stok)
        }
        
        console.log('Submitted data:', data);

        try {
            const res = await axios.put(`http://localhost:8080/api/edit/${book.isbn}`, data)

            if(res.data.errors) {
                console.log('error nih')
            } else {
                router.push('/')
            }
        } catch (error) {
            console.error(error)
        }
    };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border-4 border-black-500/100 rounded-md shadow-2xl">
        <label htmlFor="street-address" className="block text-xl font-bold text-gray-700 py-2 text-center">
          Edit Buku
        </label>
      <div className="mb-6 mt-5">
        <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 py-2">
          ISBN
        </label>
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          disabled
          id="isbn"
          autoComplete="isbn"
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 py-2">
          Author
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          id="author"
          autoComplete="author"
          placeholder={book.author}
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 py-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          id="title"
          autoComplete="title"
          placeholder={book.title}
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
        <label htmlFor="categoryid" className="block text-sm font-medium text-gray-700 py-2">
          Category
        </label>
        <select name='categoryid' onChange={handleChange}>
                    <option value="">Pilih Kategori</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
        </select>
        <label htmlFor="prices" className="block text-sm font-medium text-gray-700 py-2">
          Price
        </label>
        <input
          type="number"
          step={0.01}
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          id="price"
          autoComplete="price"
          placeholder={book.price}
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
        <label htmlFor="stok" className="block text-sm font-medium text-gray-700 py-2">
          Stock
        </label>
        <input
          type="number"
          name="stok"
          value={formData.stok}
          onChange={handleChange}
          required
          id="stok"
          autoComplete="stok"
          placeholder={book.stok}
          className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Edit;

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
