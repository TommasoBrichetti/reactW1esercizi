import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge } from 'react-bootstrap';

const MyBedge = (prop) =>{
    return (
        <h1>
        Example heading <Badge variant={prop.variant}>New</Badge>
      </h1> 
    )
}
export default MyBedge;