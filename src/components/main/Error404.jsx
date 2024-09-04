import { Link } from "react-router-dom"

function Error404() {
    return (
        <section className="flex items-center p-20">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <svg width="80" className="m-auto" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="white"></circle><g clip-path="url(#clip0_8885_632606)"><rect width="47.5248" height="47.5248" transform="translate(16.6337 16.6328)" fill="white"></rect><path d="M52.0414 37.2137C52.0414 44.7467 45.9348 50.8533 38.4019 50.8533C30.869 50.8533 24.7624 44.7467 24.7624 37.2137C24.7624 29.6808 30.869 23.5742 38.4019 23.5742C45.9348 23.5742 52.0414 29.6808 52.0414 37.2137Z" stroke="#333333" stroke-width="2"></path><path d="M48.3153 48.3984L58.1334 58.2165" stroke="#333333" stroke-width="2" stroke-linecap="round"></path><path d="M42.8572 32.7578L33.9462 41.6688" stroke="#00BAD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42.8572 41.6688L33.9462 32.7578" stroke="#00BAD3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_8885_632606"><rect width="47.5248" height="47.5248" fill="white" transform="translate(16.6337 16.6328)"></rect></clipPath></defs></svg>
                    <p className="text-2xl font-semibold py-4">Üzgünüz. Aradığın ürün bulunamadı..</p>
                    <p className="my-3 mb-10 dark:text-gray-600">Yeni ürünlerimize göz atmak ister misin?</p>
                    <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded-full bg-[#00BAD3] text-white">Ana Sayfaya Dön</Link>
                </div>
            </div>
        </section>
    )
}

export default Error404