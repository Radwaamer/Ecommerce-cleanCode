import { Container } from 'react-bootstrap'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

const Error = () => {
    const error= useRouteError();
    let errorStatus:number;
    let errorStatusText:string;
    if(isRouteErrorResponse(error)){
        errorStatus= error.status;
        errorStatusText= error.statusText;
    }else{
        errorStatus=404;
        errorStatusText="Page Not Found";
    }
    return (
        <Container className='error-page'>
            <h1>{errorStatus}</h1>
            <h4>{errorStatusText}</h4>
            <Link to={"/"} replace>How about going back to safty?</Link>
        </Container>
    )
}

export default Error;