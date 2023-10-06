import { PersonalDataType } from "../../config/formconfig";

import '../../styles/pagetab.css'
import CustomButton from "../custombutton";
import CustomInput from "../custominput";

interface PersonalTabProps {
    manageInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    manageSubmitInput: (e: React.SyntheticEvent) => void;
    personalData: PersonalDataType;
}

/*
<input type="text" id="name" onChange={props.manageInputChange} value={props.personalData.name} required />
<input type="text" id="email" onChange={props.manageInputChange} value={props.personalData.email} required />
<label>Location</label>
<input type="text" id="location" onChange={props.manageInputChange} value={props.personalData.location}/>
<label>Email</label>*/
const PersonalTab = (props: PersonalTabProps) => {
    return (
        <div className="PageTab">
            <form onSubmit={props.manageSubmitInput} className="Form">
                <p>Personal Tab</p>
                <CustomInput type="text" id="name" label="Name" onChange={props.manageInputChange} value={props.personalData.name} required={true}/>
                <CustomInput type="text" id="location" label="Location" onChange={props.manageInputChange} value={props.personalData.location} required={true}/>
                <CustomInput type="text" id="phone" label="phone" onChange={props.manageInputChange} value={props.personalData.phone} required={true}/>
                <label>Summary</label>
                <textarea id="summary" onChange={props.manageInputChange} value={props.personalData.summary} required />
                <CustomButton type="submit" text="Submit"/>
            </form>
        </div>
    )
}

export default PersonalTab;