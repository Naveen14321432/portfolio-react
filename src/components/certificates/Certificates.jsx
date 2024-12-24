import './Certificates.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Certificates_Data from '../../assets/mycertificates_data';

const Certificates = () => {
  return (
    <div id='certificates' className="certificates">
      <div className="certificates-title">
        <h1>Certificates</h1>
        <img src={theme_pattern} alt="certificates" />
      </div>
      <div className="certificates-container">
        {Certificates_Data.map((service, index) => {
          return (
            <div
              key={index}
              className="certificates-format"
              onClick={(e) => e.currentTarget.classList.toggle('expanded')}
            >
              <img src={service.c_img} alt={service.c_name} className="certificate-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
