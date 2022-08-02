import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button, NavLink} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import Users from './Users';
function Login() {
  const navigate=useNavigate()
  const clickHandleer=()=>{
    navigate("./User")
  }
  return (
    <div className='d-flex flex-wrap'>
    <Card
  style={{
    width: '18rem',
    alignment: 'center',
  }}
>
  <img
    alt="Card image"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <Button onClick={clickHandleer}>
      User
    </Button>
  </CardBody>
</Card>
 <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Card image"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
<Card
  style={{
    width: '18rem',
    alignment: 'center',
  }}
>
  <img
    alt="Card image"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
</div>
  )
}

export default Login