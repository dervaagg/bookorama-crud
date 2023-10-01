import { Card, CardBody, Table } from "@nextui-org/react"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState, useParams } from "react"
import {  TableBody, TableRow, TableCell } from "@nextui-org/react"

const Detail = ({ book }) => {

    return (
            <div className="flex flex-col gap-3 justify-center items-center mt-10">
                <h1>Detail Book</h1>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>ISBN</TableCell>
                            <TableCell>{book.isbn}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
    )
}

export async function getServerSideProps(context) {
    const { isbn } = context.query
    const res = await fetch(`http://localhost:8080/api/detail/${isbn}`)
    const book = await res.json()

    return {
        props: {
            book
        }
    }
}

export default Detail