import React, {useState} from 'react'

import CoordinatorEnrollmentForm from '../components/CoordinatorEnrollmentForm';
import HeaderTwo from '../components/HeaderTwo';
import CompanyCard from '../components/CompanyCard';
import TechCard from '../components/TechCard';
import CoordinatorsCard from '../components/CoordinatorsCard';
import PlacementCellCard from '../components/PlacementCellCard';
export default function CoordinatorEnrollment() {

  const [activeTab, setActiveTab] = useState('Coordinators'); 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
  return (
    <div>
        <HeaderTwo />
        <CoordinatorEnrollmentForm />
        <div className="TextTab">
            <p className={`p1 ${activeTab==="Coordinators"?"active":""}`} onClick={ () => handleTabClick("Coordinators")}>Coordinators</p>
            <p className={`p2 ${activeTab==="Plecement Cell"?"active":""}`} onClick={() => handleTabClick("Plecement Cell")}>Plecement Cell</p>
        </div>
        {activeTab==="Coordinators"?<><CoordinatorsCard Cname="Sample1@kongu.edu" Cdept="CSD" Cid="1" />
        <CoordinatorsCard Cname="Sample2@kongu.edu" Cdept="CSE" Cid="2" />
        <CoordinatorsCard Cname="Sample3@kongu.edu" Cdept="AI & ML" Cid="3" />
    </>:
    <>
    <PlacementCellCard Cname="Sample1@kongu.edu" Cid="1" />
    </>}
    </div>
  )
}
