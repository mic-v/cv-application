import { WorkDataType } from "../../config/formconfig";

import '../../styles/pagetab.css'
import CustomButton from "../custombutton";
import CustomInput from "../custominput";

interface WorkTabProps {
    manageInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    manageAddInput: (event: React.MouseEvent<HTMLButtonElement>) => void;
    manageDeleteInput: (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => void;
    manageSubmitInput: (e: React.SyntheticEvent) => void;
    workData: WorkDataType[];
}

const WorkTab = (props: WorkTabProps) => {

    const data = props.workData as WorkDataType[];

    return (
        <div className="PageTab">
            <form onSubmit={props.manageSubmitInput} className="Form">
                <p>Work Tab</p>
                {
                    data.map((element, index) => 
                        <div key={index} className="FormMulti">
                            <div className="FormRow">
                                <p>Experience #{index + 1}</p>
                                <CustomButton type="reset" text="Delete" onClick={props.manageDeleteInput(index)} style={{backgroundColor: "rgb(0,0,0)"}}/>
                            </div>
                            <CustomInput type="text" id={"position" + "-" + index} label="Position" onChange={props.manageInputChange} value={data[index].position} required={true}/>
                            <CustomInput type="text" id={"company" + "-" + index} label="Company" onChange={props.manageInputChange} value={data[index].company} required={true}/>
                            <CustomInput type="text" id={"location" + "-" + index} label="Location" onChange={props.manageInputChange} value={data[index].location} required={true}/>
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

export default WorkTab;