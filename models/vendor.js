import mongoose from "mongoose";

const vendorSchema = mongoose.Schema(
  {
    name: { type: String, required: true , unique: true},
    description: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "City",
    },
    area: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Area",
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;