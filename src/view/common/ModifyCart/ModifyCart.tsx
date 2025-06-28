import {useEffect, useState} from 'react';
import type {CartItem} from "../../../model/CartItem.ts";

interface ModifyCartProps {
    data: any;
}

export const itemsList: CartItem[] = [];

export function ModifyCart({data}: ModifyCartProps) {

    const [itemCount, setQuantity] = useState(1);

    useEffect(() => {
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

    }, [itemCount, data]);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (itemCount <= 1) {
            alert('Quantity cannot be less than 1');
            return;
        }
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="flex items-center justify-center mt-3 gap-2">
            <button
                className="bg-yellow-600 text-white w-8 h-8 rounded-full hover:bg-yellow-500 transition duration-200 text-lg font-semibold"
                onClick={handleDecrement}>-
            </button>
            <small className="text-sm font-medium text-gray-800 w-8 text-center">
                {itemCount}
            </small>
            <button
                className="bg-blue-600 text-white w-8 h-8 rounded-full hover:bg-blue-500 transition duration-200 text-lg font-semibold"
                onClick={handleIncrement}>+
            </button>
        </div>
    );
}