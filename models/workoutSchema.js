const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter a workout type."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter a workout name."
            },
            duration:{
                type: Number,
                required: "Please enter your workout time."
            },
            weight: Number,
            reps: Number,
            sets: Number,   
            distance: Number      
        }
    ]
});


const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;