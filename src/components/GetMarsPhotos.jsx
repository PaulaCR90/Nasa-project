const GetMarsPhotos = ({ date, setMarsBox }) => {
  const MarsLink = `${
    import.meta.env.VITE_APP_NASA_API_URL
  }/mars-photos/api/v1/rovers/curiosity/photos?api_key=${
    import.meta.env.VITE_APP_NASA_API_KEY
  }&earth_date=${date}`;

  fetch(MarsLink)
    .then((res) => res.json())
    .then((res) => setMarsBox(res));
};

export default GetMarsPhotos;
