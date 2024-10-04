import { BsTrash } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/api";

function Basket({basket, setBasket}) {

    const handleIncrement = (id) => {

        setBasket(basket.map(item => 
            item.id === id ? { ...item, count: (item.count || 1) + 1 } : item
        ));

    };

    const handleDecrement = (id) => {
        setBasket(basket.map(item =>
            item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item));
    }

    const handleRemove = (id) => {
        setBasket(basket.filter(item => item.id !== id));
    }

    const total = basket?.reduce((total, item) => total + item?.price * item?.count, 0).toFixed(2)

    return (
        <section className="bg-slate-50">
            <div className="wrapper flex flex-col gap-[2.5vw] lg:flex-row px-3">
                <div className="lg:w-[660px] w-full">
                    <div className="flex items-center py-4 border-b">
                        <h2 className="text-lg font-semibold mr-2">Sepetim</h2>
                        <span className="text-[.8em] text-gray-400">{basket.length} ürün eklendi</span>
                    </div>
                    <div onClick={() => setBasket([])} className="flex cursor-pointer items-center pt-2.5 pb-2 justify-end gap-1"><BsTrash className="text-lg" />Sil</div>

                    {
                       <div className="text-cneter text-[2em]">{ basket.length == 0 ? "Kasıbsan heçnə alammırsan!" : ''}</div>
                    }
                    <div className="cards pb-5">
                        {basket.map((item, i) => {
                            const { name, id, imageUrl, price, count } = item;
                            return (
                                <Link key={i} className='bg-white shadow-sm my-2 rounded-2xl p-2 flex flex-row items-center gap-5'>
                                    <div className='inline-flex p-1 m-1'>
                                        <img src={imageUrl} className='w-24 border rounded-xl object-cover' alt={name} />
                                    </div>
                                    <div className='flex items-start sm:items-center flex-col sm:flex-row gap-3 w-full justify-between'>
                                        <div>
                                            <p className="font-semibold">{name}</p>
                                            <p className='text-lg'>{price} tl</p>
                                        </div>
                                        <div className='border flex items-center rounded-full'>
                                            {count > 1 ? (
                                                <AiFillMinusCircle
                                                    onClick={() => handleDecrement(id)}
                                                    className="text-[#00BAD3] cursor-pointer text-[30px] block"
                                                />
                                            ) : (
                                                <BsTrash
                                                    onClick={() => handleRemove(id)}
                                                    className="text-white bg-[#00BAD3] rounded-full w-[26px] h-[26px] cursor-pointer px-[5px] text-[15px]"
                                                />
                                            )}
                                            <span className='mx-5'>{count}</span>
                                            <AiFillPlusCircle
                                                onClick={() => handleIncrement(id)}
                                                className="text-[#00BAD3] cursor-pointer text-[30px] block"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="lg:w-[460px] w-full">
                    <h2 className="text-lg font-semibold pt-4">Sepet Özeti</h2>
                    <p className="flex gap-2 items-center text-green-600 text-sm font-semibold py-2">
                        <CiCircleCheck className="text-2xl" />Ücretsiz Teslimat
                    </p>
                    <div className="bg-white p-5 rounded-2xl">
                        <div className="flex justify-between items-center pb-4">
                            <p className="text-sm">Sepet Tutarı</p>
                            <p>₺{total}</p>
                        </div>
                        <div className="flex justify-between border-b pb-4 items-center">
                            <p className="text-sm">Kargo Ücreti</p>
                            <p>₺0,00</p>
                        </div>
                        <div className="flex justify-between pt-5 items-center">
                            <p className="font-semibold">Toplam</p>
                            <p>₺{total}</p>
                        </div>
                    </div>
                    <button className="bg-[#00BAD3] my-7 rounded-full w-full text-white py-3">Devam et</button>
                </div>
            </div>
        </section>
    );
}

export default Basket;
