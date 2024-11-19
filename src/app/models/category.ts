export interface Category {
    id: string;
    type: string;
    subCategoryIds: string[];
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    modifiedBy: string;
}