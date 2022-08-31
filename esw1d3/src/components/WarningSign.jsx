import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap';

const WarningSign = (prop) =>{
    return (
        <Alert variant={prop.variant} className='mt-4'>
        This is a danger alert—check it out!
      </Alert>  
    )
}
export default WarningSign;