import React from "react";
import Feeds from "../components/Feeds";

const Home = () => {
  const suggestions = [
    {
      img: "https://mosaic.scdn.co/640/ab67616d00001e0223cc0f0a925845a3de4aca38ab67616d00001e026dd6713eff19dac8dbfede73ab67616d00001e02a69f71a8794e2d867a52f98fab67616d00001e02c4cb3ab94558b3893b1ccbd9",
      text: "Morning Energy☀️",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b2736f04ac90e1fd629656adc0c8",
      text: "Kalp Hastası",
    },
    {
      img: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
      text: "Liked Songs",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb23bb9081eb5614e8e8e81990",
      text: "Neşet Ertaş",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb1f7125c244b5d139a6a31d20",
      text: "Gaye Su Akyol",
    },
    {
      img: "https://mosaic.scdn.co/640/ab67616d00001e0223cc0f0a925845a3de4aca38ab67616d00001e026dd6713eff19dac8dbfede73ab67616d00001e02a69f71a8794e2d867a52f98fab67616d00001e02c4cb3ab94558b3893b1ccbd9",
      text: "Morning Energy☀️",
    },
    {
      img: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
      text: "Liked Songs",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb23bb9081eb5614e8e8e81990",
      text: "Neşet Ertaş",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb1f7125c244b5d139a6a31d20",
      text: "Gaye Su Akyol",
    },
    {
      img: "https://mosaic.scdn.co/640/ab67616d00001e0223cc0f0a925845a3de4aca38ab67616d00001e026dd6713eff19dac8dbfede73ab67616d00001e02a69f71a8794e2d867a52f98fab67616d00001e02c4cb3ab94558b3893b1ccbd9",
      text: "Morning Energy☀️",
    },
  ];

  const latests = [
    {
      img: "https://i.scdn.co/image/e3bb2d83ee83172df060cc84149cf605c07c40cc",
      name: "Zihnimin Kıvrımları",
      owner: "M. Serdar Kuzuloğlu",
    },
    {
      img: "https://i.scdn.co/image/d1b898e32bd119fb3125dec0fbe6e29bb3eada99",
      name: "Deniz Göktaş'a Ayıracak Vaktim Yok",
      owner: "Kalp Hastası",
    },
    {
      img: "https://i.scdn.co/image/49ce6394fc30a039eb6c5c27cbfdc9655ee68a4a",
      name: "Tutkulu Bir Yazar: Yalın Alpay",
      owner: "Flaps Club",
    },
    {
      img: "https://i.scdn.co/image/ab67656300005f1fa78e1207b1e57480ed47dbe6",
      name: "Odadaki Fil",
      owner: "Odadaki Fil",
    },
    {
      img: "https://i.scdn.co/image/e3f39cf6fd78c20bb521264056f98157458a8e98",
      name: "Bugünde Bugün - Kaan Sezyum",
      owner: "PLAYTUSU",
    },
    {
      img: "https://mosaic.scdn.co/640/ab67616d00001e0223cc0f0a925845a3de4aca38ab67616d00001e026dd6713eff19dac8dbfede73ab67616d00001e02a69f71a8794e2d867a52f98fab67616d00001e02c4cb3ab94558b3893b1ccbd9",
      name: "Morning Energy☀️",
      owner: "Morning Energy☀️",
    },
    {
      img: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
      name: "Liked Songs",
      owner: "Liked Songs",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb23bb9081eb5614e8e8e81990",
      name: "Neşet Ertaş",
      owner: "Neşet Ertaş",
    },
  ];

  return (
    <>
      <div className="mt-2">
        <div className="font-bold text-3xl">Good evening</div>
        <div className="large-cards">
          {suggestions.map((card) => (
            <div className="large-cards-card">
              <img
                className="h-20 w-20 object-cover drop-shadow-md"
                src={card.img}
                alt=""
              />
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </div>
      <Feeds
        title="Popular with listeners of Fularsiz Entellik"
        data={latests}
      />
      <Feeds title="Your favorite artists" data={latests} roundedType="full" />
      <Feeds title="Recently played" data={latests} roundedType="full" />
    </>
  );
};

export default Home;
