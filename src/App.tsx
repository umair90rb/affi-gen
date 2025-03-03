import React from 'react';
import InfoForm from './InfoForm';

function App() {
  const [form, setForm] = React.useState({
    id: 'PB-FSD-6B73DC6890EB2841',
    type: 'Low Denomination',
    amount: 200,
    amount_words: 'Two Hundred Rupees Only',
    description: '',
    applicant: '',
    applicant_cnic: '',
    so: '',
    agent: 'self',
    issue_date: new Date(),
    reason: '',
    vendor: '',
  });
  return (
    <>
      <div
        style={{
          display: 'inline-block',
          width: '40%',
          height: '100vh',
          // border: '1px solid black',
        }}
      >
        <InfoForm form={form} setForm={setForm} />
      </div>
      <div
        style={{
          display: 'inline-block',
          width: '40%',
          height: '100vh',
          // border: '1px solid black',
        }}
      >
        <p>{JSON.stringify(form, null, 2)}</p>
      </div>
    </>
  );
}

export default App;
