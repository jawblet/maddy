import './App.css';
import m from './assets/m.jpg';
import { works } from './assets/works.js';
import { useState } from 'react';
import { Gemini } from './assets/Gemini';

const url = "https://en.wikipedia.org/wiki/Lil_Peep";

const Contact = () => {
  return(
  <section> 
      <h4>Contact</h4>
      <div className='contact'>
        <a href={url} className='contact_link'>
            <b className='num'>➀</b>&nbsp;LinkedIn 
          </a>
          <a href={url} className='contact_link'>
            <b className='num'>➁</b>&nbsp;Resume 
          </a> 
          <a href={url} className='contact_link'>
            <b className='num'>➂</b>&nbsp;Email
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
      <p>Lil Peep's first live performance took place on February 12, 2016 in Tucson, AZ as a member of Schemaposse. Later that year Lil Peep toured briefly with Fat Nick, Mikey The Magician, and SmokePurpp. In the spring of 2017, Lil Peep embarked on his first solo tour, performing to packed venues in three Russian cities, making his way across western Europe, and then across the United states.</p>
    </section>
  )
}

const Intro = ({img, setImg}) => {
  return(
    <section>
        <Gemini img={img}/>
        <p className="title" 
        onMouseEnter={() => setImg(true)}
        onMouseLeave={() => setImg(false)}
        >
            Madeline McFarland
        </p>
        <div> {!img 
        ? <figcaption>
          student + writer in New York, NY
          </figcaption>
        :  <figcaption>
          <span style={{textDecoration:"line-through"}}>student + writer in New York, NY</span>
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
      </div>
      <div className="col two">
       {img && <img src={m} className="self" alt="maddy"/>}
      </div>
      </div>
    </div>
  );
}

export default App;

//       <figcaption>b. 1995, gemini</figcaption>

/*
const Contact = () => {
  
}
*/

//        
