import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap'
function Login() {
  return (
    <div ClassName="Container">
  
    <Form>
    <Row xl={12}>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
      </Col>
      <Col md={6}>
        <img src="https://media.istockphoto.com/photos/businessman-logging-on-to-a-password-protected-website-picture-id1325306868?b=1&k=20&m=1325306868&s=170667a&w=0&h=Nclr6aupv-xVdn6qZkHN_sPPsVFd_CLfWNyVbUVUUnI="/>
      </Col>
      </Row>
  </Form>
    <Button color="primary">
      Sign in
    </Button>
  </div>
  )
}

export default Login