import React from 'react'
import Button from './Button';
import SelectInputField from './SelectInputField';
import MailInputField from './MailInputField';
import '../Styles/CoordinatorEnrollmentForm.css';
export default function CoordinatorEnrollmentForm() {
  return (
    <div className='Form-container'>
        <h2 className='Form-title' >Coordinators Enrollment</h2>
        <SelectInputField title="Type of the Coordinator"/>
        <SelectInputField title="Select Department"/>
        <MailInputField type="text" placeholder="example@kongu.edu" title="Enter Mail-ID"/>
        <Button label="Create Entry" variant="secondary" onClick=""/>
    </div>
  )
}
