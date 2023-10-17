const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");
const express = require("express");
const app = express();

// node.js lai form bata aako data parse gar vaneko ho (buj vaneko)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

// GET API -->
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
  });
});

// GET API => /blogs (All blogs)
app.get("/blogs", async (req, res) => {
  // fetching/reading all blogs from blogs model
  const blogs = await Blog.find();
  // check if blogs contains data or not
  if (blogs.length == 0) {
    res.json({
      status: 404,
      message: "Empty blogs",
    });
  } else {
    res.json({
      status: 200,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  }
});

// GET API -> /blogs/:id (single Blog)
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  // const {id} = req.params  (alternative ma)
  // const blog = await Blog.find({ _id: id }); // (Or)
  // if (blog.length == 0) {
  //   res.json({
  //     status: 404,
  //     message: "No blogs here",
  //   });
  // } else {
  //   res.json({
  //     status: 500,
  //     message: "Single blogs fetched",
  //     data: blog,
  //   });
  // }

  // alternative...
  const blog = await Blog.findById(id);
  if (blog) {
    res.status(200).json({
      message: "Blog fetched successfully",
      data: blog,
    });
  } else {
    res.status(404).json({
      message: "No blog found",
    });
  }
});

// CREATE BLOG API:
app.post("/createBlog", async (req, res) => {
  const title = req.body.title;
  const subTitle = req.body.subTitle;
  const description = req.body.description;

  // Alternative (object destructuring)
  // const {title, subTitle, description} = req.body

  // Insert to database logic goes here...
  await Blog.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });

  res.json({
    status: 201,
    message: "Blog created successfully",
  });

  // Alternative...:
  // res.status(200).json({
  //   message : 'Blog created successfully'
  // })
});

app.listen(2000, () => {
  console.log("Node.js has started at port 2000");
});
