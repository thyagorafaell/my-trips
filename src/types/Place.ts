type Place = {
	id: string;
	name: string;
	slug: string;
	location: {
		latitude: number;
		longitude: number;
	};
};

export default Place;