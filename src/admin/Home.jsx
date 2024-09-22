import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto">
      <div className="py-10 text-center md:py-20">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          A101 harca harca bitmez! (zırt)
        </h1>
        <h2 className="text-3xl font-bold pt-5 leading-none sm:text-3xl">Hoş geldin ə!</h2>
        <p className="mt-8 mb-12 text-xl">
          Lütfen aşağıdaki noktaları aklınızda bulundurun: <br />
           Şifrenizi kimseyle paylaşmayın. <br />
           İşiniz bittiğinde yönetici panelinden çıkış yapın. <br /> Aksi
          takdirde siteye uygunsuz içerik yüklenerek güvenlik riski
          oluşturulabilir. <br /> Bu kurallara uymanız güvenliğiniz ve sitenin
          bütünlüğü açısından önemlidir. <br /> Anlayışınız için teşekkür ederiz...
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            to="urun"
            className="px-12 py-3 m-2 text-md font-semibold rounded text-white bg-[#04BCD4]"
          >
            Ürün ekle
          </Link>
        </div>
      </div>
    </section>
  );
}
