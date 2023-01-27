import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";

function UncontrolledExample() {
  return (
    <div className="footer">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "500px" }}
            className="d-block w-100 "
            src="https://avatars.mds.yandex.net/i?id=3ab1aaf125362af50d736534e69dec9bfe025b23-5362604-images-thumbs&n=13"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>AWM</h4>
            <p>Тип: Снайперская винтовка.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "500px" }}
            className="d-block w-100"
            src="https://avatars.mds.yandex.net/i?id=56b2344311f84b276f9fafea416a216e0c254e3e-5208953-images-thumbs&n=13"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4>AK-47</h4>
            <p>Штурмавая винтовка</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "500px" }}
            className="d-block w-100"
            src="https://avatars.mds.yandex.net/i?id=4f3f7dec537f6c197b55af21c9aa0ca3cf0daa14-5864031-images-thumbs&n=13"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4>SCAR</h4>
            <p>Штурмая винтовка</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
