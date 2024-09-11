import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go";

function Campaigns() {

    return (
        <section className="bg-slate-50">
            <div className="wrapper">
                <div className="py-5 px-2 flex items-center">
                    <Link className="text-sm" to={'/'}>Ana Sayfa </Link>
                    <GoChevronRight />
                    <span className="text-sm"> Kampanyalar</span>
                </div>
                <div className="flex items-center bg-white rounded-3xl mx-2">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-xl text-center py-5">
                            <svg width="80" height="80" className="m-auto my-2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="#F5F7FA"></circle><path fillRule="evenodd" clipRule="evenodd" d="M29.4531 29.7002H49.6578C49.5158 29.6796 49.3705 29.6689 49.2228 29.6689H48.1765C48.6846 28.9457 48.9088 28.0611 48.8066 27.1831C48.7045 26.3054 48.2829 25.4957 47.6222 24.9086C46.9617 24.3218 46.1082 23.9981 45.2243 24C42.1915 24 40.4417 26.4587 39.5554 28.2931C38.6691 26.4587 36.9193 24 33.8865 24C33.0026 23.9982 32.1491 24.3218 31.4886 24.9086C30.8279 25.4957 30.4064 26.3054 30.3042 27.1831C30.202 28.0611 30.4263 28.9457 30.9343 29.6689H29.8881C29.7404 29.6689 29.5952 29.6796 29.4531 29.7002ZM32.0993 26.5734C32.4682 25.9347 33.1494 25.5414 33.8868 25.5414C36.4725 25.5414 37.887 28.1927 38.4766 29.6688H33.8868C33.1494 29.6688 32.4682 29.2755 32.0993 28.6368C31.7308 27.9984 31.7308 27.2118 32.0993 26.5734ZM46.6812 26.1349C47.0677 26.5212 47.2852 27.0452 47.2863 27.5917C47.2863 28.1387 47.0691 28.6638 46.6826 29.0509C46.2962 29.4382 45.7718 29.6562 45.2244 29.6573H40.6383C41.2319 28.1812 42.6577 25.5298 45.2244 25.5298C45.7709 25.5309 46.2949 25.7484 46.6812 26.1349Z" fill="#00BAD3"></path><path fillRule="evenodd" clipRule="evenodd" d="M29.564 29.7002C28.1133 29.9109 26.999 31.1598 26.999 32.6689V37.8238V48.9941C26.999 50.651 28.3422 51.9941 29.999 51.9941H49.3337C50.9905 51.9941 52.3337 50.651 52.3337 48.9941V37.8238V32.6689C52.3337 31.1598 51.2194 29.9109 49.7687 29.7002H29.564ZM50.7924 33.2105V36.282H40.4374V31.2105H48.7924C49.8969 31.2105 50.7924 32.1059 50.7924 33.2105ZM50.7924 48.4523C50.7924 49.5569 49.8969 50.4523 48.7924 50.4523H40.4373V37.8235H50.7924V48.4523ZM30.5407 50.4524C29.4362 50.4523 28.5408 49.5569 28.5408 48.4524V37.8238H38.8958V50.4526L30.5407 50.4524ZM38.8957 36.282H28.5408V33.2105C28.5408 32.1059 29.4362 31.2105 30.5408 31.2105H38.8957V36.282Z" fill="black"></path></svg>
                            <p className="text-xl font-semibold py-2">Henüz bir kampanya yok</p>
                            <p className="my-1 text-sm mb-10 dark:text-gray-600">Senin için çok özel fırsatlar hazırlıyoruz, bir süre sonra tekrar göz atmayı unutma.</p>
                            <Link to='/' rel="noopener noreferrer" className="px-[3vw] py-3 rounded-full bg-[#00BAD3] text-white">Ürünlere göz at</Link>
                        </div>
                    </div>
                </div> <br />
            </div>
        </section>
    )
}

export default Campaigns