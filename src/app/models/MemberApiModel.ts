export class MemberApiModel
    {
        public Id :number;
        public  IdNumber :string;
        public  Username: string 
        public Name :string ;
        public Surname:string ;
 

    constuctor (id:number , IdNumber:string, Username:string ,Name :string ,Surname:string )
    {
        this.Id=id;
        this.IdNumber=IdNumber;
        this.Name=Name;
        this.Surname=Surname;
        this.Username=Username;
    }

    
    }