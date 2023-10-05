const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: Data,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose;
