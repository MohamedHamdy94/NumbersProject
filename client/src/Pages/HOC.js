import { useEffect, useState } from 'react';
import { getNumInfo, setSearch } from '../redux/actions/numAcion';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row, Card, Container } from 'react-bootstrap';
import SpinnerComponent from '../Components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import NHOC from '../Components/NHOC';
function HOC() {
  const [num, setnum] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const number = useSelector((state) => state.Numbers.number);
  const message = useSelector((state) => state.Numbers.message);
  const loading = useSelector((state) => state.Loader.loader);
  const submitHandler = async (e) => {
    console.log(num);
    e.preventDefault();
    dispatch(getNumInfo(num));
  };

  return (
    <Container style={{ width: '600px' }}>
      <Row className="justify-content-md-center mb-3">
        <Col lg="8">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={num}
                onChange={(e) => setnum(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="w-25" type="submmit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      {loading ? (
        <SpinnerComponent className="home" />
      ) : (
        <Row
          //  xs={1} md={4}
          className="g-3"
        >
          <Card>
            {number.valid ? (
              <Card.Body>
                <Card.Title
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100ch',
                  }}
                >
                  <h4>Number : {number.number}</h4>
                </Card.Title>
                <Card.Text
                  style={{
                    whiteSpace: 'pre',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100ch',
                  }}
                >
                  country name: {number.country_name}
                </Card.Text>
                <Card.Text>location : {number.location}</Card.Text>
                <Card.Text>local format : {number.local_format}</Card.Text>
                <Card.Text>
                  international_format : {number.international_format}
                </Card.Text>
                <Card.Text></Card.Text>
                <Card.Text>country_prefix : {number.country_prefix}</Card.Text>
                <Card.Text>country_code : {number.country_code}</Card.Text>
                <Card.Text>carrier : {number.carrier}</Card.Text>
                <Card.Text>line_type : {number.line_type}</Card.Text>
              </Card.Body>
            ) : (
              <Card.Body>
                <Card.Title>
                  <h4>Number : not valid</h4>
                </Card.Title>
              </Card.Body>
            )}
          </Card>
        </Row>
      )}
    </Container>
  );
}


export default NHOC(HOC);
