import React from 'react';
import InfoForm from './InfoForm';
import PDFDocument from './components/document';

function App() {
  const [preview, setPreview] = React.useState(false);
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

  const Page = React.useMemo(
    () => <PDFDocument content={JSON.stringify(form, null, 2)} />,
    [preview]
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid black',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <InfoForm values={form} onChange={setForm} />
        <button onClick={() => setPreview(!preview)}>Generate</button>
      </div>
      {Page}
    </div>
  );
}

export default App;
