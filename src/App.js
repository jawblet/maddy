import './App.css';
import m from './assets/m.jpg';
import { works } from './assets/works.js';
import { useState } from 'react';
import { Gemini } from './assets/Gemini';

const Contact = () => {
  return(
  <section> 
      <h4>Contact</h4>
      <div className='contact'>
        <a href="mamcfarland23@gmail.com" className='contact_link'>
          mamcfarland23@gmail.com
          </a>
      </div>
      </section>
  )
}

const Link = ({work}) => {
return(
  <p className='work'>
    <a href={work.url} className='work link'>
      {work.title}
    </a> 
    &nbsp;&nbsp;&nbsp; ({work.date})
  </p>
)
}

const Work = () => {
  return(
    <section>
    <h4>Selected work</h4>
    {works.map((work, i) => {
        return <Link key={i} work={work}/>
      })}
  </section>
  )
}

const About = () => {
  return(
    <section>
      <h4>About</h4>
      <p>Madeline McFarland is a writer living in New York. She graduated from New York University’s MFA program in 2023 and from Williams College in 2018. She is currently working on a collection of short stories and a novel.</p>
    </section>
  )
}

const Intro = ({img, setImg}) => {
  return(
    <section>
        <Gemini img={img}/>
        <p className="title" 
        // onMouseEnter={() => setImg(true)}
        // onMouseLeave={() => setImg(false)}
        >
            Madeline McFarland
        </p>
        <div> {!img 
        ? <figcaption>
          writer in New York, NY
          </figcaption>
        :  <figcaption>
          <span style={{textDecoration:"line-through"}}>writer in New York, NY</span>
          &nbsp; gemini
        </figcaption>
        }
        </div>
      </section>
  )
}

function App() {
  const[img, setImg] = useState(false);

  return (
    <div className="App">
      <div className="col_wrapper">
      <div className="col one"> 
        <Intro img={img} setImg={setImg}/>
        <About/>
        <Work/>
        <Contact/>
        <img src={m} className="self" alt="maddy"/>
      </div>
      <div className="col two">
      </div>
      </div>
    </div>
  );
}

export default App;