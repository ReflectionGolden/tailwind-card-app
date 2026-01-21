
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Man from './assets/man-silhouette.png';
import Woman from './assets/woman-silhouette.png';
import Jacked from './assets/HugeJackedMan.jpg';
import Tailwind from './assets/tailwindcss.svg';
import './App.css';

import {faGithub} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <h1>Tailwind Card Application</h1>
      <p>This project has been made in conjunction with the <a title='GitHub Pages site' href="https://reflectiongolden.github.io/react-essentials-site/" target='_blank'>react-essentials-site</a><a title='GitHub Repository' href="https://github.com/ReflectionGolden/react-essentials-site" target='_blank'><FontAwesomeIcon icon={faGithub} /></a> project as part of Module 6.</p>
      <Container>
        <h2>Tailwind-based Responsive Card</h2>
          <Card 
            title="Responsive Tailwind Card"
            description="This project demonstrates the use of TailwindCSS within a React + Vite project to create a card component which is reusable and responsive, therefore being able to be used for a veriety of uses such as employee cards (as seen below) or explanation cards (such as the one this description is in)."
            img={Tailwind}
          />
        <span className='flex'>
          <Card 
            title="John Smith"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt tellus eu venenatis rhoncus. Morbi eleifend risus vel dolor laoreet viverra.  Cras elementum ullamcorper sem, eu tincidunt leo ultricies a."
            img={Man}
          />
          <Card 
            title="Jane Doe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur nibh vitae tincidunt vestibulum. Nullam nec hendrerit enim. Integer ut enim  quis quam aliquet faucibus condimentum vitae sapien."
            img={Woman}
          />
          <Card 
            title="Huge Jacked Man"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit ante tincidunt, posuere augue faucibus, fringilla ante. Aliquam id ante quis dui finibus faucibus non ut est. Aliquam interdum mattis ex quis porta. Vestibulum tempus ultricies nulla id luctus."
            img={Jacked}
          />
        </span>
      </Container>
    </>
  )
}

function Container(props) {
  return (
    <div className='mt-4 mb-4 rounded-4xl border-3 border-solid border-orange-100'>
      {props.children}
    </div>
  );
}

function Card(props) {
  return (
    <div className='xl:max-w-sm xl:min-w-sm lg:max-w-xs lg:min-w-xs rounded-lg bg-no-repeat mx-auto my-3 bg-slate-900 border border-solid border-orange-100'>
      <h3 className='text-2xl mb-2 font-bold text-shadow-md text-shadow-black underline underline-offset-5 decoration-3 w-fit ml-3'>{props.title}</h3>
      <img src={props.img} alt={props.title} className='rounded-full aspect-square size-25 ml-3 my-2'/>
      <p className='bg-neutral-600/50 xl:max-w-xs xl:min-w-xs lg:max-w-2xs lg:min-w-2xs mx-auto rounded p-2 mb-2'>{props.description}</p>
    </div>
  );
}

export default App
