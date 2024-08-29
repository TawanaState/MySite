"use client";
import React from "react";


export default function ContactSect() {

    const onsubmit = (e) => {
        const f_tel =document.querySelector("input#f_tel").value;
        const f_fullname =document.querySelector("input#f_fullname").value;
        const f_idea =document.querySelector("input#f_idea").value;
        const body = `My name ${f_fullname} is and i have a ${f_idea} that needs help. You can reach me at ${f_tel} to get things started. `
        let mailto = `mailto:info@tawananyasha.com?subject=${"From the Website"}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }
    return <section id="contact">
    <div className="grid md:gap-6 grid-cols-1 md:grid-cols-[1fr,2fr]">
        <h2>
            Let's get started! <span className="text-primary">:{')'}</span>
        </h2>
        <form>
            <div className="md:text-4xl text-xl text-left md:leading-[2.8rem] mb-3">
                <span>My name is </span>
                <input id="f_fullname" type="text" placeholder="YOUR FULL NAME" />
                <span>and I have a </span>
                <input id="f_idea" placeholder="IDEA, WEB-APP, JOB, ETC." type="text" />
                <span>that needs help.</span><span> You can reach me at </span>
                <input id="f_tel" placeholder="YOUR PHONE NUMBER" type="text" />
                <span>to get things started. </span>
            </div>
            
            <button onClick={onsubmit} type="button" className="btn text-2xl">Send-{'>'}</button>
        </form>
    </div>
</section>
}
