import React from 'react';
import Input from './components/input';
import { format } from 'date-fns';

interface InfoFormProps {
  values: {
    description: string;
    applicant: string;
    so: string;
    applicant_cnic: string;
    agent: string;
    issue_date: Date;
    amount: number;
    amount_words: string;
  };
  onChange: React.Dispatch<
    React.SetStateAction<{
      id: string;
      type: string;
      amount: number;
      amount_words: string;
      description: string;
      applicant: string;
      applicant_cnic: string;
      so: string;
      agent: string;
      issue_date: Date;
      reason: string;
      vendor: string;
    }>
  >;
}

export default function InfoForm({ values, onChange }: InfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((pv) => ({ ...pv, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Input
        name="description"
        value={values.description}
        onChange={handleChange}
        title="Description"
        textTransform="uppercase"
        type="text"
      />
      <Input
        name="applicant"
        value={values.applicant}
        onChange={handleChange}
        title="Applicant"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="so"
        value={values.so}
        onChange={handleChange}
        title="S/O"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="applicant_cnic"
        value={values.applicant_cnic}
        onChange={handleChange}
        title="Applicant CNIC"
        type="number"
      />
      <Input
        name="agent"
        value={values.agent}
        onChange={handleChange}
        title="Agent"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="issue_date"
        value={format(values.issue_date, 'dd-MMM-yyyy hh:mm:ss a')}
        onChange={handleChange}
        onFocus={(e) => (e.target.type = 'datetime-local')}
        onBlur={(e) => (e.target.type = 'text')}
        title="Issued Date"
        type="text"
      />
      <Input
        name="amount"
        value={values.amount}
        onChange={handleChange}
        title="Amount"
        type="number"
      />
      <Input
        name="amount_words"
        value={values.amount_words}
        onChange={handleChange}
        title="Amount in words"
        type="text"
      />
    </>
  );
}
