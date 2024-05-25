import { createReducer, on } from '@ngrx/store';
import { Producto } from '../../models/producto.model';
import { ProductosActions, ProductosApiActions } from '../actions/books.action';



export const initialState: Producto[] = [];

export const productosReducer = createReducer(
  initialState,
  on(ProductosActions.addProducto, (_state, { producto }) => [..._state, producto]),
  on(ProductosActions.removeProducto, (_state, { productoId }) => _state.filter(producto => producto.id !== productoId)),
  on(ProductosApiActions.retrievedBookList, (_state, { productos }) => productos),
);