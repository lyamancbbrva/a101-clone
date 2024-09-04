import { GoHeart } from "react-icons/go";
export default function Cart() {
    return (
        <div className="max-w-[200px] p-3 rounded-2xl border-gray-200 border relative bg-white">
            <div className="text-center py-1">aldun aldun</div>
            <GoHeart className="text-2xl absolute right-3 top-8"/>
            <img src="src/assets/img/test.jpg" alt="" className="object-cover object-center w-full rounded-md dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-sm font-semibold tracking-wide">Lemanin yixildigi skuter</h2>
            </div>
            <p className="text-red-600 text-lg font-semibold mb-3">₺999,09</p>
            <button className="bg-[#00BAD3] text-white rounded-3xl py-1.5 text-sm w-full">Sepete Ekle</button>
        </div>
    )
}