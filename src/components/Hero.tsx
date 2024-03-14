import Image from "next/image";

export default async function Hero() {
  return (
    <div className="md:grid grid-cols-2 w-full flex-row gap-4">
      <div className="md:px-10 pb-10 flex items-center md:pb-4">
        <div>
          <h1 className="text-6xl font-bold text-secondary">
            The Sexual Assault
          </h1>
          <h1 className="text-6xl font-bold text-primary leading-tight">
            Fighting Effort
          </h1>
          <p className="pr-10 py-10">
            We aim to end sexual assault and create safer communtiies for
            everyone through education, awareness, and support for victims.
          </p>
          <div className="gap-4 flex">
            <a className="btn rounded-full text-black border-none bg-secondary hover:bg-secondary hover:scale-[102%]">
              Learn More -&gt;
            </a>
            <a className="btn rounded-full text-secondary bg-white/0 border-secondary hover:border-secondary hover:bg-white/0 hover:scale-[102%]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="flex relative items-center justify-center w-full h-full">
        <div className="absolute justify-self-start bg-secondary text-base-100 font-bold w-40 text-center h-40 pt-14 rounded-full text-xl md:-translate-x-60 translate-y-20 translate-x-20 md:translate-y-0">
          501(c)(3) NONPROFIT
        </div>
        <Image
          src="/SAFE.png"
          width={500}
          height={500}
          alt="SAFE logo"
          className="border-[40px] md:border-[65px] border-primary rounded-full justify-self-center"
        />
      </div>
    </div>
  );
}
