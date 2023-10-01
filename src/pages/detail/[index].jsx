import { Card, CardBody } from "@nextui-org/react"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState, useParams } from "react"

const Detail = () => {

    return (
            <div className="flex flex-col gap-3 justify-center items-center mt-10">
                <h1>Detail Book</h1>
                <Card>
                    <CardBody>
                        <div>
                            <h1>ISBN</h1>
                            <p>{book.isbn}</p>
                        </div>
                        
                    </CardBody>
                </Card>
            </div>
    )
}

export async function getServerSideProps(context) {
    const { isbn } = context.query
    const res = await fetch(`http://localhost:8080/api/detail/${isbn}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

export default Detail