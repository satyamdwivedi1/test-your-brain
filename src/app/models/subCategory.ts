export interface SubCategory {
    Id: string;
    CategoryId: string;
    QuestionIds: string[];
    Title: string;
    Description: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    CreatedBy: string;
    ModifiedBy: string;
}