import "./Home.css";
import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productSlice.ts";

/*type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}*/

export function Home() {

    const dispatch = useDispatch<AppDispatch>();

    const {list} = useSelector((state: RootState) => state.products); // Access the products from the Redux store

    // const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        /*const fetchData = async () => {
            try {
                const response = await fetch('./product-data.json');
                const jsonData = await response.json();
                // console.log(jsonData);
                setProducts(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();*/
        dispatch(getAllProducts());

    }, []);
    return (
        <div className="p-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        list.map((product) => (
                            <Product key={product.id} data={product}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}