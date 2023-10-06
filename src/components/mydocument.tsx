import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { EduDataType, PersonalDataType, WorkDataType } from '../config/formconfig';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
    fontSize: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 30,
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontSize: 10,
  },
  sectionHeader: {
    width: "100%",
    borderBottom: '1px solid black',
  },
  sectionMulti: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '10px',
    paddingLeft: '10px',
  }
});

interface MyDocumentProps {
    personalData: PersonalDataType;
    workData: WorkDataType[];
    eduData: EduDataType[];
}

// Create Document Component
const MyDocument = (props: MyDocumentProps) => (
  <Document pageMode={'useNone'}>
    <Page size="A4" style={styles.page}>
      <View key={"personal"}style={styles.section}>
        <Text style={styles.heading} >{props.personalData.name}</Text>
        <View style={styles.headingRow}>
            <Text>{props.personalData.email}</Text>
            <Text>|</Text>
            <Text>{props.personalData.phone}</Text>
            <Text>|</Text>
            <Text>{props.personalData.location}</Text>
        </View>
        <Text><hr/></Text>
        <Text>Summary: {props.personalData.summary}</Text>
      </View>
      <View key={"work"} style={styles.section}>
        <Text style={styles.sectionHeader}>Work Experience</Text>
        {
            props.workData.map((element, index) => 
                <View key={index}>
                  <Text>Work Experience #{index + 1}</Text>
                  <View style={styles.sectionMulti}>
                      <Text>{props.workData[index].position}</Text>
                      <Text>{props.workData[index].company}</Text>
                      <Text>{props.workData[index].location}</Text>
                      <Text>{props.workData[index].summary}</Text>
                  </View>
                </View>
            )
        }
      </View>
      <View key={"education"} style={styles.section}>
        <Text style={styles.sectionHeader}>Education Background</Text>
          {
              props.eduData.map((element, index) => 
                  <View key={index}>
                    <Text>Education #{index + 1}</Text>
                    <View style={styles.sectionMulti}>
                        <Text>{props.eduData[index].program}</Text>
                        <Text>{props.eduData[index].degree}</Text>
                        <Text>{props.eduData[index].school}</Text>
                        <Text>{props.eduData[index].summary}</Text>
                    </View>
                  </View>
              )
          }
      </View>
    </Page>
  </Document>
);

export default MyDocument;