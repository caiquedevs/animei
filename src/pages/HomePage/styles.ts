import styled, { keyframes } from 'styled-components';
import { Swiper } from 'swiper/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: calc(100%);
  height: auto;
  padding-bottom: 100px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-in-out;

  img.bg-slide {
    opacity: 0;
    transition: 2s opacity;
  }

  section.anime-popular {
    width: 100%;
    height: 100vh;

    background: white;
    overflow: hidden;

    header {
      width: 100%;
      padding: 0 70px;

      display: flex;
      justify-content: space-between;

      position: absolute;
      top: 50px;
      left: 0;
      z-index: 3;

      ul {
        display: flex;
        gap: 30px;
      }

      ul li {
        font-weight: bold;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: -0.02em;
        color: #ffffff;
      }
    }

    .swiper {
      width: 100%;
      height: 100%;
      background-color: #141414;
    }

    .swiper-slide {
      background-color: #141414;

      &:before {
        content: '';

        width: 100%;
        height: 100%;

        display: flex;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        background: rgba(24, 26, 39, 0.4);
      }

      &:after {
        content: '';

        width: 100%;
        height: 100%;

        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        background: linear-gradient(360deg, #141414 0%, rgba(20, 20, 20, 0) 32.55%);
      }
    }

    .swiper-slide-active {
      img.bg-slide {
        opacity: 1;
      }

      h1 {
        transform: translate(0px, 0px) !important;
      }

      button {
        opacity: 1 !important;
      }

      figure {
        opacity: 1 !important;
      }
    }

    .swiper-slide .content-slide {
      width: auto;
      height: auto;
      margin-top: 185px;
      margin-left: 260px;

      display: flex;
      flex-direction: column;
      z-index: 3;

      h1 {
        font-family: Archivo;
        font-weight: bold;
        font-size: 72px;
        line-height: 90px;
        letter-spacing: -0.02em;
        color: #ffffff;

        transform: translate(0px, 60px);
        transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      figure {
        margin-top: 25px;
        margin-bottom: 52px;
        display: flex;
        align-items: center;
        gap: 12px;

        opacity: 0;
        transition: 1s opacity;
      }

      figure figcaption {
        display: flex;
        flex-direction: column;
        gap: 9px;

        small {
          font-weight: 500;
          font-size: 13px;
          line-height: 14px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        span {
          font-weight: bold;
          font-size: 13px;
          line-height: 14px;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-transform: uppercase;
        }
      }

      button {
        opacity: 0;
        transition: opacity 1s;
      }
    }

    .swiper-slide img.bg-slide {
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      object-fit: cover;
    }

    .swiper-vertical > .swiper-scrollbar {
      width: 3px;
      height: 40%;

      left: 73px;
      top: 25%;
      z-index: 10;

      border-radius: 0px;
      background: #3a3434;

      &:after {
        content: '01';
        display: flex;

        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        letter-spacing: -0.02em;
        color: #ffffff;

        position: absolute;
        top: -20px;
        left: -5px;
      }

      &:before {
        content: '03';
        display: flex;

        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        letter-spacing: -0.02em;

        color: #ffffff;

        position: absolute;
        bottom: -20px;
        left: -5px;
      }
    }

    .swiper-scrollbar-drag {
      background-color: #ffffff;
      border-radius: 0px;
    }
  }

  .carousel-cards {
    display: flex;
    flex-direction: column;
    gap: 13px;

    z-index: 3;

    span.title-carousel {
      margin-left: 70px;
      font-weight: 500;
      font-size: 23px;
      line-height: 25px;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
  }

  .carousel-cards.carousel-one {
    margin-top: -96px;
  }

  .carousel-cards.carousel-two {
    margin-top: 55px;
  }

  .carousel-cards.carousel-three {
    margin-top: 55px;
  }

  @media screen and (min-width: 991px) {
  }
`;

export const Carousel = styled(Swiper)``;
