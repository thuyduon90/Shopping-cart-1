export class Product {
    // Properties
    private _id: number;
    private _image: string;
    private _name: string;
    private _description: string;
    private _price: number;
    private _saleable: boolean;

    constructor(
        id: number, 
        image: string, 
        name: string, 
        description: string,
        price: number, 
        saleable: boolean=true){
            this._id = id;
            this._image= image;
            this._name = name;
            this._description=description;
            this._price=price;
            this._saleable = saleable;

    }

    // Getter 
    public get id() : number {
        return this._id
    }
    public get image() : string {
        return this._image
    }
    public get name() : string {
        return this._name
    }
    public get description() : string {
        return this._description
    }
    public get price() : number {
        return this._price
    }
    public get saleable() : boolean {
        return this._saleable
    }

    // Setter
    public set id(v : number) {
        this._id = v;
    }
    public set image(v : string) {
        this._image = v;
    }
    public set name(v : string) {
        this._name = v;
    }
    public set description(v : string) {
        this._description = v;
    }
    public set price(v : number) {
        this._price = v;
    }
    public set saleable(v : boolean) {
        this._saleable = v;
    }
}