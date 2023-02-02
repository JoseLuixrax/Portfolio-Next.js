import HomeDescription from '@/Components/home/HomeDescription/HomeDescription';
import HomePhoto from '@/Components/home/HomePhoto/HomePhoto';
import HomeTags from '@/Components/home/HomeTags/HomeTags';
import NavBar from '@/Components/Navbar/Navbar';
import { HomePageWrapper } from '../components/home/Home.styled';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <NavBar />
      <HomePhoto />
      <HomeDescription />
      <HomeTags />
    </HomePageWrapper>
  );
};

export default HomePage;