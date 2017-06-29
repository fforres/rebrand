import { h } from 'preact';
import style from './style';
import nodersYoutube from '../../assets/images/noders-youtube-200.png';
import nodersCast from '../../assets/images/noders-cast-200.png';

export default () => (
  <section>
    <div class={style.title}>
      <h1>Media</h1>
      <hr />
    </div>
    <div className="level">
      <div className="level-item has-text-centered">
        <figure>
          <a href="https://www.youtube.com/channel/UC7tUsO3S7424TMcgSCUOCow/feed" target="_blank" className={style}>
            <img src={nodersYoutube} class={style.image} alt="youtube" />
            <h3 class={style.imageTitle}> Youtube </h3>
          </a>
        </figure>
      </div>
      <div className="level-item has-text-centered">
        <figure>
          <a href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF" target="_blank" className={style}>
            <img src={nodersCast} class={style.image} alt="noderscast" credits="podcast by Nate Eul from the Noun Project" />
            <h3 class={style.imageTitle}> NodersCast </h3>
          </a>
        </figure>
      </div>
    </div>
  </section>
);
