import React from "react";
import { Form, Button, ListGroup, Row, Col, Container } from "react-bootstrap";




export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        }
    }
    
    addTodo = (event) => {
        event.preventDefault();
    
        const data = event.target,
        newTodo = {
            positionName: data.positionName.value,
            company: data.company.value,
            city: data.city.value,
            country: data.country.value,
        }

        this.state.todoList.push(newTodo);
        this.setState({
            todoList: this.state.todoList,
        })
    }

    deleteTodo = (event) => {
        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }


    render() {
        return(
            <>
                <Container >
                    <Row >
                        <Col lg={6}>
                        <h1>Formulario</h1>
                            <Form onSubmit={this.addTodo}>
                                <Form.Group controlId="formPositionName">
                                    <Form.Label>Posición</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa nombre de Posición" name="positionName" required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPositionName">
                                    <Form.Label>Empresa</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa compañia" name="company" required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPositionName">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa Ciudad" name="city" required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPositionName">
                                    <Form.Label>Pais</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa Pais" name="country" required></Form.Control>
                                </Form.Group>
                                <Button type="submit" className="btn btn-success"> Enviar </Button>
                            </Form>
                        </Col>
                        <Col lg={6}>
                            <ListGroup>
                                <h1>Posiciones agregadas</h1>
                                {
                                    this.state.todoList.map((task, index) => {
                                        return(
                                            <ListGroup.Item key={index} variant="success">
                                                {task.positionName} en {task.company}. {task.city}, {task.country}
                                                <Button type="button" variant="danger" onClick={this.deleteTodo} value={index}>
                                                    Delete
                                                </Button>
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
