import React from 'react'
import HeaderTwo from '../components/HeaderTwo'
import TabBar from '../components/TabBar'
import CompanyRoundsCard from '../components/CompanyRoundCard'
import '../Styles/CoordinatorDhashboard.css'
import FeedbackList from '../components/FeedbackList'
import HistoryCard from '../components/HistoryCard'

export default function CoordinatorDhashboard() {

  const [activeTab, setActiveTab] = React.useState('On Going');
  return (
    <div>
        < HeaderTwo/>
        <TabBar roll="Coordinator" setActiveTab={setActiveTab}/>
        {
          activeTab==='On Going' ? <CompanyRoundsCard /> : activeTab==='History'? <HistoryCard />: <FeedbackList/>
        }
        
    </div>
  )
}
