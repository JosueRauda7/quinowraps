import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUnsplashImages = (search: string) => {
  const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${search}`, {
        headers: {
          Authorization: `Client-ID ${unsplashAccessKey}`,
        }
      });
      setImagesUrl(response.data.results.map((image: any) => image.urls.regular));
    };

    fetchImages();
  }, [search, unsplashAccessKey]);

  return imagesUrl;
}