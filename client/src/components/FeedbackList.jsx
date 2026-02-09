import React from 'react'
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';
import '../Styles/FeedbackList.css'
import AnalyticalContainer from './AnalyticalContainer.jsx';
import Button from './Button';
import MailInputField from './MailInputField.jsx';
import MultiLineInputField from './MultiLineInputField.jsx';
export default function FeedbackList() {
    let data = [
        {
            mail: "example.csd@kongu.edu",
            companyName:"soliton tech",
            roundNo:2
        },
        {
            mail: "example.csd@kongu.edu",
            companyName:"soliton tech",
            roundNo:2
        },
        {
            mail: "example.csd@kongu.edu",
            companyName:"soliton tech",
            roundNo:2
        },
    ]

    const [FeedbackMail,setFeedbackmail] = React.useState(null);

    const handleFormButton = (mail) => {
        setFeedbackmail(mail);
    }
  return (
    <>
    {FeedbackMail===null? <div className='FeedbackList'>
       { data.map((intem,index) =>( 
        <div key={index} className='FeedbackList-item' onClick={()=>handleFormButton(intem.mail)}>
        <div>
            <p className='mail'>{intem.mail}</p>
            <p className='companyname'>{intem.companyName}</p>
            <p className='roundNo'>Round {intem.roundNo}</p>
        </div>
<FiChevronRight className='goicon'/>
</div>
        

        ))}
    </div>: <div className="FeedbackForm-Container">
        <div className='header'>
            <FiChevronLeft className='icon' onClick={()=>setFeedbackmail(null)}/>
           <div className='company-info'>    
             <p className='title'>Exaple@kongu.edu</p>
            <p className='round-name'>Soliton - round 2</p>
           </div>
        </div>

        <h4 className='res-head'>Feedback</h4>
        <div className='inputList'>
        <MailInputField type="number" placeholder="0" title="No. of Questions"/>
        <MultiLineInputField  placeholder="OPPS, Networking, etc" title="Subjects"/>
        <MultiLineInputField  placeholder="List the Topics you remember" title="Topics"/>
        <MultiLineInputField  placeholder="List the Questions you remember" title="Questions"/>
        <MultiLineInputField  placeholder="Mentions the constraints of that round" title="Round Constraints"/>
        <MailInputField type="number" placeholder="Give advice to the juniors" title="Advice"/>
   </div>
    <AnalyticalContainer/>
    <div className='bntCont'>
         <Button label="Add to Feedback" variant="primary" onClick=""/>

           <Button label="Reject Feedback" variant="tertiary" onClick=""/>
       </div>
        </div>}
    </>
  )
}
