import { File } from './file.model';

export class Notice {
    id: number;
    title: string;
    seen: boolean;
    type: number;
    description: string;
    fullDescription: string;
    date: Date;
    files: File[];

    constructor() {
        this.date = new Date();
        this.files = [];
    }
}
