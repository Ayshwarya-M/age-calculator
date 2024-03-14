import React, { useState } from 'react';
import { Row, Col, Container,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AgeCalculator() {
  const [age, setAge] = useState({ years:0, months: 0, days: 0 });
  const [dob, setDob] = useState({ date: '', month: '', year: '' });

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(`${dob.year}-${dob.month}-${dob.date}`);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    setAge({ years, months, days });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDob((prevDob) => ({
      ...prevDob,
      [name]: value,
    }));
  };

  return (

    <div className='age_outer_container'>
      
      <Row className='age_inside_container'>
      <h1 className='agecalculator'style={{marginBottom:"20px"}}>Age Calculator</h1>
        <Col xs={12} md={1} lg={1} xl={1}></Col>
        <Col xs={12} md={10} lg={10} xl={10}>
          <Row >
            <Col style={{marginBottom:"20px"}} xs={12} md={4} lg={4} xl={4}>
            <label >Date </label>
              <input type="number" name="date" value={dob.date} onChange={handleInputChange} />
            </Col>
            <Col style={{marginBottom:"20px"}} xs={12} md={4} lg={4} xl={4}>
            <label >Month </label>
              <input type="number" name="month" value={dob.month} onChange={handleInputChange} />
            </Col>
            <Col style={{marginBottom:"20px"}} xs={12} md={4} lg={4} xl={4}> 
            <label>Year </label>
              <input type="number" name="year" value={dob.year} onChange={handleInputChange} /></Col>
          </Row>
            <Row>
              <Col xs={12} md={4} lg={4} xl={4}></Col>
              <Col xs={12} md={4} lg={4} xl={4}>
                 <Button className='Age_calculator_btn' variant="dark" onClick={calculateAge} style={{width:"100%"}}>
                  &nbsp;Calculate Age&nbsp;
                 </Button>
                 </Col>
                 <Col xs={12} md={4} lg={4} xl={4}></Col>
            </Row>
            {age.years !== 0 && (
              <p className='result'>
                Age: {age.years} years, {age.months} months, {age.days} days
              </p>
            )}
         
        </Col>
        <Col xs={12} md={1} lg={1} xl={1}></Col>
      </Row>
    </div>



  );
}

export default AgeCalculator;
