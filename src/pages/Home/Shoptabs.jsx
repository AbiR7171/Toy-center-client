import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Turbo from '../Toys/Category/Turbo';
import Remote from '../Toys/Category/Remote';
import Sirgil from '../Toys/Category/Sirgil';

const Shoptabs = () => {
  const[toys, setToys]=useState([])
  const[remotes , setRemotes]=useState([])
  const[sirgils, setSirgils]= useState([])
  const[turbos, setTurbos]=useState([])


  console.log(toys);

  useEffect(()=>{
    fetch("https://toy-center-server.vercel.app/toys")
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  useEffect(()=>{

    const remoteControl = toys.filter(toy => toy.category === "remote control")
    setRemotes(remoteControl);

    const turbo = toys.filter(toy => toy.category === "turbo")
    setTurbos(turbo);

    const sirgil = toys.filter(toy => toy.category === "sirgil")
    setSirgils(sirgil);
  },[toys])
    
    return (
        <div data-aos="fade-up-right" className='mt-10 container mx-auto  p-2 '>
            <h1 className="text-5xl text-center mb-10">Buy Your Toy</h1>
           <div  className='font-serif p-4'>
           <Tabs>
    <TabList>
      <Tab>TURBO ROBOT</Tab>
      <Tab>REMOTE CONTROL ROBOT</Tab>
      <Tab>SIRGIL RC</Tab>
    </TabList>

    <TabPanel>
     <div className='grid lg:grid-cols-3 gap-2   p-2 mx-auto'>
     {
        turbos.map(turbo =><Turbo
        key={turbo._id}
        turbo={turbo}
        />)
      }
     </div>
    </TabPanel>
    <TabPanel>
      <div className='grid lg:grid-cols-3 gap-2 p-2 mx-auto'>
      {
        remotes.map(remote => <Remote
        key={remote._id}
        remote={remote}
        />)
      }
      </div>
    </TabPanel>
    <TabPanel>
        <div className='grid lg:grid-cols-3 gap-2'>
          {
            sirgils.map(sirgil => <Sirgil
            key={sirgil._id}
            sirgil={sirgil}
            />)
          }
        </div>
    </TabPanel>
  </Tabs>
           </div>
        </div>
    );
};

export default Shoptabs;