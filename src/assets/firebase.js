import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactjs-vysor.firebaseapp.com",
  projectId: "reactjs-vysor",
  storageBucket: "reactjs-vysor.appspot.com",
  messagingSenderId: "451619616360",
  appId: "1:451619616360:web:b19f00bf7fa81cebadaddd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBDD = async () => {
  const promise = await fetch("./json/productos.json");
  const productos = await promise.json();
  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      marca: prod.marca,
      modelo: prod.modelo,
      idCategoria: prod.idCategoria,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img,
    });
  });
};

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

const getProducto = async (id) => {
  const prod = await getDoc(doc(db, "productos", id));
  let item;
  if (prod.data()) {
    item = { ...prod.data(), id: prod.id };
  } else {
    item = "Producto no encontrado";
  }
  return item;
};

const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {
    nombre: objProducto.nombre,
    marca: objProducto.marca,
    modelo: objProducto.modelo,
    idCategoria: objProducto.idCategoria,
    stock: objProducto.stock,
    precio: objProducto.precio,
    img: objProducto.img,
  });
  return estado;
};

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info);
  return estado;
};

const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, "productos", id));
  return estado;
};

const createOrdenCompra = async (cliente, preTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    email: cliente.email,
    dni: cliente.dni,
    direccion: cliente.direccion,
    fecha: fecha,
    precioTotal: preTotal,
  });

  return ordenCompra;
};

const getOrdenCompra = async (id) => {
  const item = await getDoc(doc(db, "ordenCompra", id));
  const ordenCompra = { ...item.data(), id: item.id };
  return ordenCompra;
};

export {
  cargarBDD,
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
  createOrdenCompra,
  getOrdenCompra,
};
