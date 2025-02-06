import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/sliceProducts";
import { selectProducts, selectProductStatus, selectProductError } from "../redux/selectors/selectors";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { products, status, error };
};

export default useProducts;