import type {Request, Response} from "express"
import data from "../../data/data.ts"
import { Product, ProductManager, type IProduct } from "./product.ts"

export const getProducts = (req: Request, res: Response) => {
    const products = new ProductManager(data)
    res.json(products.allProductsData)
} 

export const createProduct = (req: Request, res: Response) => {
    const newProduct : Product = new Product(req.body)
    const products : ProductManager = new ProductManager(data)
    const product : Product | boolean = products.addProduct(newProduct)
    if (!product) {
        return res.status(400).json({message: "Product could not be created"})
    }
    
    res.json({message: "Product created", product: newProduct.toJSON()})
}
export const updateProduct = (req: Request, res: Response) => {
    const {id} = req.params
    const updatedData : IProduct = req.body
    const products : ProductManager = new ProductManager(data)
    const product : Product | boolean = products.updateProduct(parseInt(id as string), updatedData)
    if (!checkRequiredfields(updatedData,new Product().toJSON())) {
        res.status(400).json({message: "Missing required fields"})
        return
    }

    if (!product) {
       const createdProduct = products.addProduct(updatedData)
       if (!createdProduct) {
        return res.status(400).json({message: "Product could not be created"})
       }
       return res.status(201).json({message: "Product created", product: createdProduct})
    }
    res.status(200).json({message: "Product updated", product: (product as Product).toJSON()})
}
export const deleteProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Deleting product with id: ${id}`)
    res.json({message: `Product with id ${id} deleted`})
}
export const getProductById = (req: Request, res: Response) => {
    const {id} = req.params
    const products = new ProductManager(data)
    const product :Product | undefined = products.getProductById(parseInt(id as string))
        if (!product) { 
            return res.status(404).json({message: "Product not found"})
        }
    
    res.json(product.toJSON())
}
export const patchProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Patching product with id: ${id}`)
    res.json({message: `Product with id ${id} patched`})
}

const checkRequiredfields = (body : IProduct, product: IProduct) : boolean => {
    
        if (!body || typeof body !== 'object') {
            return false
        }
        const requiredFields = Object.keys(product).filter(key=> key !== 'id'); 
        console.log(requiredFields)
        return requiredFields.every(field => body.hasOwnProperty(field));
    }