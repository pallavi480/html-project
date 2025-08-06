function greeting (name,callback){
    console.log("hi", name)
    callback()
}

function bye(){
    console.log("bye","tc")
}

greeting("patu",bye)