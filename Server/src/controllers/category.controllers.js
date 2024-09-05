import Category from "../models/category.models.js";
import Product from "../models/product.models.js";
import SubCategory from "../models/subCategory.models.js"
import slugify from "slugify";

//Create Category
const createCategory = async (req,res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const category = new Category({
      name,
      slug: slugify(name),
    }).save();

    res.json({ category });
  } catch (error) {
    console.log(error);
    res.status(400).send("Creating category failed");
  }
};

//List of All Category
const listCategory = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: 1 }).exec();
  res.json(categories);
};

//Read or Display Category
const readCategory = async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug }).exec();
  const products = await Product.find({ category }).populate('category');
  res.json({ category ,products});
};

//Update Category
const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const update = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(update);
  } catch (error) {
    res.status(400).send("Category update failed");
  }
};

//Remove Category
const removeCategory = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({
      slug: req.params.slug,
    });
    res.json({ deleted, message: "Category deleted" });
  } catch (error) {
    res.status(400).send("Category deleted failed");
  }
};

const getSubs = async (req, res) => {
  const subs = await SubCategory.find({ parent: req.params.id });
  res.json(subs);
};


export{
  createCategory,
  listCategory,
  readCategory,
  updateCategory,
  removeCategory,
  getSubs,
}