import React from "react";
import Image from "next/image";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen ">
      <section className="bg-brand p-10  hidden w-1/2 items-center justify-center lg:flex xl:w-2/5  text-white">
        <div className="flex flex-col gap-2  justify-center max-h-[800px] max-w-[430px]   ">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={191}
            height={70}
            className="h-auto"
          />
          <div className="space-y-5 ">
            <h1 className="h1 ">Manage your files wherever you are</h1>
            <p className="body-1">We flow with you. No matter where you are</p>

            <Image
              src="/assets/images/files.png"
              width={300}
              height={300}
              className="transition-all hover:rotate-2 hover:scale-105"
              alt="files illustration"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-1 items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt=""
            width={191}
            height={70}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
