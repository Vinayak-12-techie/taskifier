import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is Required."],
  },
  prompt: {
    type: String,
    required: [true, "Description is required."],
  },
  tag: {
    type: String,
    required: [true, "Status is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
