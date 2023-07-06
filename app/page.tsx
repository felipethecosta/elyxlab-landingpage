import Image from 'next/image';
import synviaImage from '../image/synvia.png';
import logoImage from '../image/logo.png';
import footergreenImage from '../image/footer-green.png';
import './page.css';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <Image
            src={logoImage}
            alt="Logo"
            className="ml-1"
            width={300}
            // height={300}
          />
          <h1 className="title-page">EM CONSTRUÇÃO</h1>
        </div>
        <div className="absolute inset-y-0 right-0 w-2/5">
          <Image
            src={synviaImage}
            alt="Imagem"
            className="w-full h-full object-cover"
            layout="responsive"
          />
        </div>
      </div>

      <footer className="absolute bottom-0 right-0">
        <div>
          <Image
            src={footergreenImage}
            alt="Imagem"
            className=""
            layout="responsive"
          />
        </div>
      </footer>
    </main>
  );
}

/* Tailwind ======================= 


A linha "flex flex-col items-center justify-center min-h-screen bg-white" é um exemplo de uma série de classes utilitárias do Tailwind CSS que são aplicadas a um elemento HTML. Aqui está uma explicação resumida do que cada uma dessas classes faz:

flex: Essa classe transforma o elemento em um contêiner flexível, permitindo que os itens dentro dele sejam organizados em uma linha ou coluna.

flex-col: Essa classe especifica que os itens dentro do contêiner devem ser organizados em uma coluna, ou seja, um item abaixo do outro.

items-center: Essa classe centraliza os itens horizontalmente dentro do contêiner flexível.

justify-center: Essa classe centraliza os itens verticalmente dentro do contêiner flexível.

min-h-screen: Essa classe define a altura mínima do elemento como a altura total da tela (h-screen), garantindo que o elemento ocupe pelo menos toda a altura da janela do navegador.

bg-white: Essa classe define o fundo do elemento como branco (white).
No contexto específico em que essas classes são usadas, elas estão sendo aplicadas a um contêiner principal para criar um layout centralizado na tela, com os itens organizados verticalmente em uma coluna. O uso dessas classes ajuda a alinhar o conteúdo centralmente e garantir que o contêiner tenha uma altura mínima igual à altura da tela.

w-full: Essa classe define a largura do elemento como 100% do contêiner pai. Ou seja, o elemento ocupará toda a largura disponível.

h-full: Essa classe define a altura do elemento como 100% do contêiner pai. Isso faz com que o elemento ocupe toda a altura disponível.

object-cover: Essa classe garante que a imagem seja redimensionada proporcionalmente para preencher todo o espaço disponível no elemento, mantendo sua proporção original. Isso significa que a imagem pode ser cortada ou esticada para preencher o espaço, mas sua proporção será preservada.


*/

/* ================================================================================================================= LEIAM! */

// export default function Home() {
//   return (
//     <div style={{backgroundColor: 'red'}}>
//       <h1 style={{ color: 'blue' }}>Minha Primeira Página</h1>
//       <p style={{ fontSize: '16px', padding: '100px' }}>Bem-vindo ao meu aplicativo Next.js!</p>  /* Isso aqui é o CSS normal, seguindo pelo styles. */
//     </div>
//   );
// }
