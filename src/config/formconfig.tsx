export type PersonalDataType = {
    name: string;
    email: string;
    location: string;
    phone: string;
    summary: string;
}

export type WorkDataType = {
    position: string;
    company: string;
    location: string;
    summary: string;
}

export type EduDataType = {
    program: string;
    degree: string;
    school: string;
    summary: string;
}

export const initialPersonalData: PersonalDataType = {
    name: "",
    email: "",
    location: "",
    phone: "",
    summary: ""
}

export const initialWorkData: WorkDataType[] = [];

export const initialEduType: EduDataType[] = [];