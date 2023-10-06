import { EduDataType } from "../../config/formconfig";
import CustomButton from "../custombutton";
import CustomInput from "../custominput";

import '../../styles/pagetab.css'

interface EduTabProps {
    manageInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    manageAddInput: (event: React.MouseEvent<HTMLButtonElement>) => void;
    manageDeleteInput: (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => void;
    manageSubmitInput: (e: React.SyntheticEvent) => void;
    eduData: EduDataType[];
}

const EduTab = (props: EduTabProps) => {

    const data = props.eduData as EduDataType[];
    return (
        <div className="PageTab">
            <form onSubmit={props.manageSubmitInput} className="Form">
            <p>Education</p>
                {
                    data.map((element, index) => 
                        <div key={index} className="FormMulti">
                            <div className="FormRow">
                                <p>Education #{index + 1}</p>
                                <CustomButton type="reset" text="Delete" onClick={props.manageDeleteInput(index)} style={{backgroundColor: "rgb(0,0,0)"}}/>
                            </div>
                            <CustomInput type="text" id={"program" + "-" + index} label="program" onChange={props.manageInputChange} value={data[index].program} required={true}/>
                            <CustomInput type="text" id={"degree" + "-" + index} label="degree" onChange={props.manageInputChange} value={data[index].degree} required={true}/>
                            <CustomInput type="text" id={"school" + "-" + index} label="school" onChange={props.manageInputChange} value={data[index].school} required={true}/>
                            <label>summary</label>
                            <textarea id={"summary" + "-" + index} onChange={props.manageInputChange} value={data[index].summary} required/>
                            
                        </div>
                )

                }
                <CustomButton type="submit" text="Submit"/>
                <CustomButton type="button" text="Add" onClick={props.manageAddInput}/>
            </form>
        </div>
    )
}

export default EduTab;