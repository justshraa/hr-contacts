import React, { useState, useEffect } from 'react';
import './HrForm.css';


const HrForm = ({ addHr, updateHr, editHr, setEditHr }) => {
  const [form, setForm] = useState({
    id: null,
    name: '',
    email: '',
    contact: '',
    post: '',
    alternateContact: ''
  });

  useEffect(() => {
    if (editHr) {
      setForm(editHr);
    }
  }, [editHr]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateHr(form);
    } else {
      addHr({ ...form, id: Date.now() });
    }
    setForm({
      id: null,
      name: '',
      email: '',
      contact: '',
      post: '',
      alternateContact: ''
    });
  };

  return (
    <form className=' mx-40' onSubmit={handleSubmit} >
      <input className="border-slate-500 border rounded-2xl pl-5" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name"  required />
      <input className="border-slate-500 border rounded-2xl pl-5" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input className="border-slate-500 border rounded-2xl pl-5" type="text" name="contact" value={form.contact} onChange={handleChange} placeholder="Contact" required />
      <input className="border-slate-500 border rounded-2xl pl-5" type="text" name="post" value={form.post} onChange={handleChange} placeholder="Post" required />
      <input className="border-slate-500 border rounded-2xl pl-5" type="text" name="alternateContact" value={form.alternateContact} onChange={handleChange} placeholder="Alternate Contact" />
      <div className='flex'>
      <button className='border-slate-500 border rounded-xl m-5 text-xl' type="submit">{form.id ? 'Update HR' : 'Add HR'}</button>
      {form.id && <button type="button" onClick={() => setEditHr(null)}>Cancel</button>}</div>
    </form>
  );
};

export default HrForm;
