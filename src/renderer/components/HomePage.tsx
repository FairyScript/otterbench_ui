import { css } from "@emotion/react";
import __StatusPlaceHolder from '../assets/status.png'
import scrollBar from "../styles/scrollBar";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
const HomePage: React.FC = () => {
  return (
    <div css={css`
      display: flex;
      flex: 1;
      width: 100%;
      overflow: hidden;
      -webkit-app-region: no-drag;
    `}>
      <div css={css`
        flex: 1;
      `}>
        <Banner />
        <PluginList />
      </div>
      <Status />
    </div>
  );
}

export default HomePage

SwiperCore.use([Pagination])
const Banner: React.FC = () => {
  const slideCss = css`
    height: 100%;
  `
  const items = banner.map((v, i) => <SwiperSlide key={i} ><BannerItem {...v} /></SwiperSlide>)
  return (
    <Swiper
      slidesPerView="auto"
      pagination={{ clickable: true }}
      css={css`
        background-color: #ccc;
        height: 170px;
        overflow: hidden;
        border-radius: 10px;

        .swiper-pagination {
          text-align: right;
          left: -20px;
          bottom: 5px;
        }
        .swiper-pagination-bullet {
          border-radius: 25%;
          width: 10px;
          height: 10px;
          background: #fff;
        }
      `}
    >
      {items}
    </Swiper>
  );
}

const images = import.meta.globEager('../assets/banners/*.jpg')

const banner: BannerProp[] = [
  {
    image: images['../assets/banners/banner1.jpg'].default,
    title: 'LIVE直播第61弹！5.4版本前瞻！4月1日19点上演'
  },
  {
    image: images['../assets/banners/banner2.jpg'].default,
    title: 'LIVE番外：第63回制作人来信转播 4月2日上演'
  },
  {
    image: images['../assets/banners/banner3.jpg'].default,
    title: '道具商城新道具上架：2020年猎蛋节系列'
  }
]

interface BannerProp {
  image: string;
  title: string;
}
const BannerItem: React.FC<BannerProp> = ({ image, title }) => {
  return (
    <div css={css`
      width: 100%;
      height: 100%;
      position: relative;
    `}>
      <img
        src={image}
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(.7);

          transition: filter .3s ease-in-out;
          :hover {
            filter: brightness(1);
          }
        `}
      />
      <span css={css`
        position: absolute;
        left: 10px;
        bottom: 5px;
        color: #eee;
        font-weight: bold;
        font-size: 20px;
      `}>
        {title}
      </span>
    </div>
  );
}

const BannerSelect: React.FC = () => {
  return (
    <div>

    </div>
  );
}

const PluginList: React.FC = () => {
  return (
    null
  );
}

const Status: React.FC = () => {
  return (
    <div css={css`
      width: 40%;
      height: 100%;
      margin-left: 35px;
      overflow: auto;
      ${scrollBar};
    `}>
      <img src={__StatusPlaceHolder} alt="" />
    </div>
  );
}
