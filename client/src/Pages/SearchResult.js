import { useEffect, useState } from 'react';
import { getAllSearch } from '../redux/actions/numAcion';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row, Card, Container } from 'react-bootstrap';
import SpinnerComponent from '../Components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import ChildCard from '../Components/ChildCard/ChildCard';
import NHOC from '../Components/NHOC';

function searchResult() {
  // 14158586273
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.Loader.loader);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    dispatch(getAllSearch());
    console.log(searchNumbers);
  }, []);
  const searchNumbers = useSelector((state) => state.Numbers.searchResult);


  return (
    <>
      <Row className="justify-content-md-center mb-3">
        <Col lg="8">
          <Form>
            <Form.Control
              type="search"
              placeholder="Filter"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form>
        </Col>
      </Row>

      {loading ? (
        <SpinnerComponent className="home" />
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {searchNumbers
            .filter((val) => {
              if (searchText == '') {
                return val;
              } else if (
                val.country_name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              ) {
                return val;
              } else if (
                val.location.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              } else if (
                val.updatedAt.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              } else if (
                val.number.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((number, i) => {
              return (
                <div key={i} className="">
                  <ChildCard number={number} />
                </div>
              );
            })}
        </Row>
      )}
    </>
  );
}

export default NHOC(searchResult);
