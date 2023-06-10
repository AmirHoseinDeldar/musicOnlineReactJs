import { LastSeen, Header, Footer } from '../components';
import BestMusicWeek from '../components/BestMusicWeek';
import BestSinger from '../components/BestSinger';
import Category from '../components/Category';
import WorldAlbum from '../components/WorldAlbum';

const Home = () => {
  return (
    <>
      <div
        className='overflow-hidden'
        style={{ background: '#14182a', width: '98.3%' }}
      >
        <Header />
        <br />
        <br />
        <br />
        <br />
        <LastSeen />
        <br /> <br /> <br /> <br />
        <BestMusicWeek />
        <br /> <br /> <br /> <br />
        <BestSinger />
        <br /> <br /> <br /> <br />
        <WorldAlbum />
        <br /> <br /> <br /> <br />
        <Category />
        <Footer />
      </div>
    </>
  );
};

export default Home;
