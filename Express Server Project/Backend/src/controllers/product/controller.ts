import type {Request, Response} from "express"
import data from "../../data/data.ts"
import { ProductManager } from "./product.ts"

export const getProducts = (req: Request, res: Response) => {
    const products = new ProductManager(data)
    res.json(products.allProducts);
} 

export const createProduct = (req: Request, res: Response) => {
    const newProduct = new ProductManager(req.body)
    const products = new ProductManager(data)
    products.addProduct(newProduct)

    res.json({message: "Product created", product: newProduct.toJSON()})
}
export const updateProduct = (req: Request, res: Response) => {
    const {id} = req.params;
    const updatedProduct = req.body
    const products = new ProductManager(data)
    const result = products.modifyProduct(parseInt(id), updatedProduct)

    if (!result) {
        return res.status(404).json({message: `Product with id ${id} not found`});
    }

    console.log(`Updating product with id: ${id}`)
    res.json({message: `Product with id ${id} updated`, product: result.toJSON()})
}
export const deleteProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Deleting product with id: ${id}`)
    res.json({message: `Product with id ${id} deleted`})
}
export const getProductById = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Fetching product with id: ${id}`)
    res.json({message: `Product with id ${id} fetched`})
}
export const patchProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Patching product with id: ${id}`)
    res.json({message: `Product with id ${id} patched`})
}
