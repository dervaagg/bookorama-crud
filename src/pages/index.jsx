import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })
import { Table, TableHeader, TableBody, TableRow, TableCell, TableColumn } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const [books, setBooks] = useState([])
  const router = useRouter()

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

    const deleteBook = async (isbn) => {
      try {
        const res = await axios.delete(`http://localhost:8080/api/${isbn}`)
        
        if(res.data.errors){
          console.log('gagal nih!')
        } else {
          console.log('berhasil nih!')
          router.push('/')
        }
      } catch (error) {
        console.error(error)
      }  
    }

  return (
    <main
      className={`flex max-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p className='text-xl font-bold'>Bookorama</p>
      <div className='max-w-full text-end'>
        <button className='bg-green-500 hover:bg-green-700 rounded text-white font-bold py-2 px-4 mb-3'>
          <Link href='/tambah'>Tambah</Link>
        </button>
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
              <TableRow key={book.isbn}>
                <TableCell className='text-center'>{book.isbn}</TableCell>
                <TableCell className='text-center'>{book.title}</TableCell>
                <TableCell className='text-center'>{book.name}</TableCell>
                <TableCell className='text-center'>{book.author}</TableCell>
                <TableCell className='text-center'>{book.price}</TableCell>
                <TableCell className='text-center'>{book.stok}</TableCell>
                <TableCell className='text-center'>
                  <div className='flex gap-3'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gap-3'>
                      <Link href={'/detail/[book.isbn]'} as={`/detail/${book.isbn}`}>
                        Detail
                      </Link>
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded gap-3'
                      onClick={() => deleteBook(book.isbn)}
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
