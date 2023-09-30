import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/Datepicker.css';

export default function Reactdatepicker({ date, onDateChange, onSubmit }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onSubmit(); // Trigger the parent component's submit function
  };

  return (
    <React.Fragment>
      <Container>
        <div className='row mt-5 mb-5 picker'>
          <form className='row mb-4' onSubmit={handleSubmit}>
            <div className='col-sm-2'>
              <label className='col-form-label'>Date</label>
            </div>
            <div className='col-sm-5'>
              <Datepicker
                className='date'
                selected={selectedDate}
                onChange={(newDate) => onDateChange(newDate)}
                showYearDropdown
              />
            </div>
            <div className='col-sm-2'>
              <button type='submit' className='btn btn-success'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
