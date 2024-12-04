import React from "react";

const About = () => {
  return (
    <>
      <div className="z-[1]">
        <section className="bg-white rounded-md m-28 p-12">
          <p className="alegreya text-5xl text-center mb-10"> A Bit About Me</p>

          <p className="m-4 indent-10 alegreya text-2xl">
            Greetings! My name is George Hernandez based in Austin, Texas.
            Following my passion to become a full-stack software developer. I am
            a recent graduate of the UT Austin coding bootcamp, finishing out
            with a 90 GPA and honorary mentions. Looking for my first
            professional tech job and put my passion into practice! Some of the
            various languages and frameworks I studied are HTML, CSS,
            JavaScript, Express, Node, SQL, MongoDB, React, Handlebars, GraphQL,
            and Apollo.
          </p>
          <p className="m-4 indent-10 alegreya text-2xl">
            In addition to my professional pursuits, I have a diverse range of
            hobbies. I am an avid tennis and pickleball player. I prioritize
            fitness with regular gym sessions. I enjoy any opportunity to
            travel, and have a keen interest in gaming. The proud dog dad of two
            lazy pugs and a hyperactive french bull dog. Compassion, honesty,
            and respect are the guiding principles in my personal and
            professional life. Three of my greatest strengths are my
            communication skills, ability to quickly grasp new concepts, and
            work ethic. Having created and lead the development of multiple
            full-stack applicatons, I feel confident I would be an asset to any
            team or company. Excited at the opportunity to apply my learning and
            grow as a developer in industry! Feel free to connect with me on
            Linked, checkout some of my work on GitHub, or send me an email!
          </p>
        </section>

        <section className="flex justify-evenly m-24">
          <p className="alegreya text-5xl text-center mb-8 ">
            {" "}
            Skills, Tools and Technologies
          </p>
        </section>

        <div className="flex justify-between m-16">
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          />
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box p-12">
              <h3 className="font-bold text-lg text-center pt-3">HTML</h3>
              <p className="py-5 px-3 text-lg">
                HTML (HyperText Markup Language) is the standard language used
                to create and structure content on the web. It defines the basic
                framework of a webpage by using elements like headings,
                paragraphs, links, images, and other multimedia. HTML works in
                tandem with CSS and JavaScript to build and style interactive
                and visually appealing websites. The foundational language of
                web development and essential for anyone looking to create or
                edit web pages.
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          />
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-12">
              <h3 className="font-bold text-lg text-center pt-3">CSS</h3>
              <p className="py-5 px-3 text-lg">
                CSS (Cascading Style Sheets) is the language used to style and
                format the layout of web pages. It controls the appearance of
                HTML elements, including colors, fonts, spacing, and
                positioning, bringing design and visual appeal to websites.
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="transition-all duration-300 hover:scale-125"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          />
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box p-12">
              <h3 className="font-bold text-lg text-center pt-3">JavaScript</h3>
              <p className="py-5 px-3 text-lg">
                JavaScript is a versatile programming language that brings
                interactivity and dynamic functionality to web pages. It allows
                developers to create features like animations, form validations,
                real-time data updates, and responsive user interfaces. By
                working alongside HTML and CSS, JavaScript enhances the user
                experience, making websites more engaging and interactive.
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          />
          <dialog id="my_modal_5" className="modal">
            <div className="modal-box p-12">
              <h3 className="font-bold text-lg text-center pt-3">
                Node Package Manager
              </h3>
              <p className="py-5 px-3 text-lg">
                NPM is a widely-used package manager for JavaScript, designed to
                help developers manage dependencies in their projects. It comes
                bundled with Node.js and enables easy installation, updating,
                and sharing of reusable code modules. With a vast registry of
                open-source packages, npm streamlines development by providing
                tools to manage versioning, automate tasks, and simplify
                collaboration across teams.
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            className="transition-all duration-300 hover:scale-125"
            onClick={() => document.getElementById("my_modal_7").showModal()}
          />

          <dialog id="my_modal_7" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Vite</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        <div className="flex justify-evenly m-16">
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
            onClick={() => document.getElementById("my_modal_6").showModal()}
          />
          <dialog id="my_modal_6" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">modal 6</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />
        </div>

        <div className="flex justify-evenly m-16">
          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />

          <img
            width={150}
            height={200}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />

          <img
            width={150}
            height={700}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            className="transition-all duration-300 hover:scale-125"
          />
        </div>
      </div>
    </>
  );
};

export default About;
