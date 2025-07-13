import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type AboutComponentProps = {
  fullname: string;
  email: string;
  experience: string;
  language: string[];
};

function AboutComponent({ fullname, email, experience, language }: AboutComponentProps) {
  const [activeTab, setActiveTab] = useState('aboutme');

  const entries = [
    { label: 'fullname', value: fullname },
    { label: 'email', value: email },
    { label: 'experience', value: experience },
    { label: 'language', value: language }
  ];

  return (
    <section id="about" className="bg-slate-900/10 min-h-150 py-20 my-10">
      <div className="max-w-6xl mx-auto my-auto">
        <div className="flex flex-row gap-15">
          <header className="flex-1 space-y-5">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold">
                About <span className="text-blue-500">Me</span>
              </h1>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className={`flex flex-row gitems-center justify-between gap-5 px-3.5 py-2.5 text-left rounded-lg hover:cursor-pointer hover:bg-white hover:text-black group ${activeTab === 'aboutme' ? 'bg-white text-black ' : 'bg-black text-white'}`}
                onClick={() => setActiveTab('aboutme')}
              >
                About me
                <ArrowUpRight size={18} className="group-hover:animate-bounce" />
              </button>
              <button
                className={`flex flex-row items-center justify-between gap-5 px-3.5 py-2.5 text-left rounded-lg hover:cursor-pointer hover:bg-white hover:text-black group ${activeTab === 'skills' ? 'bg-white text-black ' : 'bg-black text-white'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
                <ArrowUpRight size={18} className="group-hover:animate-bounce" />
              </button>
              <button
                className={`flex flex-row items-center justify-between gap-5 px-3.5 py-2.5 text-left rounded-lg group hover:cursor-pointer hover:bg-white hover:text-black group ${activeTab === 'resume' ? 'bg-white text-black ' : 'bg-black text-white'}`}
                onClick={() => setActiveTab('resume')}
              >
                Download or view resume
                <ArrowUpRight size={18} className="group-hover:animate-bounce" />
              </button>
            </div>
          </header>
          <main className="flex-2">
            {activeTab === 'aboutme' &&
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Professional Summary</h3>
                <p className="text-md text-gray-500">
                  Hey, I'm Luis. Just finished my Multiplatform Development degree and I'm all about coding stuff that actually works and looks clean.
                  I'm curious by nature, always learning new tech, and love tackling problems head-on. When I'm not glued to the screen, I'm probably listening to music or chilling,
                  but coding's definitely my thing. I keep it real, stay focused, and I'm ready to take on whatever comes next.
                </p>
                <div className="relative text-gray-500 bg-gray-800/20 rounded-lg border border-blue-800/20 p-5 font-mono text-sm hover:border-blue-500/60 transition duration-400">
                  <span className="text-blue-500">const</span> developer = {'{'}
                  <ul className="">
                    {entries.map(({ label, value }, index) => (
                      <li className="text-white my-1 ml-6">
                        {label}: {Array.isArray(value) ? `[${value.map(v => `'${v}'`).join(', ')}]` : `'${value}'`},
                      </li>
                    ))}
                  </ul>
                  {'}'}
                  <div className="absolute bottom-3 right-3">
                    <a href="" className="flex flex-row items-center gap-2 text-sm font-sans group">
                      <span className="group-hover:text-white/90 transition">Contact me</span>
                      <ArrowUpRight size={18} className="group-hover:text-white/70 transition" />
                    </a>
                  </div>
                </div>
              </div>
            }

            {activeTab === "skills" &&
              <div className="">
                Hello world!!
              </div>
            }

            {activeTab === "resume" &&
              <div>
                Resume stuff here
              </div>
            }
          </main>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent;
