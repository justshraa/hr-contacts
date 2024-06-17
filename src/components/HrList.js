import React from 'react';
import './HrList.css';


const HrList = ({ hrContacts, deleteHr, setEditHr }) => {
  return (
    <div>
        <hr className='border-gray-600 mx-20'/>
      <p className='text-center text-pretty text-4xl font-bold mt-10 mb-6  tracking-widest'> HR LIST </p>
      <div className=' rounded-md p'>
        <ul>
            {hrContacts.map((hr) => (
            <li className='bg-white bg-opacity-40 border rounded-xl border-gray-500 mx-32 p-10' key={hr.id}>
                <div>
                <strong >Name:</strong> {hr.name}
                </div>
                <div>
                <strong>Email:</strong> {hr.email}
                </div>
                <div>
                <strong>Contact:</strong> {hr.contact}
                </div>
                <div>
                <strong>Post:</strong> {hr.post}
                </div>
                {hr.alternateContact && (
                <div>
                    <strong>Alternate Contact:</strong> {hr.alternateContact}
                </div>
                )}
                <button className='mx-5 mt-5' onClick={() => setEditHr(hr)}>Edit</button>
                <button onClick={() => deleteHr(hr.id)}>Delete</button>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HrList;
