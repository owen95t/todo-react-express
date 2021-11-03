import {Helmet} from 'react-helmet'
import {Button} from "react-bootstrap";

const HomePage = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>MyTODO Homepage!</title>
                </Helmet>
                <div className='d-grid gap-2'>
                {/*    CENTERED*/}
                    <Button variant='primary' size='lg'>
                        Demo
                    </Button>
                    <Button variant='warning' size='lg'>
                        Login/Signup
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HomePage