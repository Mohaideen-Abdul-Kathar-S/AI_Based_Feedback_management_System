import React from 'react'
import Button from '../components/Button'
import MailInputField from '../components/MailInputField'
import SelectInputField from '../components/SelectInputField'
import DateInputField from '../components/DateInputField'
import '../Styles/CompanyForm.css'
export default function CompanyForm() {
  return (
    <div className='container'>
            <h3 className='companyFormTitle'>Enter Company Details</h3>
            <MailInputField type="text" placeholder="Example Technologies pvt" title="Name of the Company"/>
            <SelectInputField title="Type of the Company"/>
            <MailInputField type="number" placeholder="##" title="No. of Rounds"/>
        <DateInputField title="Pick Start Date"/>
        <DateInputField title="Pick End Date"/>
        <Button label="Create Entry" variant="secondary" onClick=""/>
        </div>
  )
}
