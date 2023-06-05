import { LastSeen, Header } from '../components';
import BestMusicWeek from '../components/BestMusicWeek';

const Home = () => {
  return (
    <>
      <div style={{ background: '#14182a', width: '98.3%' }}>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <LastSeen />
        <br /> <br /> <br /> <br />
        <BestMusicWeek />
      </div>
    </>
  );
};

export default Home;
