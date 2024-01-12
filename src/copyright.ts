// const year = document.getElementById("year") ;
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear );
// year.textContent = thisYear;

//my try
// const year = document.getElementById("year") as HTMLElement;
// const thisYear = new Date().getFullYear() as unknown as string;
// year.setAttribute("datetime", thisYear as unknown as string)!;
// year.textContent = thisYear;

//1st
/* let year: HTMLElement | null;
year = document.getElementById("year")!;
let thisYear: string;
thisYear = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
} else {
  console.log("error");
} */

//2nd
const year = document.getElementById("year") as HTMLSpanElement; //we force it to be an HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString(); //thisYear: string mean that it will be required to be a string
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
