import Tag from '../Tag';
import Style from './Banner.module.css';

export default function Banner() {
  return (
    <div
      style={ { backgroundImage: 'url(\'https://img.youtube.com/vi/w0MHqxRCM1Y/maxresdefault.jpg\')' } }
      className={ Style.container }
    >
      <div className={ Style.infoContainer }>
        <Tag>frontend</Tag>
        <h1 className={ Style.textTitle }>Olá, eu sou o Banner</h1>
        <p>
          Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React,s ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'!

        </p>
      </div>
      <div className={ Style.video }>

        <iframe
          src="https://www.youtube.com/embed/w0MHqxRCM1Y?si=0Epsu3PWDQbMVMMS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"

        />
      </div>
    </div>
  );
}
