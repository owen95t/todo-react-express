import {Helmet} from 'react-helmet'
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>MyTODO Homepage!</title>
                </Helmet>
                <div >
                {/*    CENTERED*/}
                    <Container className='justify-content-lg-center'>
                        <Row>
                            <h1>Hi there! Welcome to MyTODO </h1>
                            <pre>
                                This is a basic todo list web-app.
                                Try the demo, or sign up!
                            </pre>
                        </Row>
                        <Row>
                            <div className='d-grid gap-2'>
                                <Link to='/todos'>
                                    <Button variant='primary' size='lg'>
                                        Demo
                                    </Button>
                                </Link>

                                <Button variant='warning' size='lg'>
                                    Login/Signup
                                </Button>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default HomePage