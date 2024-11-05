import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-wrap">
      <Image
        src="/anos_iniciais.png"
        width={400}
        height={560}
        className="min-w-[260px] flex-grow  flex h-[560px]"
        alt="Banner anos iniciais"
      />
      <Image
        src="/educacao_infantil.png"
        width={400}
        height={560}
        className="min-w-[260px] flex-grow flex h-[560px]"
        alt="Banner anos iniciais"
      />
      <Image
        src="/anos_finais.png"
        width={400}
        height={560}
        className="min-w-[260px] flex-grow flex h-[560px]"
        alt="Banner anos iniciais"
      />
      <Image
        src="/ensino_medio.png"
        width={400}
        height={560}
        className="min-w-[260px] flex-grow flex h-[560px]"
        alt="Banner anos iniciais"
      />
    </div>
  );
};

export default Hero;
