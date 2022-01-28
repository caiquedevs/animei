import { useEffect, useState } from 'react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';

import request from 'services/api';

import demonSlayerGif from 'assets/demon-slayer.gif';
import dragonBallGif from 'assets/dragon-ball.gif';
import atackOnTitan from 'assets/atack-on-titan.gif';
import trailerIcon from 'assets/icons/trailer-icon.svg';
import logo from 'assets/icons/logo.png';

import CarouselCards from 'components/CarouselCards';

import { Carousel, Container } from './styles';
import { Button } from 'cdevs-ui';

SwiperCore.use([Autoplay, Scrollbar]);

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  const [animes, setAnimes] = useState<any>({
    carousel01: [],
    carousel02: [],
    carousel03: [],
  });

  useEffect(() => {
    request({ method: 'GET', url: '/anime' }).then(onSuccess).catch(onError);

    function onSuccess(response: any) {
      console.log('Response', response);
      const carousel01 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (position) => response.data.documents[position]
      );
      const carousel02 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
        (position) => response.data.documents[position]
      );
      const carousel03 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map(
        (position) => response.data.documents[position]
      );

      setAnimes({
        carousel01,
        carousel02,
        carousel03,
      });
    }

    function onError(err: any) {
      console.log('Erro aqui', err);
    }

    return () => {};
  }, []);

  return (
    <Container>
      <section className="anime-popular">
        <header>
          <img src={logo} alt="logo" />
          <ul>
            <li>Início</li>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Bombando</li>
            <li>Minha lista</li>
          </ul>
        </header>

        <Carousel
          className="mySwiper"
          direction="vertical"
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
        >
          <SwiperSlide>
            <div className="content-slide">
              <h1>
                Demon <br /> Slayer
              </h1>

              <figure>
                <img src={trailerIcon} alt="trailer icon" />
                <figcaption>
                  <small>See video</small>
                  <span>Oficial Trailler</span>
                </figcaption>
              </figure>

              <Button
                width="150px"
                height="45px"
                color="#ffffff"
                bgColor="#D5282A"
                disabled={false}
              >
                Watch
              </Button>
            </div>

            <img className="bg-slide" src={demonSlayerGif} alt="demon slayer" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="content-slide">
              <h1>
                Dragon Ball <br /> Super
              </h1>

              <figure>
                <img src={trailerIcon} alt="trailer icon" />
                <figcaption>
                  <small>See video</small>
                  <span>Oficial Trailler</span>
                </figcaption>
              </figure>

              <Button
                width="150px"
                height="45px"
                color="#ffffff"
                bgColor="#D5282A"
                disabled={false}
              >
                Watch
              </Button>
            </div>
            <img className="bg-slide" src={dragonBallGif} alt="dragon ball super" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="content-slide">
              <h1>
                Atack on <br /> Titan
              </h1>

              <figure>
                <img src={trailerIcon} alt="trailer icon" />
                <figcaption>
                  <small>See video</small>
                  <span>Oficial Trailler</span>
                </figcaption>
              </figure>

              <Button
                width="150px"
                height="45px"
                color="#ffffff"
                bgColor="#D5282A"
                disabled={false}
              >
                Watch
              </Button>
            </div>
            <img className="bg-slide" src={atackOnTitan} alt="dragon ball super" />
          </SwiperSlide>
        </Carousel>
      </section>

      <section className="carousel-cards carousel-one">
        <span className="title-carousel">Lançados nos últimos 12 meses</span>
        <CarouselCards data={animes.carousel01} />
      </section>

      <section className="carousel-cards carousel-two">
        <span className="title-carousel">Continuar assistindo</span>
        <CarouselCards data={animes.carousel02} />
      </section>

      <section className="carousel-cards carousel-three">
        <span className="title-carousel">Em alta</span>
        <CarouselCards data={animes.carousel03} />
      </section>
    </Container>
  );
}

export default HomePage;
