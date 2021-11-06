import {Container, Row, InputGroup, Button, FormControl} from "react-bootstrap";
import {useEffect} from "react";
import sampleData from '../test/sampleData'
import TodoItem from "./TodoItem";

const TodoPage = () => {
    //const [todoList, setTodoList] = useEffect([]);
    const sample = sampleData;
    return (
        <>
            <Container>
                <Row className='justify-content-lg-center'>
                    Your Todo List!
                </Row>
                <Row>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="What do you need to do?"
                            aria-label="Todo name"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="success" id="button-addon2">
                            Add
                        </Button>
                    </InputGroup>
                </Row>
                <Row className='justify-content-lg-center'>
                {/*    MAIN LIST*/}
                    {sample.map((e, idx) => {
                        return (
                            <TodoItem name={e.name}/>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default TodoPage