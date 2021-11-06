import {Card} from "react-bootstrap";

const TodoItem = ({name}) => {

    //name is to-do item name for display


    return (
        <>
            <Card className='mt-2 mb-2'>
                <Card.Body>
                    <p className='text-start d-inline'>{name}</p>
                    <p className='text-end'>delete</p>
                </Card.Body>
            </Card>
        </>
    )
}

export default TodoItem