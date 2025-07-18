import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type AboutSectionProps = {
  fullname: string;
  email: string;
  experience: string;
  language: string[];
};

function AboutSection({
  fullname,
  email,
  experience,
  language,
}: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState("aboutme");

  const entries = [
    { label: "fullname", value: fullname },
    { label: "email", value: email },
    { label: "experience", value: experience },
    { label: "language", value: language },
  ];

  return (
    <section id="about" className="bg-zinc-900/10 min-h-150 py-20 my-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row gap-15">
          <header className="flex-1 space-y-5">
            <div className="space-y-3">
              <h1 className="text-6xl font-bold">
                More about <span className="text-accent">me</span>
              </h1>
            </div>
            <div className="flex flex-col space-y-4 text-sm">
              <button
                className={`flex flex-row gitems-center justify-between gap-5 px-3.5 py-3 text-left rounded-lg hover:cursor-pointer hover:bg-white/80 hover:text-black group ${activeTab === "aboutme"
                  ? "bg-white text-black "
                  : "bg-black text-white"
                  }`}
                onClick={() => setActiveTab("aboutme")}
              >
                About Me
                <ArrowUpRight
                  size={18}
                  className="group-hover:animate-bounce"
                />
              </button>
              <button
                className={`flex flex-row items-center justify-between gap-5 px-3.5 py-3 text-left rounded-lg hover:cursor-pointer hover:bg-white/80 hover:text-black group ${activeTab === "skills"
                  ? "bg-white text-black "
                  : "bg-black text-white"
                  }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
                <ArrowUpRight
                  size={18}
                  className="group-hover:animate-bounce"
                />
              </button>
              <button
                className={`flex flex-row items-center justify-between gap-5 px-3.5 py-3 text-left rounded-lg group hover:cursor-pointer hover:bg-white/80 hover:text-black group ${activeTab === "resume"
                  ? "bg-white text-black "
                  : "bg-black text-white"
                  }`}
                onClick={() => setActiveTab("resume")}
              >
                Download Or View Resume
                <ArrowUpRight
                  size={18}
                  className="group-hover:animate-bounce"
                />
              </button>
            </div>
          </header>
          <main className="flex-2">
            {activeTab === "aboutme" && (
              <div className="space-y-5">
                <h4 className="text-xl font-semibold">Professional Summary</h4>
                <p className="text-md text-zinc-500">
                  Hey, I'm Luis. Just graduated in Multiplatform Development and I'm all about building stuff that works and feels clean.
                  I love organized code and I pick up new tech fast. Messy code? Not my thing. Backend is my zone (Java, Spring, PostgreSQL),
                  but I've also played around with JavaScript, TypeScript, Angular, and even some React.
                  When I'm not coding, I'm probably vibing to music, gaming, or kicking a ball on the weekend.
                  Always up for the next cool challenge.
                </p>
                <code className="w-full bg-zinc-600/5 border-zinc-600/20 text-zinc-500 rounded-lg border hover:border-accent/30 p-5 font-mono text-sm  transition duration-400">
                  <span className="text-accent">const</span> developer = {"{"}
                  <ul className="">
                    {entries.map(({ label, value }, index) => (
                      <li className="text-white my-1 ml-6">
                        {label}:{" "}
                        {Array.isArray(value)
                          ? `[${value.map((v) => `'${v}'`).join(", ")}]`
                          : `'${value}'`}
                        ,
                      </li>
                    ))}
                  </ul>
                  {"}"}
                </code>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="grid grid-cols-4 gap-8">
                {/* Java */}
                <div className="w-auto h-24 bg-white/60 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-8">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        <path d="M6.175 10.333c-1.208.408-1.955.97-1.955 1.593c0 .848 1.389 1.587 3.44 1.97m0 0c-.762.386-1.217.875-1.217 1.408c0 1.243 2.487 2.251 5.555 2.251a13 13 0 0 0 2.223-.187m-6.56-3.471a18 18 0 0 0 3.226.28c1.708 0 3.265-.216 4.445-.573m1.11-3.48c-1.411.417-3.379.676-5.555.676c-4.295 0-7.778-1.008-7.778-2.252c0-.96 2.077-1.78 5-2.104" />
                        <path d="M22 19.07C22 20.688 17.523 22 12 22S2 20.688 2 19.07c0-1.15 1.707-2.146 5-2.626m11.76-7.656c4.214-1.094 4.816 5.468-1.205 7.656M17.558 2c-.74.123-2.133.815-1.778 2.593c.356 1.777-.148 2.716-.444 2.963M13.113 2c-.741.148-2.134.978-1.778 3.111s-.148 2.704-.444 3" />
                      </g>
                    </svg>
                  </span>
                  <span className="text-black font-bold">Java</span>
                </div>

                {/* Spring */}
                <div className="w-auto h-24 bg-white/60 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-8">
                      <path
                        fill="currentColor"
                        d="m23.693 10.706l-4.73-8.185c-.41-.71-1.417-1.294-2.24-1.294h-9.45c-.82 0-1.831.584-2.24 1.294L.306 10.706c-.41.71-.41 1.873 0 2.584l4.725 8.189c.41.71 1.417 1.294 2.24 1.294h9.455c.82 0 1.826-.584 2.24-1.294l4.726-8.19c.41-.71.41-1.873 0-2.583zM10.976 5.755c0-.537.438-.975.974-.975s.975.438.975.975v5.821a.976.976 0 0 1-1.948 0zm.974 12.43a6.616 6.616 0 0 1-6.607-6.609A6.64 6.64 0 0 1 8.01 6.272a.866.866 0 0 1 1.214.18a.866.866 0 0 1-.178 1.213a4.876 4.876 0 0 0 5.812 7.827a4.88 4.88 0 0 0 1.967-3.916a4.9 4.9 0 0 0-1.986-3.925a.87.87 0 0 1-.183-1.214a.87.87 0 0 1 1.214-.183a6.63 6.63 0 0 1 2.687 5.322a6.613 6.613 0 0 1-6.608 6.608"
                      />
                    </svg>
                  </span>
                  <span className="text-black font-bold">Spring</span>
                </div>

                {/* PostgreSQL */}
                <div className="w-auto h-24 bg-white/80 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M16.805 1a10 10 0 0 0-2.603.37l-.06.018a10.6 10.6 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68c-.76-.256-2.336-.697-3.997-.609c-1.157.061-2.419.402-3.354 1.36c-.933.958-1.426 2.44-1.322 4.457c.028.557.191 1.464.463 2.64c.27 1.175.652 2.55 1.127 3.805s.996 2.384 1.81 3.15c.406.384.965.707 1.624.68c.463-.018.882-.215 1.243-.506c.176.225.364.323.535.414c.215.114.425.192.642.244a4.6 4.6 0 0 0 1.84.091c.267-.043.548-.127.828-.247c.01.302.022.598.035.898c.038.95.063 1.827.357 2.596c.047.126.176.773.687 1.344c.51.572 1.51.928 2.648.692c.803-.167 1.825-.468 2.503-1.404c.67-.926.973-2.254 1.033-4.409c.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43c.688-.31 1.208-.622 1.587-1.177c.095-.137.199-.303.227-.59c.028-.285-.14-.733-.421-.939c-.563-.414-.916-.257-1.295-.18q-.56.12-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358c.264-.99.413-1.903.425-2.701s-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456q-.078-.002-.156-.001zm-.044.587c1.585-.015 3.611.417 5.065 2.22c.327.405.424.997.413 1.727c-.012.729-.151 1.601-.405 2.557c-.493 1.852-1.425 4.01-2.738 5.948a.7.7 0 0 0 .15.079c.274.11.898.204 2.145-.044c.313-.065.543-.108.781.068a.48.48 0 0 1 .173.39a.64.64 0 0 1-.123.308c-.24.351-.716.684-1.326.958c-.539.244-1.313.371-1.999.379c-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765c-.125.706-.343 1.267-.76 1.687c-.416.42-1.004.673-1.796.838c-.981.204-1.696-.016-2.157-.393c-.46-.375-.671-.874-.798-1.18c-.087-.21-.132-.483-.176-.848a18 18 0 0 1-.097-1.315a46 46 0 0 1-.028-2.312c-.41.363-.92.605-1.467.696c-.65.107-1.232.002-1.579-.082a2.2 2.2 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35a.56.56 0 0 1 .206-.303c.188-.148.435-.23.808-.306c.68-.135.917-.228 1.061-.339c.123-.095.262-.287.508-.57l-.003-.037a2.9 2.9 0 0 1-1.257-.328c-.141.144-.865.887-1.748 1.917c-.371.431-.781.678-1.214.696s-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92c-.46-1.218-.836-2.574-1.102-3.729c-.268-1.155-.426-2.086-.448-2.535c-.1-1.909.36-3.195 1.15-4.006S4.652 1.94 5.708 1.882c1.894-.106 3.693.535 4.057.673c.701-.462 1.604-.75 2.733-.732a7.2 7.2 0 0 1 1.588.2l.019-.008q.344-.117.698-.196a9.4 9.4 0 0 1 1.957-.23zm.143.614h-.137a8.5 8.5 0 0 0-1.61.176a7.05 7.05 0 0 1 2.692 2.062a7.7 7.7 0 0 1 1.07 1.76c.104.242.174.447.213.605c.02.08.034.147.038.217a.4.4 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113c-.019.556.127 1.209.163 1.92c.034.67-.049 1.405-.497 2.127q.056.066.108.132c1.185-1.81 2.04-3.814 2.495-5.521c.243-.92.373-1.753.384-2.413c.01-.66-.117-1.139-.279-1.338c-1.268-1.573-2.983-1.974-4.422-1.985m-4.525.235c-1.117.002-1.919.33-2.526.82c-.627.507-1.047 1.2-1.323 1.911a7.9 7.9 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473c.475-.106.986-.139 1.449.035s.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a9 9 0 0 0-.312.929q.06-.017.121-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714q.047.124.067.26q.02.057.019.117a49 49 0 0 0 .012 3.426c.022.494.054.928.095 1.271c.04.342.098.602.135.69c.12.294.297.678.617.939s.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663c.298-.301.477-.72.591-1.363c.171-.963.515-3.754.556-4.28c-.018-.395.042-.7.172-.932c.135-.238.343-.384.522-.463c.09-.04.174-.066.243-.085a6 6 0 0 0-.23-.298a4 4 0 0 1-.629-1.007a8 8 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804c-.333-.619-.695-1.369-.883-2.1c-.187-.729-.215-1.484.265-2.017c.426-.473 1.172-.669 2.293-.559c-.033-.096-.053-.176-.109-.304a7 7 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108zm-6.276.047q-.18 0-.36.01c-.954.053-1.856.322-2.501.986c-.647.663-1.072 1.751-.98 3.553c.019.34.172 1.296.434 2.43c.262 1.136.634 2.471 1.08 3.65c.446 1.18.988 2.207 1.502 2.693c.259.243.484.341.688.333c.205-.01.451-.124.753-.475a40 40 0 0 1 1.71-1.877a3.2 3.2 0 0 1-.932-1.307a3.1 3.1 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812c-.012-.488-.048-.812-.048-1.015v-.028a8.8 8.8 0 0 1 .559-3.095c.264-.682.658-1.375 1.249-1.936c-.58-.185-1.61-.467-2.725-.52a7 7 0 0 0-.36-.01zm11.714 4.842c-.641.008-1.001.169-1.19.379c-.268.298-.293.82-.127 1.464s.507 1.365.829 1.963c.16.3.316.57.442.788c.127.22.22.376.276.51q.08.181.168.331c.248-.509.293-1.008.267-1.529c-.033-.644-.187-1.303-.164-1.97c.025-.78.184-1.289.198-1.892a6 6 0 0 0-.699-.044m-7.78.105a2.7 2.7 0 0 0-.582.068a4.5 4.5 0 0 0-1.09.412q-.173.09-.33.209l-.02.018c.006.134.033.459.045.936c.01.523-.002 1.19-.106 1.91c-.226 1.568.946 2.866 2.324 2.868c.08-.322.213-.648.345-.992c.384-1.003 1.139-1.734.503-4.589c-.104-.467-.31-.656-.594-.763a1.4 1.4 0 0 0-.495-.077m7.48.187h.048q.094.003.17.02a.4.4 0 0 1 .13.051a.15.15 0 0 1 .071.1v.008a.2.2 0 0 1-.034.124a.6.6 0 0 1-.104.137a.65.65 0 0 1-.364.195a.57.57 0 0 1-.388-.095a.6.6 0 0 1-.123-.108a.24.24 0 0 1-.06-.116a.15.15 0 0 1 .04-.118a.4.4 0 0 1 .111-.082a1.3 1.3 0 0 1 .504-.118zm-7.388.154q.075 0 .157.012c.144.02.273.057.371.112q.072.037.126.097q.028.033.042.073t.009.083a.27.27 0 0 1-.071.141a.6.6 0 0 1-.135.12a.62.62 0 0 1-.424.103a.7.7 0 0 1-.396-.209a.7.7 0 0 1-.112-.15a.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.8.8 0 0 1 .29-.036zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.42.42 0 0 0-.225.197c-.06.105-.11.292-.095.61a.5.5 0 0 0 .14.064c.161.048.432.08.735.075c.602-.007 1.344-.143 1.738-.321c.323-.146.623-.336.891-.564c-1.317.264-2.06.194-2.517.011a1.3 1.3 0 0 1-.314-.183m-7.588.086h-.02c-.05.004-.123.02-.263.172c-.33.358-.444.582-.716.792c-.27.21-.623.321-1.327.461c-.223.044-.35.093-.436.132c.028.022.025.028.066.049c.103.055.236.103.342.13c.303.073.8.159 1.319.073s1.058-.327 1.518-.953c.08-.108.088-.268.023-.44c-.067-.17-.211-.318-.313-.36a.6.6 0 0 0-.193-.054z" />
                    </svg>
                  </span>
                  <span className="text-black font-bold">Tailwind</span>
                </div>

                {/* Docker */}
                <div className="w-auto h-24 bg-white/80 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-8">
                      <path fill="currentColor" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16" />
                    </svg>
                  </span>
                  <span className="text-black font-bold">Docker</span>
                </div>

                {/* Typescript */}
                <div className="w-auto h-24 bg-white/60 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-7">
                      <g fill="none">
                        <g clip-path="url(#akarIconsTypescriptFill0)">
                          <path
                            fill="currentColor"
                            d="M23.429 0H.57A.57.57 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.57.57 0 0 0 .571-.571V.57a.57.57 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719s-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755"
                          />
                        </g>
                        <defs>
                          <clipPath id="akarIconsTypescriptFill0">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </span>
                  <span className="text-black font-bold">Typescript</span>
                </div>

                {/* Angular */}
                <div className="w-auto h-24 bg-white/80 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128" className="size-7">
                      <path
                        fill="currentColor"
                        d="m78.36 0l41.77 89.9l4.34-68.57zM38.87 94.47l-6.42 15.54L64 128l31.55-17.99l-6.42-15.54zM80.53 74.3L64 34.11L47.47 74.3zm-77-52.97L7.87 89.9L49.64 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-black font-bold">Angular</span>
                </div>

                {/* PHP */}
                <div className="w-auto h-24 bg-white/80 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-8">
                      <path
                        fill="currentColor"
                        d="M7.01 10.207h-.944l-.515 2.648h.838q.834 0 1.242-.314q.408-.315.55-1.049q.137-.705-.124-.995q-.262-.29-1.047-.29M12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12s-5.373-6.312-12-6.312m-3.26 7.451c-.261.25-.575.438-.917.551q-.505.163-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65q1.195 0 1.744.628q.549.627.33 1.752a2.8 2.8 0 0 1-.305.847q-.215.383-.561.703m4.024.715l.543-2.799q.094-.478-.068-.651q-.16-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218q1.15 0 1.586.401c.436.401.378.7.263 1.299l-.572 2.944zm7.597-2.265a2.8 2.8 0 0 1-.305.847q-.214.383-.561.703a2.44 2.44 0 0 1-.917.551q-.504.163-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649q1.195 0 1.744.628q.55.626.331 1.751m-2.595-1.382h-.943l-.516 2.648h.838q.835 0 1.242-.314q.407-.315.551-1.049q.137-.705-.125-.995c-.262-.29-.524-.29-1.047-.29"
                      />
                    </svg>
                  </span>
                  <span className="text-black font-bold">PHP</span>
                </div>

                {/* Git */}
                <div className="w-auto h-24 bg-white/80 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-8">
                      <path
                        fill="currentColor"
                        d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"
                      />
                    </svg>
                  </span>
                  <span className="text-black font-bold">Git</span>
                </div>

                {/* Tailwind */}
                <div className="w-auto h-24 bg-white/80 rounded-lg flex items-center justify-center gap-3 hover:bg-white">
                  <span className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-8">
                      <path
                        fill="currentColor"
                        d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"
                      />
                    </svg>
                  </span>
                  <span className="text-black font-bold">Tailwind</span>
                </div>
              </div>
            )}

            {activeTab === "resume" && <div>Resume stuff here</div>}
          </main>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

