import {Container, Row} from "react-bootstrap";
import {useEffect} from "react";
import sampleData from '../test/sampleData'
import TodoItem from "./TodoItem";

const TodoPage = () => {
    //const [todoList, setTodoList] = useEffect([]);
    const sample = sampleData;
    return (
        <>
            <Container>
                <Row >
                    Your Todo List!
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