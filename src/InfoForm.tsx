import React from 'react';
import Input from './components/input';
import { format } from 'date-fns';

export default function InfoForm({ form, setForm }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pv) => ({ ...pv, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Input
        name="description"
        value={form.description}
        onChange={handleChange}
        title="Description"
        textTransform="uppercase"
        type="text"
      />
      <Input
        name="applicant"
        value={form.applicant}
        onChange={handleChange}
        title="Applicant"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="so"
        value={form.so}
        onChange={handleChange}
        title="S/O"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="applicant_cnic"
        value={form.applicant_cnic}
        onChange={handleChange}
        title="Applicant CNIC"
        type="number"
      />
      <Input
        name="agent"
        value={form.agent}
        onChange={handleChange}
        title="Agent"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="issue_date"
        value={format(form.issue_date, 'dd-MMM-yyyy hh:mm:ss a')}
        onChange={handleChange}
        onFocus={(e) => (e.target.type = 'datetime-local')}
        onBlur={(e) => (e.target.type = 'text')}
        title="Issued Date"
        type="text"
      />
      <Input
        name="amount"
        value={form.amount}
        onChange={handleChange}
        title="Amount"
        type="number"
      />
      <Input
        name="amount_words"
        value={form.amount_words}
        onChange={handleChange}
        title="Amount in words"
        type="text"
      />
    </>
  );
}
