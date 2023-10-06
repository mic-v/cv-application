import PersonalTab from "./tabs/personaltab";
import WorkTab from "./tabs/worktab";

import { PersonalDataType, WorkDataType, EduDataType } from '../config/formconfig'
import EduTab from "./tabs/edutab";

import '../styles/tab.css'

interface TabsProp {
    activeTab: number
    manageNav: (event: React.MouseEvent<HTMLElement>) => void;
    manageInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    manageAddInput: (event: React.MouseEvent<HTMLButtonElement>) => void;
    manageDeleteInput: (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => void;
    manageSubmitInput: (e: React.SyntheticEvent) => void;
    tabData: PersonalDataType | WorkDataType[] | EduDataType[];
}

const Tabs = (props: TabsProp) => {
    console.log(props.activeTab);
    const tab = props.activeTab === 0 ? <PersonalTab personalData={props.tabData as PersonalDataType} manageInputChange={props.manageInputChange} manageSubmitInput={props.manageSubmitInput} key={0}/> : 
    props.activeTab === 1 ?             <WorkTab workData={props.tabData as WorkDataType[]} manageInputChange={props.manageInputChange} manageAddInput={props.manageAddInput} manageDeleteInput={props.manageDeleteInput} manageSubmitInput={props.manageSubmitInput} key={1}/> :
    props.activeTab === 2 ?             <EduTab eduData={props.tabData as EduDataType[]} manageInputChange={props.manageInputChange} manageAddInput={props.manageAddInput} manageDeleteInput={props.manageDeleteInput} manageSubmitInput={props.manageSubmitInput} key={2}/> : null;

    return (
        <div>
            <nav>
                <ul className="NavList">
                    <li className={props.activeTab === 0 ? "ActiveTab" : ''} id="personal" onClick={props.manageNav}>personal</li>
                    <li className={props.activeTab === 1 ? "ActiveTab" : ''} id="work" onClick={props.manageNav}>work experience</li>
                    <li className={props.activeTab === 2 ? "ActiveTab" : ''} id="education" onClick={props.manageNav}>education</li>
                </ul>
            </nav>
            <div className="Tab">
                {tab}
            </div>
        </div>
        
    )
}
export default Tabs;