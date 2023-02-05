import React from 'react';
import { Col, Row } from 'react-bootstrap'


const Final = ({ postNotFinal }) => {

  return (
    <Row>
      {postNotFinal && postNotFinal.map(({ id, title, text }) => {
        return (
          <Col lg={4} key={id}>
            <h2> {title}</h2>
            {text && text.map(({id, text1}) => {
              <ul key={id}>
                <li>{text1}</li>
              </ul>
            })}
          </Col>
        )
      })}
    </Row>
  );
};

export default Final;