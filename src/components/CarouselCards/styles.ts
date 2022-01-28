import styled from 'styled-components';

interface ISlideItem {
  bg: string;
}

export const Container = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 70px;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: auto;
    height: auto;
    padding: 44px 15px;

    top: 22px;
    color: #ffffff;
    background-color: #00000078;
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    visibility: hidden;
  }

  .swiper-slide {
    height: 230px;

    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    overflow: hidden;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1540px) {
    .swiper-button-next,
    .swiper-button-prev {
      padding: 60px 15px;
    }
    .swiper-slide {
      height: 163px;
    }
  }
`;

export const SlideItem = styled.div<ISlideItem>`
  width: 100%;
  height: 100%;
  padding: 14px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 7px;

  background-color: black;
  border: none;
  background: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  text-align: left;

  cursor: pointer;

  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  small {
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: -0.02em;

    color: #ffffff;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;

    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      360deg,
      rgb(0 0 0 / 73%) 39.82%,
      rgb(0 34 255 / 0%) 100%,
      rgb(35 255 0 / 0%) 100%
    );
  }
`;
