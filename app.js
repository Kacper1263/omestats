const readline = require('readline-sync')
const fs = require('fs')
const path = require('path')

while(true){
    console.log(" ")
    console.log(" ")
    // Choice
    var whatToDo = readline.question("What to do:\n1 - Add new stats after talk\n2 - exit\n: ")
    if(whatToDo == "2") return
    
    // Formated variables for output file
    var gender = "B"
    var age = "0"
    var length = "0"
    var satisfaction = "0"
    
    gender = readline.question("\nWhat gender:\nM - Male \nF - Female \nB - Bot\n: ")
    if(gender.toUpperCase() != "M" && gender.toUpperCase() != "F") {
        gender = "B"
        saveToFile()
    }
    else{
        age = readline.question("\nWhat age:\n0 - Unknown\n1 - <16 \n2 - 16-17 \n3 - 18-19 \n4 - 20-25 \n5 - >25\n: ")
        length = readline.question("\nWhat length:\n0 - <10min\n1 - 10-30min \n2 - 31-60min \n3 - >60min\n: ")
        satisfaction = readline.question("\nWhat satisfaction:\n0 - 0/5\n1 - 1/5 \n2 - 2/5 \n3 - 3/5 \n4 - 4/5 \n5 - 5/5\n: ")
        saveToFile()
    }
    
    // Create file
    function saveToFile(){
        //read old data
        var d = null;
        if(fs.existsSync("./data.json")){
            d = fs.readFileSync("./data.json")
            d = JSON.parse(d)
        }
        var oldData = {
            "gender male": d != null ?  d["gender male"] : 0,
            "gender female": d != null ?  d["gender female"] : 0,
            "gender bot": d != null ?  d["gender bot"] : 0,
            "age unknown": d != null ?  d["age unknown"] : 0,
            "age <16": d != null ?  d["age <16"] : 0,
            "age 16-17": d != null ?  d["age 16-17"] : 0,
            "age 18-19": d != null ?  d["age 18-19"] : 0,
            "age 20-25": d != null ?  d["age 20-25"] : 0,
            "age >25": d != null ?  d["age >25"] : 0,
            "length <10min": d != null ?  d["length <10min"] : 0,
            "length 10-30min": d != null ?  d["length 10-30min"] : 0,
            "length 31-60min": d != null ?  d["length 31-60min"] : 0,
            "length >60min": d != null ?  d["length >60min"] : 0,
            "satisfaction 0/5": d != null ?  d["satisfaction 0/5"] : 0,
            "satisfaction 1/5": d != null ?  d["satisfaction 1/5"] : 0,
            "satisfaction 2/5": d != null ?  d["satisfaction 2/5"] : 0,
            "satisfaction 3/5": d != null ?  d["satisfaction 3/5"] : 0,
            "satisfaction 4/5": d != null ?  d["satisfaction 4/5"] : 0,
            "satisfaction 5/5":d != null ?  d["satisfaction 5/5"] : 0,
        }
    
        var data = {
            "gender male": gender.toUpperCase() == "M" ? oldData["gender male"] + 1 : oldData["gender male"],
            "gender female": gender.toUpperCase() == "F" ? oldData["gender female"] + 1 : oldData["gender female"],
            "gender bot": gender.toUpperCase() == "B" ? oldData["gender bot"] + 1 : oldData["gender bot"],
            "age unknown": age == "0" ? oldData["age unknown"] + 1 : oldData["age unknown"],
            "age <16": age == "1" ? oldData["age <16"] + 1 : oldData["age <16"],
            "age 16-17": age == "2" ? oldData["age 16-17"] + 1 : oldData["age 16-17"],
            "age 18-19": age == "3" ? oldData["age 18-19"] + 1 : oldData["age 18-19"],
            "age 20-25": age == "4" ? oldData["age 20-25"] + 1 : oldData["age 20-25"],
            "age >25": age == "5" ? oldData["age >25"] + 1 : oldData["age >25"],
            "length <10min": length == "0" ? oldData["length <10min"] + 1 : oldData["length <10min"],
            "length 10-30min": length == "1" ? oldData["length 10-30min"] + 1 : oldData["length 10-30min"],
            "length 31-60min": length == "2" ? oldData["length 31-60min"] + 1 : oldData["length 31-60min"],
            "length >60min": length == "3" ? oldData["length >60min"] + 1 : oldData["length >60min"],
            "satisfaction 0/5": satisfaction == "0" ? oldData["satisfaction 0/5"] + 1 : oldData["satisfaction 0/5"],
            "satisfaction 1/5": satisfaction == "1" ? oldData["satisfaction 1/5"] + 1 : oldData["satisfaction 1/5"],
            "satisfaction 2/5": satisfaction == "2" ? oldData["satisfaction 2/5"] + 1 : oldData["satisfaction 2/5"],
            "satisfaction 3/5": satisfaction == "3" ? oldData["satisfaction 3/5"] + 1 : oldData["satisfaction 3/5"],
            "satisfaction 4/5": satisfaction == "4" ? oldData["satisfaction 4/5"] + 1 : oldData["satisfaction 4/5"],
            "satisfaction 5/5": satisfaction == "5" ? oldData["satisfaction 5/5"] + 1 : oldData["satisfaction 5/5"],
        }
    
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync("./data.json", data)
        console.log("Stats saved. Current stats: ")
        console.log(data);
    }
}