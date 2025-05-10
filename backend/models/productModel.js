const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    mfgyear: {
        type:Number,
    },
    fregyear: {
        type: Number,
    },
    engincapacity:{
        type: String,
    },
    color: {
        type: String,
    },
    noofdoors: {
        type: Number
    },
    noofautodoors: {
        type: Number,
    },
    seatingcapacity: {
        type: Number,
    },
    geartype: {
        type: String,
    },
    bodytype: {
        type: String,
    },
    oiltype: {
        type: String,
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: [
                'Car',
                'Van',
                'Truck',
                'Accessories',
                'Parts',
                'Tire',
                'Rim',
                'Engine',
                'Services',
                'Trading',
                'Others',
                'Lorry/JCB'
            ],
            message : "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, 'Product stock cannot exceed 20']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.Types.ObjectId
    }
    ,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema