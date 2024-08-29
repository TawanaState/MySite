import { NavBar, Footer } from "../components"

export default function Page(params:any) {
    return <>
    <NavBar />
    <ContentSect />
    <Footer />
    </>
}

function ContentSect() {
    return <>
    <header className="mt-[4rem] md:mt-[1rem] p-8 md:p-[8rem] lg:px-[22rem] lg:py-[5rem] !pb-6 md:!pb-10">
        <img className="object-cover h-[30vh] w-[100%] md:h-[45vh]" src="./assets/img/blog/blog-3.jpg" alt="" />
    </header>
    <article className="px-10 md:px-[10rem] lg:px-[25rem] *:mb-3 text-lg text-justify">
        <h1 className="text-4xl text-opacity-100 uppercase">From Physics Enthusiast to Passionate Programmer: My Journey 🔥🎵🥁🎸👨‍💻</h1>
        <ul className="tags !gap-2 *:!font-thin !mb-6">
            <li>about-me</li>
            <li>journey</li>
            <li>learning</li>
            <li>passion</li>
        </ul>
        <p>
            Hello! I’m Tawananyasha Mukoriwo, a passionate software developer.
        </p>
        
        <p>
            My journey into the world of coding began about four years ago during the COVID-19 lockdown. With schools closed and time on my hands, I found myself captivated by a project my elder sister was working on for her computer science class. The idea of commanding a computer to perform tasks was intriguing, and it sparked a newfound curiosity in me.
        </p>
        <p>
            Before discovering coding, I was deeply interested in physics—a passion that still burns bright. I loved diving into books and articles about the mysteries of the universe. However, the theoretical nature of physics began to wear on me, especially since I couldn't always experiment with the concepts I was learning due to a lack of resources. Coding, on the other hand, offered an immediate, tangible way to see the results of my efforts, which was incredibly satisfying.
        </p>

        <p>
            I started with Visual Basic, which, while a bit outdated, laid a solid foundation for me. As I delved deeper into programming, I discovered more modern languages and quickly realized that the fundamental concepts often transcend the specific language you’re using. I found myself spending each day solving problems and honing my skills, and it was exhilarating.
        </p>

        <p>
            By 2021, I had a firm grasp of both backend and frontend web development, along with essential programming concepts like networking. Now, as a student at HIT pursuing a degree in Software Engineering, I feel confident in my abilities, having already spent over four years immersed in this field.
        </p>


        <p>
            Currently, I’m focusing on enhancing my Machine Learning skills and exploring programming for embedded hardware.
        </p>

        <p>
        But there's more to me than just code! I’m also an avid reader of physics articles and a musician at heart. I love everything from singing to playing the drums and guitars.
        </p>
        
        
    </article>
    <p className="text-center pt-6">
        <a className="btn text-center" href="/">← Back Home</a>
    </p>
    </>
}