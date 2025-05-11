import { useEffect, useState } from 'react';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  // Font,
} from '@react-pdf/renderer';
import { AffidavitFormData } from '../types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import QRCode from 'qrcode';
import note from '../assets/note.png';
// import font from '../assets/font.ttf';

// Font.register({
//   family: 'NotoSans',
//   src: '../assets/font.ttf',
//   fontStyle: 'normal',
//   fontWeight: 400,
// });

type PDFDocumentProps = {
  content: AffidavitFormData;
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    border: '0px solid black',
    padding: 10,
  },
  content: {
    marginTop: 50,
    border: '0px solid black',
  },
  row: {
    flexDirection: 'row',
  },
  cellHead: {
    flex: 0.25,
    border: '0px solid black',
  },
  cellContent: {
    flex: 0.75,
    border: '0px solid black',
  },
  heading: {
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  section1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '0px solid black',
    marginHorizontal: 50,
  },
  section2: {
    border: '0px solid black',
    marginHorizontal: 50,
    marginTop: 10,
  },
});

function getValidDate(date: Date): string {
  const d = new Date(date);
  const month = d.getMonth();
  const day = d.getDate() + 7;
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

export default function PDFDocument({ content }: PDFDocumentProps) {
  const [qr, setQR] = useState<string | null>(null);

  useEffect(() => {
    QRCode.toDataURL(
      'https://www.example.com',
      { version: 5 },
      (err: Error, url: string) => {
        if (err) return console.error(err);
        setQR(url);
      }
    );
  }, []);

  return (
    <PDFViewer showToolbar={true} width={'100%'} height={'100%'}>
      <Document>
        <Page size="LEGAL" style={styles.page}>
          <View style={styles.content}>
            <Text style={styles.heading}>E STAMP RECEIPT</Text>
            <View style={styles.section1}>
              <View style={{ border: '0px solid red', flex: 0.75 }}>
                <View style={styles.row}>
                  <View style={styles.cellHead}>
                    <Text style={{ fontSize: 12 }}>E-Stamp ID</Text>
                  </View>
                  <View style={styles.cellContent}>
                    <Text style={{ fontSize: 12, fontWeight: 700 }}>
                      :{content.id}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.cellHead}>
                    <Text style={{ fontSize: 12 }}>Stamp Type</Text>
                  </View>
                  <View style={styles.cellContent}>
                    <Text style={{ fontSize: 12, fontWeight: 700 }}>
                      :{content.type}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.cellHead}>
                    <Text style={{ fontSize: 12 }}>Amount</Text>
                  </View>
                  <View style={styles.cellContent}>
                    <Text style={{ fontSize: 12, fontWeight: 700 }}>
                      :{content.amount.in_number}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 0.25,
                  alignItems: 'flex-end',
                }}
              >
                <Image style={{ width: 100, height: 100 }} src={qr} />
              </View>
            </View>
            <View style={styles.section2}>
              {/* 1 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>
                    Description
                  </Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>:{content.description}</Text>
                </View>
              </View>
              {/* 2 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>
                    Applicant
                  </Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>
                    :{content.applicant.name}
                  </Text>
                </View>
              </View>
              {/* 3 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>S/O</Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>:{content.applicant.so}</Text>
                </View>
              </View>
              {/* 4 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>
                    Address
                  </Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>
                    :{content.applicant.address}
                  </Text>
                </View>
              </View>
              {/* 5 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>
                    Issue Date
                  </Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>
                    :{content.issue_date.toString()}
                  </Text>
                </View>
              </View>
              {/* 6 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>
                    Delisted On/Validity
                  </Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>
                    :{getValidDate(content.issue_date)}
                  </Text>
                </View>
              </View>
              {/* 7 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>
                    Amount in Words
                  </Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>
                    :{content.amount.in_words}
                  </Text>
                </View>
              </View>
              {/* 8 */}
              <View style={styles.row}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>Reason</Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>:{content.reason}</Text>
                </View>
              </View>
              {/* 9 */}
              <View style={[styles.row, { marginTop: 5 }]}>
                <View style={styles.cellHead}>
                  <Text style={{ fontSize: 10, lineHeight: 1.25 }}>Vendor</Text>
                </View>
                <View style={styles.cellContent}>
                  <Text style={{ fontSize: 10 }}>
                    :{Object.values(content.agent).join(' | ')}
                  </Text>
                </View>
              </View>
              {/* 10 */}
              <View
                style={[
                  styles.row,
                  { marginTop: 10, justifyContent: 'flex-end' },
                ]}
              >
                <Image source={note} style={{ width: 225 }} />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
