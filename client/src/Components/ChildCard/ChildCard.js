import React from 'react';
import Card from 'react-bootstrap/Card';


export default function ChildCard(props) {

  const { number } = props;

  return (
    <Card>
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

          {number.country_name?(
<>
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
</>
          ):(
<h5>
Phone Number not Found
</h5>
          )

          }
       

      </Card.Body>
      <Card.Footer>Date: {number.updatedAt}</Card.Footer>
    </Card>
  );
}
