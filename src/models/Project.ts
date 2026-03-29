import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    teamSize: { type: Number, required: true },
    role: { type: String, required: true },
    status: {
      type: String,
      enum: ["completed", "in-progress"],
      required: true,
    },
    technologies: [{ type: String }],
    featured: { type: Boolean, default: false },
    links: {
      github: { type: String },
      live: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
