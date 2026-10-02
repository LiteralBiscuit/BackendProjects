import type {Request, Response} from "express"
import data from "../../data/data.ts"
import { Product, ProductManager } from "./product.ts"
const productManager = new ProductManager(data)

export const getProducts = (req: Request, res: Response) => {
    res.json(productManager.allProductsData)
} 

export const createProduct = (req: Request, res: Response) => {
    const newProduct = new Product(req.body)
    productManager.addProduct(newProduct)
    res.json({message: "Product created", product: newProduct.toJSON()})
}
export const updateProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const result = productManager.updateProduct(id, req.body)
    result == undefined ? res.json({message: "404 not found"}) : res.json({message : `Updated product at ${id}`, product: result.toJSON()})
}
export const deleteProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const result = productManager.deleteProduct(id);
    !result ? res.json({message: "404 not found"}) : res.json({message : `Deleted product at ${id}`})
}
export const getProductById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const result = productManager.getById(id)
    result == undefined ? res.json({message: "404 not found"}) : res.json({message : `Fetched product at ${id}`, product: result.toJSON()})
}
export const patchProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const result = productManager.patchProduct(id, req.body)
    result == undefined ? res.json({message: "404 not found"}) : res.json({message : `Patched product at ${id}`, product: result.toJSON()})
}

