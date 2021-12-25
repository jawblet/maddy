import './App.css';
import m from './assets/m.jpg';
import { works } from './assets/works.js';

const url = "https://en.wikipedia.org/wiki/Lil_Peep";

const Link = ({work}) => {
return(
  <p className='work'>
    <a href={work.url} className='work link'>
      {work.title}
    </a> 
    &nbsp;&nbsp; ({work.date})
  </p>
)
}

function App() {
  return (
    <div className="App">
      <p className="title">Madeline McFarland</p>
      <div className="col_wrapper">
      <div className="col one"> 
        <img src={m} className="self" alt="maddy"/>
        <h3 className="contact"> 
        <a href={url} className='contact link'>
          <b>➀</b>&nbsp;LinkedIn 
        </a> 
        &nbsp;/&nbsp; 
        <a href={url} className='contact link'>
          &nbsp;<b>➁</b>&nbsp;Resume 
        </a> 
        &nbsp;/&nbsp;
        <a href={url} className='contact link'>
          &nbsp;<b>➂</b>&nbsp;Email
        </a>
      </h3>
      </div>
      <div className="col two">
        <section>
          <h4>About</h4>
          <p>Lil Peep's first live performance took place on February 12, 2016 in Tucson, AZ as a member of Schemaposse. Later that year Lil Peep toured briefly with Fat Nick, Mikey The Magician, and SmokePurpp. In the spring of 2017, Lil Peep embarked on his first solo tour, performing to packed venues in three Russian cities, making his way across western Europe, and then across the United states. Soon after the tour, Lil Peep emigrated to London, where he recorded his debut studio album.</p>
        </section>
        <section>
          <h4>Selected work</h4>
          {works.map((work, i) => {
              return <Link key={i} work={work}/>
            })}
        </section>
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