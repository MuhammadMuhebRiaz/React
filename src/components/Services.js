import img1 from '../images/service1.jpeg';
import img2 from '../images/service2.jpeg';
import img3 from '../images/service3.jpeg';
import '../index.css';

function Services() {
  return (
    <div className="container">
      <h1 className='card_services'>Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={img1} className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Service 1</h5>
              <p className="card-text">We offer amazing service 1 to make your experience better.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={img2} className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Service 2</h5>
              <p className="card-text">Our service 2 is designed to help you in multiple ways.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={img3} className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Service 3</h5>
              <p className="card-text">We specialize in offering the best service 3 in the market.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
