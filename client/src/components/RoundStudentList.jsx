import react from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';
import '../Styles/RoundStudentList.css';
export default function RoundStudentList({setSelectedRound}){
    let dept = "CSD";
    let Data = {
        CompanyName : "Soliton Technologies",
        RoundsNo:3,
        Students:{
            CSE:["Exampl.cse@kongu.edu","Exampl.cse@kongu.edu","Exampl.cse@kongu.edu"],
            CSD:["Exampl.csd@kongu.edu","Exampl@.csdkongu.edu","Exampl.csd@kongu.edu"],
            IT:["Exampl.it@kongu.edu","Exampl.it@kongu.edu","Exampl.it@kongu.edu"]
        }
    }
    return(
        <div className='Round-Student-List'>
            <div className='header'>
            <FiChevronLeft className='icon' onClick={()=>setSelectedRound(null)}/>
            <div className='company-info'>
                <p className='title'>{Data.CompanyName}</p>
                <p className='round-name'> Round {Data.RoundsNo}</p>
            </div>
            </div>
            <hr/>
            {Data.Students[dept].map((item, index)=>(
                <div className='Round-Student-Container'>
                    <p className='studentName'>{item}</p>
<IoIosSend className='sendIcon'/>
                    </div>
            ))}

        </div>
    );
}