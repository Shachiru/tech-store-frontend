import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

export function ShoppingCart() {
    const {items} = useSelector((state: RootState) => state.cart)   // Access the cart from the store

    return (
        <div className="flex justify-center items-center px-6 py-8">
            <div className="w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden bg-white">
                <table className="min-w-full border-collapse">
                    <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        <th className="text-sm font-medium border-r border-indigo-500/30 py-4 px-6">Id</th>
                        <th className="text-sm font-medium border-r border-indigo-500/30 py-4 px-6">Name</th>
                        <th className="text-sm font-medium border-r border-indigo-500/30 py-4 px-6">Unit Price</th>
                        <th className="text-sm font-medium border-r border-indigo-500/30 py-4 px-6">Quantity</th>
                        <th className="text-sm font-medium py-4 px-6">Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-6 bg-gray-50">
                                    <p className="text-center text-base text-gray-600 font-medium">No Items in Cart</p>
                                </td>
                            </tr>
                        ) : (
                            items.map((item, index) => (
                                <tr key={item.product.id}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} 
                                    hover:bg-indigo-50 transition-colors duration-200 border-b border-gray-200`}>
                                    <td className="text-center py-4 px-6 text-gray-700">{item.product.id}</td>
                                    <td className="text-center py-4 px-6 text-gray-700">{item.product.name}</td>
                                    <td className="text-center py-4 px-6 text-gray-700">{item.product.price}{item.product.currency}</td>
                                    <td className="text-center py-4 px-6 text-gray-700">{item.itemCount}</td>
                                    <td className="text-center py-4 px-6 text-gray-700">{item.product.price * item.itemCount}{item.product.currency}</td>
                                </tr>
                            ))
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}