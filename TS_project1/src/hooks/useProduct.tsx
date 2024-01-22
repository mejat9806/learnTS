import { useContext } from "react";
import ProductContext, {
  UseProductContextType,
} from "../context/ProductProvider";

function useProduct(): UseProductContextType {
  return useContext(ProductContext);
}

export default useProduct;
