import SubCategory from "../models/subCategory.models.js";
import Product from "../models/product.models.js";
import slugify from "slugify";

//Create subCategory
const createSubCategory = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const sub = new SubCategory({
      name,
      slug: slugify(name),
      parent,
    }).save();

    res.json({ sub });
  } catch (error) {
    console.log("Subcategory create error---->", error);
    res.status(400).send("Creating sub-category failed");
  }
};

//List of All subCategory
const listSubCategory = async (req, res) => {
  const subs = await SubCategory.find({}).sort({ createAt: 1 }).exec();
  res.json(subs);
};

//single SubCategory
const readSubCategory = async (req, res) => {
  const sub = await SubCategory.findOne({ slug: req.params.slug }).exec();
  const products = await Product.find({ subs: sub }).populate('category');
  res.json({ sub ,products});
};

//Update subCategory
const updateSubCategory = async (req, res) => {
  try {
    const { name, parent } = req.body;

    const sub = await SubCategory.findOneAndUpdate(
      { slug: req.params.slug },
      { name, parent,slug: slugify(name) },
      { new: true },
    )
    res.json({ sub });
  } catch (error) {
    res.status(400).send("Category update failed");
  }
};

//Remove subCategory
const removeSubCategory = async (req, res) => {
  try {
    const deleted = await SubCategory.findOneAndDelete({
      slug: req.params.slug,
    });
    res.json({ deleted, message: "Sub-Category deleted" });
  } catch (error) {
    res.status(400).send("Sub-Category deleted failed");
  }
};

export {
  createSubCategory,
  updateSubCategory,
  readSubCategory,
  listSubCategory,
  removeSubCategory,
};
