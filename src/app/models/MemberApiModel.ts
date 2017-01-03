export class MemberApiModel
    {
        public id :number;
        public  idNumber :string;
        public  username: string 
        public name :string ;
        public surname:string ;
 

    constuctor (id:number , IdNumber:string, Username:string ,Name :string ,Surname:string )
    {
        this.id=id;
        this.idNumber=IdNumber;
        this.name=Name;
        this.surname=Surname;
        this.username=Username;
    }

    
    }