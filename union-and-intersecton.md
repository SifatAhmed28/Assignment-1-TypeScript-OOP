Title:practical example of combining Union (|) and Intersection (&) types in TypeScript

Union (|) use for to take one of the option from many options.
Intersecton (&) use for to take all the option combination .
So we can say that Union and Intersection has different characteristic in the code. And most frequently use in the code especially if else conditon.

Now let's see a example:
type AnimalSound={
    Cow:"hamba",
    Dog:"gaw",
    Cat:"maw",
    fish:"suu"
};
type walking={
    hasLag:boolean,
    numberOFLeg:number
};
type swming={
    hasFin:boolean,
    NOoffin:number
};
type Cow  = { name: "Cow";  sound: AnimalSound["Cow"] }  & Walking;
type Fish = { name: "fish"; sound: AnimalSound["fish"] } & Swimming;
//we use and & to tell that cow have sound "hamba" and also it can walk
//and fish sound is "suu" and it's can swim 

type Animal = Cow | Dog | Cat | Fish ;
//here we use union , if we have to choose any one animal from the given list than we choose union to choose one.
const cow: Animal = {
  name: "Cow",
  sound: "hamba",
  hasLeg: true,
  numberOfLeg: 4,
};

const fish: Animal = {
  name: "fish",
  sound: "suu",
  hasFin: true,
  numberOfFin: 5,
};

function describe(animal: Animal) {
  if (animal.name == "fish") {
    console.log(animal.name, "says", animal.sound, "and has", animal.numberOfFin, "fins");
  } else {
    console.log(animal.name, "says", animal.sound, "and has", animal.numberOfLeg, "legs");
  }
}

