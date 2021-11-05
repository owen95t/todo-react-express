import {Container} from "react-bootstrap";

const TodoItem = ({name}) => {

    //name is to-do item name for display


    return (
        <>
            <Container>
                {/*Left Align*/}
                <div>
                    <p className='text-start d-inline'>{name}</p>
                    <p className='text-end'>delete</p>
                </div>
            {/*    Right Align*/}
                <div>

                </div>
            </Container>
        </>
    )
}

export default TodoItem