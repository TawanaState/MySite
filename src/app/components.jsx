import { mypages } from "./data";
import ContactSect from "./clientcomps";

export function NavBar() {
    return <nav className="p-4 px-[1.5rem] md:px-[12rem] z-[99999]">
    <a href="http://">
        <img src="/img/logo-nav.svg" width="90" alt=""/>
    </a>
    <div className="flex-col md:flex-row gap-4 md:gap-6 hidden md:flex justify-center items-center text-xl md:text-base">
        <a href="/">Home</a>
        <a href="/about/">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <button></button>
    </div>
  <input className="block md:hidden" type="checkbox" name="" id=""/>
</nav>
}


export function Header() {
    return <header className="w-[100vw] h-[100vh] flex flex-col justify-start md:justify-center items-center overflow-clip">
    <div className="md:hidden w-full px-6 translate-y-32">
        <h1 className="text-mute text-[2rem] leading-[2.5rem] md:text-5xl text-left w-1/2">Hi there<i className="animate-bounce">👋</i> I'm <span className="delight text-primary">Tawananyasha Mukoriwo.</span> </h1>
    </div>
    <div className="hero flex flex-col justify-center items-center rotate-90 md:rotate-0 translate-x-28 translate-y-[25vh] md:translate-x-0 md:translate-y-0 w-[100vh] md:w-full">
        <hr/>
        <h1 className="opacity-60 md:opacity-100">
            <span>/</span> Tawananyasha <span>/</span>
        </h1>
        <hr/>
    </div>

    
    <span className="text-mute text-lg my-4 md:my-8 absolute md:relative bottom-2">
        Developer • Engineer • Designer
    </span>
</header>
}


export function Footer() {
    return <footer className="flex flex-col-reverse md:flex-row justify-between items-center py-3 pb-6 md:py-12 md:pb-3 lg:px-12 md:px-8 px-6 text-sm font-normal">
    <div>
        Copyright © 2024
    </div>
    <div>
        <a className="btn mx-2" href="mailto:info@tawananyasha.com">Email</a> / <a className="btn mx-2" href="https://wa.me/+263785733582">Whatsapp</a> / <a className="btn mx-2" href="tel:+263785733582">Call</a>
    </div>
</footer>
}


export function AboutSect() {
    return <section className="grid md:gap-8 gap-4 !pt-0 md:!pt-20" id="about">
    <div>
        <h1 className="text-mute hidden md:inline-block leading-[normal]">Hi there👋 I'm <span className="delight text-primary">Tawananyasha Mukoriwo.</span> </h1>
    </div>
    <div className="text-xl md:text-2xl md:px-8 *:mb-2 md:text-left text-justify font-[400] md:font-semibold">
        <p>
        Welcome to my corner of the internet! My journey began with a fascination for physics, but the hands-on nature of programming drew me in, leading to countless hours of problem-solving and learning new languages. 
        </p>
        <p>
        Today, I’m studying Software Engineering at <a className="link" href="http://hit.ac.zw">HIT</a>, where I’m expanding my knowledge in Machine Learning and programming for embedded systems. My path is fueled by curiosity, creativity, and a constant desire to push the boundaries of what I can achieve with code.
        </p>
        <a className="btn font-bold" href="/about">There's more -{'>'}</a>
    </div>
    
</section>
}


export function SkillSect() {
    return <section id="skills">
    <h2><span className="delight">{"//"}</span>Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        
        <div className="skill">
            <img src="img/icons/python_96px.png" alt="Python Skill Icon" srcSet="" />
            <p>
            With Python, I specialize in building powerful backend systems that drive web applications, and I create intelligent machine learning models that can analyze data and make predictions. My work includes automating processes and developing scalable solutions to solve complex problems efficiently.
            </p>
            <ul className="tags">
                <li>django</li>
                <li>tensorflow</li>
                <li>pytorch</li>
                <li>backend-dev</li>
            </ul>
        </div>

        <div className="skill">
            <img src="img/icons/javascript_96px.png" alt="Javascript Skill Icon" srcSet="" />
            <p>
                I leverage JavaScript to create dynamic, responsive websites and full-stack applications that work seamlessly across devices. Whether building fast, user-friendly interfaces, developing cross-platform desktop apps, or optimizing browser performance, I ensure a smooth and engaging user experience.
            </p>
            <ul className="tags">
                <li>node+deno</li>
                <li>electron</li>
                <li>typescript</li>
                <li>tfjs</li>
                <li>react</li>
                <li>nextjs</li>
            </ul>
        </div>

        <div className="skill">
            <img src="img/icons/golang_96px.png" alt="Golang Skill Icon" srcSet="" />
            <p>
            In Go, I focus on developing efficient, high-performance backend systems. I design and implement scalable APIs that handle large amounts of data, and build systems that can easily grow and adapt to new challenges, ensuring reliability and speed in complex applications.
            </p>
            <ul className="tags">
                <li>gin</li>
                <li>gorrilla</li>
                <li>wails</li>
                <li>micro-services</li>
            </ul>
        </div>
        
    </div>
</section>
}


export function TestimonialSect() {
    return <section id="testimonials">
    <h2><span className="delight">{"//"}</span>Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">

        <div className="testimony">
            <p>
                Working with Tawananyasha has been fantastic. His skills in Javascript, Python, and Django, combined with expertise in Postgresql, make him an invaluable asset to any team. 
            </p>
            <div>
                <p>
                    <span>Leroy Mapunzwana</span>
                    <span>CEO at Talksal</span>
                </p>
                <span></span>
            </div>
        </div>

        <div className="testimony">
            <p>
                A pleasure to work with, a genius in the field and very adaptive. Scope of work is not limited, be in IT, design, engineering. Such talent in the young man!
            </p>
            <div>
                <p>
                    <span>Bekithemba Sibanda</span>
                    <span>Engineer</span>
                </p>
                <span></span>
            </div>
        </div>

        <div className="testimony">
            <p>
                Tawananyasha a beautiful character, willing to learn and share. Possesses a can do attitude and tutor with a bright future, have no doubt this boy will do great things.
            </p>
            <div>
                <p>
                    <span>Asher Bvuwayi</span>
                    <span>Computer Scientist</span>
                </p>
                <span></span>
            </div>
        </div>

        

    </div>
</section>
}


export function ProjectSect() {
    const myprojects = mypages.filter((v) => {return v.type == "project"})
    return <section id="projects">
    <h2><span className="delight">{"//"}</span>Projects</h2>

        <div className="projects-cards">
            <ul>
                {
                    myprojects.map((v, k) => {
                        return <li key={k} style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0,0,0,0.2)), url(${v.cover})`, backgroundPosition : "center center"}}>
                        <a className="!opacity-100 !transform-none" href={"/page/" + v.slug}>{v.title}</a>
                        </li>
                    })
                }
            </ul>
        </div>
</section>
}





export function MainSect() {
    return <main className="px-[3rem] md:px-[12rem] *:py-6 flex flex-col gap-12">
        <AboutSect />
        <SkillSect />
        <ProjectSect />
        <TestimonialSect />
        <ContactSect />
    </main>
}
