import mongoose from "mongoose";

const areaSchema = mongoose.Schema(
  {
    name: { type: String, required: true , unique: true},
    city: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "City",
    },
  },
  {
    timestamps: true,
  }
);

const Area = mongoose.models.Area || mongoose.model('Area', areaSchema);

export default Area;