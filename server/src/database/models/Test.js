import mongoose from "mongoose";

const schema = mongoose.Schema;

const testSchema = new schema({
  testId: String,
  question: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    unique: true,
    default: Date.now()
  },
  authorId: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  }
});

export default mongoose.model("Test", testSchema);
