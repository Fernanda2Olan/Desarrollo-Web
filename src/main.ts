
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

//import '../src/temas/objetos'
//import '../src/temas/arreglos'
//import '../src/temas/funciones'
//import '../temas/destruc-objetos'
//import '../src/temas/destruc-arreglos'
//import '../src/temas/fetch'
//import '../src/temas/axios'
import '../src/temas/async-await'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Repaso TypeScript</h1>
    
  </div>
`

