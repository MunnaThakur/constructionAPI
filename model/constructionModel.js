const mongoose = require("mongoose");


const constructionModel = mongoose.Schema({
    buildingName :{
        type: String,
        
    },
    builderName :{
        type: String,
        
    },
    location :{
        type: String,
        
    },
    
    price :{
        type:Number,
        
    },
    image :{
        data:Buffer,
        contentType: String
    },
    features:[
        {
            featureName:String,
        }
    ],
    description:{
        type:String
    },
    totalTower:{
        type : Number
    },
    contact:{
        type: Number
    },
    bankLoan:[
        {
            bankName:{
                type:String
            },
            bankImage:{
                type:String
            },
            bankIntrest:{
                type:String
            }
        }
    ],
    locationAdvantage:[
        {
            locationBenifit:{
                type:String
            }
        }
    ],
    buldingStatus:[
        {
            currentStatus:{
                type:String
            }
        }
    ]
})


module.exports = mongoose.model("IdealBulding", constructionModel);

