import {Container, Row} from "react-bootstrap";
import {useEffect} from "react";

const TodoPage = () => {
    const [todoList, setTodoList] = useEffect([]);

    return (
        <>
            <Container>
                <Row >
                    Your Todo List!
                </Row>
                <Row className='justify-content-lg-center'>
                {/*    MAIN LIST*/}

                </Row>
            </Container>
        </>
    )
}

export default TodoPage