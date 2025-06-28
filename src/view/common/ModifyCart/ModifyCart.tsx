import {useState} from 'react';
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";
import type {ProductData} from "../../../model/ProductData.ts";

interface ModifyCartProps {
    data: {product: ProductData};
}

export function ModifyCart({data}: ModifyCartProps) {

    const dispatch = useDispatch<AppDispatch>();

    const [itemCount, setItemCount] = useState(1);

    // remove use effect
    /*useEffect(() => {
        const existingItem = itemsList.find(item => item.product.id === data.product.id);

        if (existingItem) {
            existingItem.itemCount = itemCount;
        } else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount
            })
        }
        console.log(itemsList);

    }, [itemCount, data]);*/

    const increaseItemCount = () => {
        setItemCount((prev) => prev + 1);
        dispatch(increaseQuantity(data.product.id))
    };

    const decreaseItemCount = () => {
        /*if (itemCount <= 1) {
            alert('Quantity cannot be less than 1');
            return;
        }
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));*/
        if (itemCount > 1) {
            setItemCount((prev) => prev - 1);
            dispatch(decreaseQuantity(data.product.id));
        } else {
            alert('Quantity cannot be less than 1');
        }
    };

    return (
        <div className="flex items-center justify-center mt-3 gap-2">
            <button
                className="bg-yellow-600 text-white w-8 h-8 rounded-full hover:bg-yellow-500 transition duration-200 text-lg font-semibold"
                onClick={decreaseItemCount}>-
            </button>
            <small className="text-sm font-medium text-gray-800 w-8 text-center">
                {itemCount}
            </small>
            <button
                className="bg-blue-600 text-white w-8 h-8 rounded-full hover:bg-blue-500 transition duration-200 text-lg font-semibold"
                onClick={increaseItemCount}>+
            </button>
        </div>
    );
}