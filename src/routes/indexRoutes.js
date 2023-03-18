import { Router } from "express";
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";
import Productos from "../models/Productos";

const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/update", renderEditProducto);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/status", statusProductos);

export default router;
