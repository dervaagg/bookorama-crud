import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })
import { Table, TableHeader, TableBody, TableRow, TableCell, TableColumn } from '@nextui-org/react'

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/')
      .then((result) => {
        console.log(result.data)
        setBooks(result.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const deleteBook = (isbn) => {
      axios
        .delete(`http://localhost:8080/api/${isbn}`)
        .then((result) => {
          console.log(result.data)
          setBooks(result.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='max-w-full'>
        <Table>
          <TableHeader>
            <TableColumn className='text-center'>ISBN</TableColumn>
            <TableColumn className='text-center'>Title</TableColumn>
            <TableColumn className='text-center'>Category</TableColumn>
            <TableColumn className='text-center'>Author</TableColumn>
            <TableColumn className='text-center'>Price</TableColumn>
            <TableColumn className='text-center'>Stock</TableColumn>
            <TableColumn className='text-center'>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {Object.values(books).map((book) => (
              <TableRow key={book.id}>
                <TableCell className='text-center'>{book.isbn}</TableCell>
                <TableCell className='text-center'>{book.title}</TableCell>
                <TableCell className='text-center'>{book.name}</TableCell>
                <TableCell className='text-center'>{book.author}</TableCell>
                <TableCell className='text-center'>{book.price}</TableCell>
                <TableCell className='text-center'>{book.stok}</TableCell>
                <TableCell className='text-center'>
                  <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => deleteBook(book.isbn)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
