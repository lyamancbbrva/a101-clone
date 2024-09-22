import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { loginAuth } from "../../api/api";
import toast from "react-hot-toast";
import { Cookies } from "react-cookie";

const cook = new Cookies();

export default function Login() {
    
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  async function handleLogin(e) {

    e.preventDefault();

    const obj = { username: login, password };

    if (password.trim().length < 8) {
      toast.error("sifre 8 simvol olmalidi agilli");
    }

    const user = await loginAuth(obj);

    if (user.status == true) {
      toast.success("Giris olundu");
      cook.set("resfresh", user.refresh);
      cook.set("token", user.token);
      window.location.href = "/admin";
    } else if (user.status == 400) {
      toast.error("Username ve ya password sehvdi!");
    }
  }

  return (
    <div className="flex justify-center mt-[15vh] items-center ">
      <div className="shadow-xl rounded-[5px] max-w-[70vw] md:max-w-[50vw] lg:max-w-[30vw] xl:max-w-[25vw] min-h-full px-4 text-center py-7 sm:p-0">
        <div className="py-7">
          <h5 className="text-[1.5em] font-semibold text-center py-3">
            Giriş Yap
          </h5>
        </div>
        <form>
          <div className="mt-5 sm:mt-4 gap-3 px-5 justify-center flex-col flex">
            <input
              onInput={(e) => setLogin(e.target.value)}
              type="text"
              placeholder="Adınız..."
              className="w-full outline-none rounded-full border p-4"
            />
            <div className="relative">
              <input
                onInput={(e) => setPassword(e.target.value)}
                type={type}
                placeholder="••••••••"
                className="w-full outline-none rounded-full border p-4"
              />

              {type == "password" ? (
                <IoEyeOffOutline
                  onClick={() => setType("text")}
                  className="absolute text-[1.2em] top-5 right-5"
                />
              ) : (
                <IoEyeOutline
                  onClick={() => setType("password")}
                  className="absolute text-[1.2em] top-5 right-5"
                />
              )}
            </div>
            <button
              onClick={handleLogin}
              type="button"
              className="mt-1 w-full rounded-full border text-center border-[#8D939C] bg-[#278D9B] p-4 text-white font-thin"
            >
              Giriş yap
            </button>
          </div>
        </form>
        <div className="py-8 flex px-5 justify-between items-start gap-`">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
              stroke="#8D939C"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.73363 13.4002L10.267 13.4002C10.2793 13.4002 10.2904 13.4012 10.3003 13.4028L10.3003 14.3978C10.2904 14.3994 10.2793 14.4004 10.267 14.4004L9.73363 14.4004C9.72132 14.4004 9.71016 14.3994 9.70029 14.3978L9.70029 13.4028C9.71016 13.4012 9.72132 13.4002 9.73363 13.4002ZM9.73363 6.0002L10.267 6.0002C10.2793 6.0002 10.2904 6.0012 10.3003 6.00282L10.3003 10.7976C10.2904 10.7992 10.2793 10.8002 10.267 10.8002L9.73363 10.8002C9.72132 10.8002 9.71016 10.7992 9.70029 10.7976L9.70029 6.00282C9.71016 6.0012 9.72132 6.0002 9.73363 6.0002Z"
              fill="#8D939C"
              stroke="#8D939C"
            ></path>
          </svg>
          <p className="text-xs text-[#333]">
            Doğrulama süreçleri kapsamındaki kişisel veri işleme faaliyetine
            ilişkin aydınlatma metni için
            <a href="" className="text-[#00BAD3] ml-1">
              tıklayın
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
