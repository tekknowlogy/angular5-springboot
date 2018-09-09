export class Item {
    public id: number;
    public name: string;
    public description: string;
    public comment: string;
    constructor(name: string, description: string, comment: string) {
        this.name = name;
        this.description = description;
        this.comment = comment;
    }
}
