import { montserrat, parisienne } from "@/app/layout";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-6 py-14 justify-center items-center">
        <a
          title="Visitar nossa pagina no facebook."
          className="bg-[#3B5998] p-3 rounded-full shadow-md hover:bg-[#24365c] duration-150"
          href="#"
        >
          <Facebook />
        </a>
        <a
          title="Visitar nossa pagina no instagram."
          className="bg-[#262626] p-3 rounded-full shadow-md hover:bg-[#111111] duration-150"
          href="#"
        >
          <Instagram />
        </a>
        <a
          title="Visitar nossa pagina no twitter."
          className="bg-[#1DA1F2] p-3 rounded-full shadow-md hover:bg-[#2d90ce] duration-150"
          href="#"
        >
          <Twitter />
        </a>
        <a
          title="Visitar nosso canal no youtube."
          className="bg-[#CD201F] p-3 rounded-full shadow-md hover:bg-[#9e1e1e] duration-150"
          href="#"
        >
          <Youtube />
        </a>
        <a
          title="Fale conosco por e-mail."
          className="bg-[#EA4335] p-3 rounded-full shadow-md hover:bg-[#b43529] duration-150"
          href="mailto:externatocampista@gmail.com"
        >
          <Mail />
        </a>
      </div>

      <p
        className={`${parisienne.className} font-normal max-w-[400px] text-4xl text-center mx-auto py-10`}
      >
        Não basta bater as asas. <br />É preciso ter um plano de vôo
      </p>

      <h1
        className={`${montserrat.className} text-sm text-center mx-auto p-10`}
      >
        © Externato Campista | Produzido por <strong>JC DEV</strong>
      </h1>
    </footer>
  );
};

export default Footer;
