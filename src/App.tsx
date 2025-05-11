import React from 'react';
import InfoForm from './InfoForm';
import PDFDocument from './components/document';
import { AffidavitFormData } from './types';

function App() {
  const [preview, setPreview] = React.useState(false);
  const [form, setForm] = React.useState<AffidavitFormData>({
    id: 'PB-FSD-6B73DC6890EB2841',
    type: 'Low Denomination',
    description: 'Affidavit',
    issue_date: new Date(),
    reason: 'Agreement',
    amount: {
      in_number: 200,
      in_words: 'Two Hundred Rupees Only',
    },
    applicant: {
      name: 'Ali',
      cnic: '33104-1234567-1',
      address: 'Faisalabad',
      so: 'Ramzan',
    },
    agent: {
      name: 'Salman Ali',
      cnic: '33104-1234567-1',
      address: 'Lahore',
      id: 'LHR-1234567',
    },
  });

  const Page = React.useMemo(() => <PDFDocument content={form} />, [preview]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
      <div
        style={{
          border: '1px solid black',
          width: '100%',
        }}
      >
        {Page}
      </div>
    </div>
  );
}

export default App;
