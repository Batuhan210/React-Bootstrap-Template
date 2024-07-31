import './containers.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';


const Containers = () => {
    return (
        <div className="containers">
        <div className="container__item">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHouse} size="2xl" />
          </div>
          <h2>Fresh new layout</h2>
          <p>With Bootstrap 5, we have created a fresh new layout for this template!</p>
        </div>

        <div className="container__item">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCloudArrowDown} size="2xl" />
          </div>
          <h2>Free to download</h2>
          <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
        </div>

        <div className="container__item">
          <div className="icon-container">
          <FontAwesomeIcon icon={faDiamond} size="2xl" />
          </div>
          <h2>Jumbotron hero header</h2>
          <p>The heroic part of this template is the jumbotron hero header!</p>
        </div>

        <div className="container__item">
          <div className="icon-container">
          <FontAwesomeIcon icon={faLayerGroup} size="2xl"/>
          </div>
          <h2>Feature boxes</h2>
          <p>We have created some custom feature boxes using Bootstrap icons!</p>
        </div>

        <div className="container__item">
          <div className="icon-container">
          <FontAwesomeIcon icon={faCode} size= "2xl" />
          </div>
          <h2>Simple clean code</h2>
          <p>We keep our dependencies up to date and squash bugs as they come</p>
        </div>

        <div className="container__item">
          <div className="icon-container">
          <FontAwesomeIcon icon={faCheck} size="2xl" />
          </div>
          <h2>A name you trust</h2>
          <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
        </div>
      </div>
    );
  }
export default Containers