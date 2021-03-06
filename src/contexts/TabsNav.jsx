import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Tabs from '../components/Tabs'
import FilterActivites from './FilterActivites'

const TabsNav = () => {
  
    const tabContent = [
        { title: 'Efficiency', content: <FilterActivites titleHead={'Efficiency Analytics'}/>  },
        { title: 'Volume', content:<FilterActivites titleHead={'Volume'} /> },
        { title: 'Customer Satisfaction', content: <FilterActivites titleHead={'Customer Satisfaction'}/> },
        { title: 'Backlog', content: <FilterActivites titleHead={'Backlog'} /> }
    ]
    return (
        <TabsWrapper>
            <Tabs>
                {tabContent.map((tab, idx) => (
                    <Tabs.TabPane key={`Tab ${idx}`} tab={tab.title}>
                        <div key={idx}>
                            {tab.content}
                        </div>

                    </Tabs.TabPane>
                ))}
            </Tabs>
        </TabsWrapper>
    )
}

const TabsWrapper = styled.div`
    margin-left: 262px;
    background: #fff;
    margin-top:  76px;

    @media screen and (max-width: 650px){
        margin-top: 135px;
    }
    @media screen and (max-width: 1280px){
        margin-left: 0;
    }
`

export default TabsNav