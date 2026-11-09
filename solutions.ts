
const multiplyValue=(value:number , multiplier ?: number )=>{
   
    if(multiplier != undefined){
         if(multiplier ==0){
        return 0;
     }
    else {
        return value*multiplier;
    }
    }
    
    else {
        return 2*value;
    }

}



const processInput=(p:string | number |boolean)=>{
    if(typeof(p)=="string"){
       return p.trim().toLocaleLowerCase();
    }
    else if(typeof(p)=="number"){
        return p*10;
    }
    else{
        if(p){
            return "Active";
        }
        else{
           return "Inactive";
        }
    }
}



const formatCoordinate=(arr:readonly[latitude:number,longitude: number, locationName:string])=>{
    const [latitude,longitude,locationName]=arr;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}




const concatenateArrays= <T> (...array:T[][]):T[]=>{
    return array.flat();
}


interface Course{
    title :string
    students:number
    isPublished:boolean
}


const getPopularCourses= (courses:Course[],minStudents:number ):Course[]=>{
   
       const result:Course[]=[];
       for(const c of courses){
         if(c.isPublished ==true && c.students >= minStudents){
            result.push(c);
         }
       }
       return result;
    
}





const pluckValues =<T, K extends keyof T> (items: T[],key: K):T[K][]=>{
    return items.map(item => item[key]);
}


class Employee{
    constructor( protected name: string,
               private _baseSalary :number
    ){}
   
    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`
    }
} 

class Manager extends Employee{
    constructor( name: string,
                baseSalary :number,
                 private department :string,){
                super(name,baseSalary );
               }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }      
}




const validateAgeAsync =async (age:number):Promise<string> => {
    if(age<18){
        throw new Error("Access Denied: Must be 18 or older");
        }
        else{
            await new Promise((s)=> setTimeout(s,1000));
        }
    
    return  "Access Granted";
}


