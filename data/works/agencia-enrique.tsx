import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/agencia-enrique.png';

const agenciaEnriqueInfo: IWork = {
  name: 'Agencia Enrique',
  workType: ['Development'],
  url: 'https://agenciaenrique.com/',
  workSafeURL: 'agencia-enrique',
  headerImage: HeaderImage,
  content: (
    <>
      <div className="breakdown">
        <h3>How it all started</h3>
        <p>
          We were approached by Entrecasa Studio with this project devised by DXdao, one of our former clients. Entrecasa delivered an
          amazing design, and we were very excited to bring it to life.
        </p>
      </div>
    </>
  ),
};

export { agenciaEnriqueInfo };
