import express from "express"
import productRoutes from "./routes/product.routes.js"
import cartsRoutes from "./routes/cart.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 5000



app.use("/api/products", productRoutes)
app.use("/api/carts", cartsRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})


