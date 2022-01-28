import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Container, SlideItem } from './styles';

SwiperCore.use([FreeMode, Navigation]);

interface IProps {
  data?: any[];
}

export default function CarouselCards({ data }: IProps) {
  return (
    <Container>
      <Swiper
        freeMode={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        breakpoints={{
          '0': {
            slidesPerView: 1.5,
            spaceBetween: 12,
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          '1024': {
            slidesPerView: 5.1,
            spaceBetween: 12,
          },
          '1540': {
            slidesPerView: 6.1,
            spaceBetween: 12,
          },
        }}
        className="mySwiper"
      >
        {console.log('data', data)}
        {data?.map((anime) => (
          <SwiperSlide>
            <SlideItem bg={anime.cover_image}>
              <span>{anime.titles.en}</span>
              <small>Season {anime.season_period || 1}</small>
            </SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
