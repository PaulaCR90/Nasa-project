const GetAPODPhotos = ({ date, setApiBox }) => {
    const ApodLink = `${
        import.meta.env.VITE_APP_NASA_API_URL
      }/planetary/apod?date=${date}&api_key=${
        import.meta.env.VITE_APP_NASA_API_KEY
      }`;
  
    fetch(ApodLink)
      .then((res) => res.json())
      .then((res) => setApiBox(res));
      };

export default GetAPODPhotos;