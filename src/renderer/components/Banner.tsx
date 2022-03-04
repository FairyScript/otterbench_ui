import { css } from '@emotion/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination])
const Banner: React.FC = () => {
  const slideCss = css`
    height: 100%;
  `
  const items = banner.map((v, i) => (
    <SwiperSlide key={i}>
      <BannerItem {...v} />
    </SwiperSlide>
  ))
  return (
    <Swiper
      slidesPerView="auto"
      pagination={{ clickable: true }}
      css={css`
        background-color: #ccc;
        height: 170px;
        overflow: hidden;
        border-radius: 10px;
        margin-left: 10px;
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);

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
  )
}

export default Banner

const images = import.meta.globEager('../assets/banners/*.jpg')

const banner: BannerProp[] = [
  {
    image: images['../assets/banners/banner1.jpg'].default,
    title: 'LIVE直播第61弹！5.4版本前瞻！4月1日19点上演',
  },
  {
    image: images['../assets/banners/banner2.jpg'].default,
    title: 'LIVE番外：第63回制作人来信转播 4月2日上演',
  },
  {
    image: images['../assets/banners/banner3.jpg'].default,
    title: '道具商城新道具上架：2020年猎蛋节系列',
  },
]

interface BannerProp {
  image: string
  title: string
}
const BannerItem: React.FC<BannerProp> = ({ image, title }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: relative;
      `}
    >
      <img
        src={image}
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);

          transition: filter 0.3s ease-in-out;
          :hover {
            filter: brightness(1);
          }
        `}
      />
      <span
        css={css`
          position: absolute;
          left: 10px;
          bottom: 5px;
          color: #eee;
          font-weight: bold;
          font-size: 20px;
          padding: 0 10px;
        `}
      >
        {title}
      </span>
    </div>
  )
}
