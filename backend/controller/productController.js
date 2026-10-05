
import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";
export const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
}
export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
}


export const updateProduct = async (req, res, next) => {

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if(!product){
        return next(new HandleError("Product Not Found", 404))
    }
    res.status(200).json({ success: true, product });
}   

export const deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new HandleError("Product Not Found", 404))
    }
    await product.deleteOne();
    res.status(200).json({ success: true, message: "Product deleted successfully" });
}

export const getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new HandleError("Product Not Found", 404));
    }
    return res.status(200).json({ success: true, product });
}