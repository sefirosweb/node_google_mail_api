import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { BrowserRouter, Link } from "react-router-dom";
import { APP } from "./config"

function App() {
  const [messages, setMessages] = useState<Array<any>>([])

  const handleSearchAllMails = () => {
    axios.get<Array<any>>(`${APP}/api/messages`)
      .then((res) => setMessages(res.data))
      .catch((res) => console.log(res))
  }

  useEffect(() => {
    handleSearchAllMails()
  }, [])

  return (
    <Container className='mt-5' fluid>
      <Row>
        <Col>
          <Button onClick={handleSearchAllMails}>
            Load List
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Thread ID</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((m) =>
                <tr key={m.id}>
                  <td><Link to={`messages/${m.id}`}>{m.id}</Link></td>
                  <td><Link to={`threads/${m.threadId}`}>{m.threadId}</Link></td>
                </tr>
              )}
            </tbody>

          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default App
