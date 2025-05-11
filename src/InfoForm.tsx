import React from 'react';
import Input from './components/input';
import { format } from 'date-fns';
import { AffidavitFormData } from './types';

interface InfoFormProps {
  values: AffidavitFormData;
  onChange: React.Dispatch<React.SetStateAction<AffidavitFormData>>;
}

export default function InfoForm({ values, onChange }: InfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((pv) => {
      const { name, value } = e.target;
      const [head, tail] = name.split('.');
      if (tail) {
        return {
          ...pv,
          [head]: {
            ...(pv[head as keyof AffidavitFormData] as object),
            [tail]: value,
          },
        };
      }
      return {
        ...pv,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Input
        name="id"
        value={values.id}
        onChange={handleChange}
        title="ID"
        textTransform="uppercase"
        type="text"
      />
      <Input
        name="type"
        value={values.type}
        onChange={handleChange}
        title="Type"
        textTransform="uppercase"
        type="text"
      />
      <Input
        name="description"
        value={values.description}
        onChange={handleChange}
        title="Description"
        textTransform="uppercase"
        type="text"
      />
      <Input
        name="reason"
        value={values.reason}
        onChange={handleChange}
        title="Reason"
        textTransform="uppercase"
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
        name="amount.in_number"
        value={values.amount.in_number}
        onChange={handleChange}
        title="Amount"
        type="number"
      />
      <Input
        name="amount.in_words"
        value={values.amount.in_words}
        onChange={handleChange}
        title="Amount in words"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="applicant.name"
        value={values.applicant.name}
        onChange={handleChange}
        title="Applicant"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="applicant.so"
        value={values.applicant.so}
        onChange={handleChange}
        title="S/O"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="applicant.cnic"
        value={values.applicant.cnic}
        onChange={handleChange}
        title="Applicant CNIC"
        type="text"
      />
      <Input
        name="applicant.address"
        value={values.applicant.address}
        onChange={handleChange}
        textTransform="capitalize"
        title="Address"
        type="text"
      />
      <Input
        name="agent.name"
        value={values.agent.name}
        onChange={handleChange}
        title="Agent Name"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="agent"
        value={values.agent.address}
        onChange={handleChange}
        title="Agent Address"
        textTransform="capitalize"
        type="text"
      />
      <Input
        name="agent.cnic"
        value={values.agent.cnic}
        onChange={handleChange}
        title="Agent CNIC"
        type="text"
      />
      <Input
        name="agent.id"
        value={values.agent.id}
        onChange={handleChange}
        title="Agent ID"
        textTransform="uppercase"
        type="text"
      />
    </>
  );
}
