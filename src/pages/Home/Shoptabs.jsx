import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shoptabs = () => {
    
    
    return (
        <div className='mt-10'>
            <h1 className="text-5xl text-center mb-10">Buy Your Toy</h1>
           <div>
           <Tabs>
    <TabList>
      <Tab>TURBO ROBOT</Tab>
      <Tab>REMOTE CONTROL ROBOT</Tab>
      <Tab>SIRGIL RC</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
        <h2>any content 3</h2>
    </TabPanel>
  </Tabs>
           </div>
        </div>
    );
};

export default Shoptabs;