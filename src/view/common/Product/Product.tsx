import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*', {
    eager: true, import: 'default'
});

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];

    const dispatch = useDispatch<AppDispatch>();

    const item = useSelector((state: RootState) =>
        state.cart.items.find(cartItem => cartItem.product.id === data.id));

    const [isHovered, setIsHovered] = useState(false);

    const addToCart = () => {
        dispatch(addItemToCart(data))
        // setIsActive(true);
    }

    return (
        <div
            className="relative bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:border-gray-200 hover:-translate-y-1 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Premium accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

            <div className="relative flex items-center p-6">
                {/* Enhanced image container */}
                <div className="relative">
                    <div
                        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl transition-all duration-500 ${isHovered ? 'scale-105 shadow-lg' : ''}`}></div>
                    <img
                        className={`relative h-28 w-28 object-contain rounded-xl p-2 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
                        src={image}
                        alt="Apple AirTag"
                    />
                    {/* Subtle glow effect */}
                    <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200/20 to-purple-200/20 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}></div>
                </div>

                <div className="ml-8 flex-1">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 leading-tight tracking-tight">
                            {data.name}
                        </h3>

                        {/* Advanced price badge */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-slate-100 to-gray-100 rounded-xl blur-sm opacity-70"></div>
                            <div
                                className="relative bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
                                <span className="text-base font-bold text-gray-800 tracking-tight">
                                    {data.price}
                                </span>
                                <span className="text-xs font-medium text-gray-500 ml-1 uppercase tracking-wider">
                                    {data.currency}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action area */}
                    <div className="flex justify-center">
                        {
                            item ? (
                                <div className="w-full animate-in slide-in-from-bottom-4 duration-500">
                                    <ModifyCart data={{
                                        product: data
                                    }}/>
                                </div>
                            ) : (
                                <button
                                    className="group/btn relative w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white text-sm font-medium py-3 px-6 rounded-xl overflow-hidden transition-all duration-300 hover:from-slate-700 hover:to-slate-600 hover:shadow-lg hover:shadow-slate-800/25 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-[0.98]"
                                    onClick={addToCart}
                                >
                                    {/* Button background effect */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                                    {/* Button content */}
                                    <span className="relative flex items-center justify-center">
                                        <span className="tracking-wide">Add to Cart</span>

                                        {/* Animated arrow */}
                                        <svg
                                            className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M12 4v16m8-8l-8 8-8-8"/>
                                        </svg>
                                    </span>

                                    {/* Ripple effect */}
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:animate-pulse bg-white/5"></div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Bottom subtle gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
    );
}