import "./styles.css"
import img from './Me.jpeg'; 


export default function App(){
  return (
    <main>
        <div className="Main-div">
              <img src={img} className="MainImage" width={"200px"}/>
              <h3>Ali Raza</h3>
              <h5>Frontend Developer</h5>
              <h6>ali.raza.bvt2023@gmail.com</h6>

              <div className="Btns">
                  <button className="EmailBtn">Email</button>
                  <button className="LinkedInBtn">LinkedIn</button>
              </div>
              <h4 className="about">About</h4>
              <p>I am a passionate front-end developer, dedicated to creating seamless web experiences. I love coding and stay up-to-date with the latest tech trends.</p>

              <h4 className="interests">Interests</h4>
              <p className="interests-p">My interests extend beyond code. I enjoy exploring new JavaScript frameworks, optimizing web performance, and advocating for clean code. When I am not coding, you will find me reading tech blogs and brainstorming new project ideas. Join me in the exciting world of front-end development!</p>
              <footer className="footer">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-envelope"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                  </ul>
              </footer>
        </div>
    </main>
  )
}