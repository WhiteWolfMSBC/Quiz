export interface IquizData  {
    id : number , 
    question :string , 
    options : string[] , 
    answer : number , 
    correct:string ,
    type : 'radio'|'checkbox'
}

export const quizData:IquizData[] = [
{
    id:1 , 
    question : "Are you More happy with me🙃?" , 
    options : ["yes" , "No"] ,
    correct : "yes" ,
    type : "radio"  ,
    answer : 1
} ,

{
   id:2 , 
   question : " The first thing is don't change your self , you are the best for me as I want🤗" , 
   options : ["no" , "Promise🤝", "pakka wala promise"] ,
   correct : "pakka wala promise" ,
   answer : 4,
   type : "radio"  ,

} , 

 {
   id:3 , 
   question : "Can you dating me like adopting a small child ??" , 
   options : ["yes" , "never" , " i will"] ,
   correct : " i will" ,
   answer : 3,
   type : "radio"  ,
   } , 

 {
   id:4 , 
   question : " If any sad situation happens come to me i am always with you....☺" , 
   options : ["i will come" , "never" ] ,
   correct : "i will come" , 
   answer : 1,
   type : "radio"  ,
  } , 

 {
   id:5 , 
   question : "are you excited of your birthday ??" , 
   options : ["Fully excited" , "yes" , "half excited", "no"] ,
   correct : "Fully  excited" ,
   answer : 1,
   type : "radio"  ,

} , 
 {
   id:6 , 
   question : "Do you want hug🤗 right now??" , 
   options : ["yes🥰" , "no😪"] ,
   correct : "yes" ,
   answer : 1,
   type : "radio"  ,

} , 

{
   id:7 , 
   question : "Do you miss me ??🤔" , 
   options : ["never" , "every-second" , "half-half"] ,
   correct : "every-second" ,
   answer : 2,
   type : "radio",
   } , 

{
   id:8 , 
   question : " ok ok , so this is a last question you know that i am a CID." , 
   options : ["🤣" , "😪"] ,
   correct : "🤣" ,
   answer : 1,
   type : "radio",
   } , 

{
   id:9 , 
   question : "Are you excited for your surprise??" , 
   options : ["no" , "yes"] ,
   correct : "yes" ,
   answer : 2,
   type : "radio",
   } , 

 

]