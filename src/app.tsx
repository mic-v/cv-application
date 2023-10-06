import { useState } from 'react'
import './app.css'
import { PDFViewer } from '@react-pdf/renderer'
import { v4 as uuidv4 } from "uuid";

import Tabs from './components/tabs'

import MyDocument from './components/mydocument'

import { initialEduType, initialPersonalData, initialWorkData, PersonalDataType, WorkDataType, EduDataType } from './config/formconfig'

type DataTypes = PersonalDataType | WorkDataType[] | EduDataType[];

const App = () => {

  
  const [personalData, setPersonalData] = useState(initialPersonalData);
  const [workData, setWorkData] = useState(initialWorkData);
  const [eduData, setEduData] = useState(initialEduType);
  
  const [activeTab, setActiveTab] = useState(0);
  const [activeData, setActiveData] = useState(personalData as DataTypes);

  const saveData = () => {
    if(activeTab === 0) {
      const data = activeData;
      setPersonalData(data as PersonalDataType);
      console.log(data);
    } else if(activeTab === 1) {
      const data: WorkDataType[] = activeData as unknown as WorkDataType[];
      setWorkData(data);
    } else if(activeTab === 2) {
      const data: EduDataType[] = activeData as unknown as EduDataType[];
      console.log(data);
      setEduData(data);
    }
  }

  const manageNav = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    saveData();
    switch(target.id) {
      case "personal":
        setActiveTab(0);
        setActiveData(personalData);
        break;
      case "work":
        setActiveTab(1);
        setActiveData(workData as WorkDataType[]);
        break;
      case "education":
        setActiveTab(2);
        setActiveData(eduData as EduDataType[]);
        break;      
      case "3":
        setActiveTab(3);
        break;
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(activeTab === 0) {
      const data = event.target;
      setActiveData({
          ...activeData,
          [data.id]: data.value
      });
    } else {
      const split = event.target.id.split('-');
      const dataId = split[0];
      const data = event.target;
      const index = parseInt(split[1]);

      let updatedData = activeData as WorkDataType[];
      updatedData[index] = {...updatedData[index], [dataId]: data.value}
      setActiveData([...updatedData]);
      console.log(activeData);
    }

    //saveData();
  }

  const onAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(activeTab === 1) {
      let newWorkField: WorkDataType = {
        position: '',
        company: '',
        location: '',
        summary: ''
      }
      const updatedData = activeData as WorkDataType[];
      updatedData.push(newWorkField);

      setActiveData([...updatedData]);
    } else if(activeTab === 2) {
      let newEduField: EduDataType = {
        program: '',
        degree: '',
        school: '',
        summary: ''
      }
      const updatedData = activeData as EduDataType[];
      updatedData.push(newEduField);

      setActiveData([...updatedData]);
    }
  }

  const onDelete = (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    if(activeTab === 1 || activeTab === 2) {
      const updatedData = activeData as WorkDataType[];
      updatedData.splice(index, 1);
      setActiveData([...updatedData]);
    }
  }

  const onSubmit = (event: React.SyntheticEvent) => { 
    event.preventDefault();
    saveData();
  }

  return (
    <main>
      <div>
        <h1>CV App</h1>
        <Tabs activeTab={activeTab} manageNav={manageNav} manageAddInput={onAdd} manageInputChange={onChange} manageDeleteInput={onDelete} manageSubmitInput={onSubmit} tabData={activeData} />
      </div>
      <div>
        <PDFViewer className="PDFViewer" width="500" height="500" showToolbar={false}>
          <MyDocument personalData={personalData} workData={workData} eduData={eduData} />
        </PDFViewer>
      </div>
    </main>
  )
}

export default App;
