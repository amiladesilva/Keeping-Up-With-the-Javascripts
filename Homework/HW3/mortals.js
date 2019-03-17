// This array represent all men and they are mortal
const men = ["man1","man2","man3","man3","socrates","man10"];

/*
Socrates is a man so he has to be in the collection. 
If he is there then thats proof that he is mortal
*/
if(men.includes("socrates")){
    console.log("socrates is mortal");
}
