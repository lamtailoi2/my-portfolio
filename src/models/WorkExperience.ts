import mongoose from "mongoose";

const WorkExperienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    isCurrentRole: { type: Boolean, default: false },
    description: [{ type: String }],
    technologies: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.WorkExperience ||
  mongoose.model("WorkExperience", WorkExperienceSchema);
