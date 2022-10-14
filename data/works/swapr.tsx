import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/swapr.png';

const swaprWorkInfo: IWork = {
  name: 'Swapr',
  workType: ['Development'],
  url: 'https://swapr.eth.link/',
  workSafeURL: 'swapr',
  headerImage: HeaderImage,
  content: (
    <>
      <div className="content-block">
        <h3>The Client</h3>
        <p>
          Swapr is a multi-chain AMM with a suite of unique features including LP governance, DIY farming, and much more. Swapr is the first
          automated market maker (AMM) to allow for adjustable swap fees through governance and has been organically developed within the
          DXdao community. Swapr marks the first time a DAO has launched a DeFi protocol on Ethereum.
        </p>
      </div>
      <div className="content-block">
        <h3>How It All Started</h3>
        <p>
          We had worked previously with DXdao building their landing page, and this time they reached out to us to develop the landing page
          for Swapr, one of their products. At the end, this turned out to be the page that contains the Swapr UI that has a wallet
          integration and the controls to make transactions directly from it.
        </p>
      </div>
    </>
  ),
};

export { swaprWorkInfo };
