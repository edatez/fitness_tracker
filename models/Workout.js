const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const workout = new Schema({
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
            duration: {
                type: Number,
                required: "Please enter a workout duration."
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
}, opts);

workout.virtual("totalDuration").get(function() {
    let totalDuration = 0;
    this.exercises.forEach( exercise => {
        totalDuration += exercise.duration;
    });
    return totalDuration;
});

// const opts = { toJSON: { virtuals: true } };
// const userSchema = mongoose.Schema({
//     _id: Number,
//     email: String
//   }, opts);
//   // Create a virtual property `domain` that's computed from `email`.
//   userSchema.virtual('domain').get(function() {
//     return this.email.slice(this.email.indexOf('@') + 1);
//   });
//   const User = mongoose.model('User', userSchema);
  
//   const doc = new User({ _id: 1, email: 'test@gmail.com' });
  
//   doc.toJSON().domain; // 'gmail.com'
//   // {"_id":1,"email":"test@gmail.com","domain":"gmail.com","id":"1"}
//   JSON.stringify(doc); 
  
//   // To skip applying virtuals, pass `virtuals: false` to `toJSON()`
//   doc.toJSON({ virtuals: false }).domain; // undefined


const Workout = mongoose.model("Workout", workout);

module.exports = Workout;