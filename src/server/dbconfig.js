// src/server/dbconfig.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
    unique: true,
  },
  from: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

export const Panic = mongoose.model('Panic', UserSchema);
