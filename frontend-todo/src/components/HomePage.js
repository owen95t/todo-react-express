import {Helmet} from 'react-helmet'
import {Button, Container, Row} from "react-bootstrap";

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
                            <h1>Hi there! </h1>
                            <pre>
                                This is a basic todo list web-app.
                                Try the demo, or sign up!
                            </pre>
                        </Row>
                        <Row>
                            <div className='d-grid gap-2'>
                                <Button variant='primary' size='lg'>
                                    Demo
                                </Button>
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