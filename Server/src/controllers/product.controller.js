import Product from '../models/product.models.js';
import User from "../models/users.models.js"
import slugify from 'slugify';
import uploadOnCloudinary from '../utils/Cloudinary.js';


// 
const createProduct = async (req, res) => {
  try {
    console.log('Product Body=> ', req.body);
    req.body.slug = slugify(req.body.title);
    
    const product = await Product.create(req.body);

    const result = await uploadOnCloudinary(req.file.path)
    product.images = result.url;
    await product.save();

    res.status(200).json({
      success: true,
      data: product,
      message: 'Product created successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'Create Product Failed',
      error: error.message,
    });
  }
};


const allProduct = async (req, res) => {
  let products = await Product.find({})
    .populate('category')
    .populate('subs')
    .sort([['createdAt', 'desc']]);
    res.json(products);

};
const removeProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({
      slug: req.params.slug,
    });
    res.json(deleted);
  } catch (error) {
    console.log(error);
    return res.status(400).send('Product delete failed');
  }
};
const readProduct = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate('category').populate('subs');
  res.json(product);
};
const catProducts = async(req,res) =>{
  const catPro = await Product.find({category:req.params.id})
  res.json(catPro)
}
const subCatProducts =async(req,res) =>{
  const subCatPro = await Product.find({subs:req.params.id})
  res.json(subCatPro)
}
const updateProduct = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    if(req.file){
      const result = await uploadOnCloudinary(req.file.path)
      req.body.images=result.url;
      // updated.images = result.url;
      // await updated.save();
    }
    const updated = await Product.findByIdAndUpdate(req.body._id, req.body, { new: true }).exec();
    console.log('Product...', updated);
    res.json(updated);
  } catch (err) {
    console.log('PRODUCT UPDATE ERROR ----> ', err);
    return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};
// exports.list = async (req, res) => {
//     try {
//         const { sort, order, limit } = req.body;
//         const products = await Product.find({})
//             .populate("category")
//             .populate("subs")
//             .sort([[sort, order]])
//             .limit(limit);
//         res.json(products);
//     } catch (error) {
//         console.log(error);
//     }
// };
// With Pagination
const list= async (req, res) => {
  try {
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 8;

    const products = await Product.find({})
      .skip((currentPage - 1) * perPage)
      .populate('category')
      .populate('subs')
      .sort([[sort, order]])
      .limit(perPage);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
const productsCount = async (req, res) => {
  let total = await Product.find({}).estimatedDocumentCount();
  res.json(total);
};
const productStar = async (req, res) => {
  const product = await Product.findById(req.params.productId).exec();
  const user = await User.findOne({ email: req.user.email }).exec();
  const { star } = req.body;

  // who is updating?
  // check if currently logged in user have already added rating to this product?
  let existingRatingObject = product.ratings.find((ele) => ele.postedBy.toString() === user._id.toString());

  // if user haven't left rating yet, push it
  if (existingRatingObject === undefined) {
    let ratingAdded = await Product.findByIdAndUpdate(
      product._id,
      {
        $push: { ratings: { star, postedBy: user._id } },
      },
      { new: true },
    ).exec();
    console.log('ratingAdded', ratingAdded);
    res.json(ratingAdded);
  } else {
    // if user have already left rating, update it
    const ratingUpdated = await Product.updateOne(
      {
        ratings: { $elemMatch: existingRatingObject },
      },
      { $set: { 'ratings.$.star': star } },
      { new: true },
    ).exec();
    console.log('ratingUpdated', ratingUpdated);
    res.json(ratingUpdated);
  }
};

const listRelated = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const related = await Product.find({
    _id: { $ne: product._id },
    category: product.category,
  })
    .limit(3)
    .populate('category')
    .populate('subs');
  res.json(related);
};
const handleQuery = async (req, res, query) => {
  const products = await Product.find({ $text: { $search: query } })
    .populate('category', '_id name')
    .populate('subs', '_id name');
  res.json(products);
};
const handlePrice = async (req, res, price) => {
  try {
    const products = await Product.find({
      price: {
        $gte: price[0],
        $lte: price[1],
      },
    })
      .populate('category', '_id name')
      .populate('subs', '_id name');
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
const handleCategory = async (req, res, category) => {
  try {
    const products = await Product.find({ category }).populate('category', '_id name').populate('subs', '_id name');
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
// const handleStar = (req, res, stars) => {
//   Product.aggregate([
//     {
//       $project: {
//         document: '$$ROOT',
//         // title: "$title",
//         floorAverage: {
//           $floor: { $avg: '$ratings.star' }, // floor value of 3.33 will be 3
//         },
//       },
//     },
//     { $match: { floorAverage: stars } },
//   ])
//     .limit(12)
//     .exec((err, aggregates) => {
//       if (err) console.log('AGGREGATE ERROR', err);
//       Product.find({ _id: aggregates })
//         .populate('category', '_id name')
//         .populate('subs', '_id name')
//         .exec((err, products) => {
//           if (err) console.log('PRODUCT AGGREGATE ERROR', err);
//           res.json(products);
//         });
//     });
// };
const handleSub = async (req, res, sub) => {
  const products = await Product.find({ subs: sub }).populate('category', '_id name').populate('subs', '_id name');
  res.json(products);
};
const handleShipping = async (req, res, shipping) => {
  const products = await Product.find({ shipping }).populate('category', '_id name').populate('subs', '_id name');
  res.json(products);
};
const searchFilters = async (req, res) => {
  const { query, price, category, sub, shipping, } = req.body;
  if (query) {
    console.log('query', query);
    await handleQuery(req, res, query);
  }
  if (price !== undefined) {
    console.log('Price', price);
    await handlePrice(req, res, price);
  }
  if (category) {
    console.log('Price', price);
    await handleCategory(req, res, category);
  }
  // if (stars) {
  //   console.log('Stars', stars);
  //   await handleStar(req, res, stars);
  // }
  if (sub) {
    await handleSub(req, res, sub);
  }
  if (shipping) {
    await handleShipping(req, res, shipping);
  }
};

export{
  createProduct,
  updateProduct,
  removeProduct,
  list,
  allProduct,
  searchFilters,
  readProduct,
  productsCount,
  listRelated,
  catProducts,
  subCatProducts
}