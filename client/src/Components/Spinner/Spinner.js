import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = () => {
  return (
    <>
        <div style={{ height: '25vh' }}
>
  <div
    className=" h-100 w-100  d-flex justify-content-center align-items-center"
  >
          <Spinner
         
            as="span"
            animation="border"
            size="xl"
            role="status"
            aria-hidden="true"
          />
         <h3>
         {' '}
           Loading...
         </h3>
          
        </div>
      </div>
    </>
  );
};

export default SpinnerComponent;