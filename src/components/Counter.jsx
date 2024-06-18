import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Container className="shadow p-5 mt-5 bg-white rounded">
    <Row className="justify-content-center">
      <Col md="auto">
        <div className="text-center">
          <h1>Counter: {count}</h1>
          <Button variant="danger" style={{ marginRight: '10px' }} onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button variant="primary" onClick={() => dispatch(increment())}>Increment</Button>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Counter;
