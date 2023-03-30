// const schema = new Schema({name:Connexion});
// schema.set(option, value);
// return v +'connexion';
const mongoose = require('mongoose');

const connexionSchema = mongoose.Schema({
  email:{type:String,required:true},
  password:{typr: Number,required:true}

});

module.exports = mongoose.model('connexion', connexionSchema);