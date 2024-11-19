export interface Question {
    Id: string;
    CategoryId: string;
    SubCategoryId: string;
    Level: Level;
    Options: Options;
    CorrectOption: string;
    Answer: string;
    Title: string;
    Description: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    CreatedBy: string;
    ModifiedBy: string;
}

export interface Options
{
    Option1: string;
    Option2: string;
    Option3: string;
    Option4: string;
}

export enum Level {
    Easy = 1,
    Medium,
    Hard
}