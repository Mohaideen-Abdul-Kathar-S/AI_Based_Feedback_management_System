import react from 'react';
import '../Styles/HistoryCard.css'
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import RoundStudentList from './RoundStudentList';
export default function HistoryCard(){
      const Data = [{
    companyName: "Mr. Cooper",
    numberOfRounds: 5, // change this to test (1–6)
    hasOffer: true,
  }, {
    companyName: "Soliton Technologies",
    numberOfRounds: 4, // change this to test (1–6)
    hasOffer: true,
  }, {
    companyName: "Presidio",
    numberOfRounds: 3, // change this to test (1–6)
    hasOffer: true,
  }, {
    companyName: "Zoho Corporation",
    numberOfRounds: 4, // change this to test (1–6)
    hasOffer: true,
  }];
const [openId, setOpenId] = react.useState(null);

const iconHandler = (companyName) => {
  setOpenId(openId === companyName ? null : companyName);
};

const [selectedRound, setSelectedRound] = react.useState(null);
  const roundHandler = (key) => (
  setSelectedRound(key )
  );
    return(
      <>
       {selectedRound ===null  ? < div className="HistoryCard-container">
       {
        Data.map((data)=>(
       openId === data.companyName ? <div className='HistoryCard-container-opened'>
        <div className='head'>
                <p className = "name">{data.companyName}</p>
                <FiChevronDown className='icon' onClick={()=>iconHandler(data.companyName)}/>
                    </div>
       <div className="rounds-grid">
        {
            Array.from({ length: data.numberOfRounds }, (_, i) => (
                <div className="round-box" key={i} onClick={()=>roundHandler(i)}>
                    {/* {`Round ${i + 1}\n`} */}
                <p className='round'>Round {`${i + 1}`}</p>
                   <p className='kec'>KEC - {`${i + 1}`}</p>
                   <p className='dept'>CSD - {`${i + 1}`}</p>
                </div>
            ))
        }
      </div>
        </div> :
        <div className='HistoryCard-container-notopened' key={data.companyName}>
                <p className = "name">{data.companyName}</p>
                <FiChevronRight className='icon' onClick={()=>iconHandler(data.companyName)}/>
            </div>

            ))
      
       }
       </div> : <RoundStudentList setSelectedRound = {setSelectedRound}/>}</>
    );
}