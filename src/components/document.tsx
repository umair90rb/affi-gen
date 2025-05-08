import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function PDFDocument({ content }) {
  return (
    <PDFViewer showToolbar={true} width={'100%'} height={'100%'}>
      <Document>
        <Page size="LEGAL" style={styles.page}>
          <View style={styles.section}>
            <Text>{content}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
