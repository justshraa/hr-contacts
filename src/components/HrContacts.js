import React, { useState } from 'react';
import HrForm from './HrForm';
import HrList from './HrList';
import './HrContacts.css';


const HrContacts = () => {
  const [hrContacts, setHrContacts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [editHr, setEditHr] = useState(null);

  const addHr = (hr) => {
    setHrContacts([...hrContacts, hr]);
  };

  const updateHr = (updatedHr) => {
    setHrContacts(hrContacts.map(hr => (hr.id === updatedHr.id ? updatedHr : hr)));
    setEditHr(null);
  };

  const deleteHr = (id) => {
    setHrContacts(hrContacts.filter(hr => hr.id !== id));
  };

  const companies = ['Company A', 'Company B', 'Company C']; // Mock data for companies

  return (
    <div> 
        <div className='  bg-slate-400 bg'>
            <h1 className='text-5xl text-white font-bold py-8 text-center tracking-widest font-mono'>
                HR CONTACTS
            </h1>
        </div>
        <div className=' justify-center mt-8 m-5 mx-40'>
            <select className='border-slate-500 border rounded-2xl px-5 pr-10' onChange={(e) => setSelectedCompany(e.target.value)} value={selectedCompany}>
            <option value="">Select a company</option>
            {companies.map((company, index) => (
            <option key={index} value={company}>{company}</option>
            ))}
            </select>
        </div>
        {selectedCompany && (
        <>
            <div className='m-5 p-4 '>
                <HrForm addHr={addHr} updateHr={updateHr} editHr={editHr} setEditHr={setEditHr} />
                <HrList hrContacts={hrContacts} deleteHr={deleteHr} setEditHr={setEditHr} />
            </div>
        </>
        
      )}
    </div>
  );
};

export default HrContacts;
