import React from 'react'
import '../Styles/TabBar.css'
export default function TabBar() {
    let roll = "Coordinator";
    let tabs = {
        "Student":["Company", "Feedback"],
        "Placement Cell":["On Going", "New Entry"],
        "Coordinator":["On Going", "History", "Feedback"]
    }
    const [selectedTab, setSelectedTab] = React.useState(tabs[roll][0]);
    function handleTabClick(tabName) {
        setSelectedTab(tabName);
    }
  return (
    <nav className="tab-bar">
        <ul className="tab-list">
        {
            tabs[roll].map((tabName) => (
                <li className={`tab-item ${selectedTab === tabName?"active":''}`} key={tabName} onClick={() => handleTabClick(tabName)}>
                    {tabName}
                </li>
            )
        )
}
</ul>
        </nav>
  )
}
