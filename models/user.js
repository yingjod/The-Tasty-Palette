/* eslint-disable comma-dangle */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json){
    delete json.password
  }
})

userSchema
  .virtual('recipesCreated', {
    ref: 'Recipe',
    localField: '_id',
    foreignField: 'owner',
  })


userSchema
  .virtual('passwordConfirmation')
  .set(function(value){
    this._passwordConfirmation = value
  })

userSchema.pre('validate', function(next){
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'Make sure the password match')
  }
  next()
})

userSchema.pre('save', function (next){
  if (this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next()
})

export default mongoose.model('User', userSchema)