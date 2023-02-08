import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { BrowserRouter, Link, useParams } from "react-router-dom";
import { APP } from "./config"

function App() {
    const [mail, setMail] = useState<any>(null)
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${APP}/api/threads/${id}`)
            .then((res) => setMail(res.data))
            .catch((res) => console.log(res))
    }, [])

    console.log({ mail })

    return (
        <Container className='mt-5' fluid>
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}

export default App
