import Gallery from "../components/Gallery/Gallery";
import Layout from "../layout/Layout";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
		<Layout>
			<Banner
				image="/gallery_title_bg.png"
				text="Chez vous, partout et ailleurs"
			/>
			<Gallery />
		</Layout>
	);
};

export default Home;
