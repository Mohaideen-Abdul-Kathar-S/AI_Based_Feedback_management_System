import React from 'react'
import HeaderTwo from '../components/HeaderTwo'
import TabBar from '../components/TabBar'
import CompanyRoundsCard from '../components/CompanyRoundCard'
import '../Styles/PlacementCellDhashboard.css'

import CompanyForm from '../components/CompanyForm'
import TechCard from '../components/TechCard'
export default function PlacementCellDhashboard() {

  const [activeTab, setActiveTab] = React.useState('On Going');
  return (
    <div>
        < HeaderTwo/>
        <TabBar roll="Placement Cell" setActiveTab={setActiveTab}/>
        {
          activeTab==='On Going' ? <CompanyRoundsCard /> : <>< CompanyForm />
        <p className='CompanyFormPteg'>Created Entries</p>
        < TechCard/>
        </>
        }
        
    </div>
  )
}
