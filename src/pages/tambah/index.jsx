import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const TambahBuku = () => {
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
        isbn: '',
        title: '',
        categoryid: null,
        author: '',
        price: null,
        stok: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const data = {
            isbn: formData.isbn,
            title: formData.title,
            categoryid: parseInt(formData.categoryid, 10),
            author: formData.author,
            price: parseInt(formData.price),
            stok: parseInt(formData.stok)
        }
        
        console.log('Submitted data:', data);

        try {
            const res = await axios.post('http://localhost:8080/api/tambah', data)

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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border-4 border-black-500/100 rounded-md shadow-2xl mt-10">
            <label htmlFor="street-address" className="block text-xl font-bold text-gray-700 py-2 text-center">
            Tambah Buku
            </label>
        <div className="mb-6 mt-5">
            <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 py-2">
            ISBN
            </label>
            <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
            id="street-address"
            autoComplete="street-address"
            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
            Author
            </label>
            <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            id="street-address"
            autoComplete="street-address"
            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
            Title
            </label>
            <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            id="street-address"
            autoComplete="street-address"
            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
            Category
            </label>
            <select name='categoryid' onChange={handleChange}>
                        <option value="">Pilih Kategori</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
            </select>
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
            Price
            </label>
            <input
            type="number"
            name="price"
            step={0.01}
            value={formData.price}
            onChange={handleChange}
            required
            id="street-address"
            autoComplete="street-address"
            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 py-2">
            Stock
            </label>
            <input
            type="number"
            name="stok"
            value={formData.stok}
            onChange={handleChange}
            required
            id="street-address"
            autoComplete="street-address"
            className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            </div>
            <div className='text-center'>
                <button onClick={handleSubmit} type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md">
                    Tambahkan Buku
                </button>
            </div>
        </form>
    );
};

export default TambahBuku;
