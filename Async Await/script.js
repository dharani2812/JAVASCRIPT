function walkDog(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const Dogwalked = true;
            if(Dogwalked){
                resolve("You take the Dog to Walk")
            }
            else{
                reject("you DIDN'T take the dog to walk")
            }
            
        },1000)})
    }
    

function cleanKitchen(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const Kitchencleaned=true;
            if(Kitchencleaned){
                resolve("You clean The Kitchen")
            }
            else{
                reject("you DIDN'T clean The Kitchen")
            }
           
        },1000)})
    }
function takeoutTrash(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const takeoutTrashed=true;
        if(takeoutTrashed){
            resolve("You take Out The Trash Out")
        }
        else{
            reject("you DIDN'T take Out The Trash Out")
        }
           
        },1000)})
    }
async function DoChores(){
    const walkDogResult=await walkDog();
    console.log(walkDogResult)

    const cleanKitchenResult=await cleanKitchen();
    console.log(cleanKitchenResult)

    const takeoutTrashResult=await takeoutTrash();
    console.log(takeoutTrashResult)

    console.log("You Finished All The Work")

}
DoChores();
         





