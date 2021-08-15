export class waldenc {
    id!: number;
    name!: string;
    login!: string;
    campus!: string;
    title!: string;
}

export interface covidS {
    Report_Data_Extracted: string;
    LTC_Homes_with_Active_Outbreak: number;
    LTC_Homes_with_Resolved_Outbreak: number;
    Confirmed_Active_LTC_Resident_Cases: number;
    Total_LTC_Resident_Deaths: number;
    Confirmed_Active_LTC_HCW_Cases: number;
    Total_LTC_HCW_Deaths: number;
}