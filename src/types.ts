export type AffidavitFormData = {
  id: string;
  type: string;
  description: string;
  issue_date: Date;
  reason: string;
  amount: {
    in_number: number;
    in_words: string;
  };
  applicant: {
    so: string;
    address: string;
    name: string;
    cnic: string;
  };
  agent: {
    name: string;
    cnic: string;
    address: string;
    id: string;
  };
};
