import MapContainer from "./_components/MapContainer";
import ProfileCard from "./_components/ProfileCard";
import SaveFootPrintButton from "./_components/SaveFootPrintButton";
import StartButton from "./_components/StartButton";

const MainPage = () => {
  return (
    <>
      <ProfileCard />
      <MapContainer />
      <StartButton />
      <SaveFootPrintButton />
    </>
  );
};

export default MainPage;
