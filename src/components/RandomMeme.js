import React, { useState, useEffect } from 'react';

const RandomMeme = () => {
  const [memeUrl, setMemeUrl] = useState('');
  const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';

  useEffect(() => {
    const fetchRandomMeme = async () => {
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.API_KEY, // Replace with your actual RapidAPI key
          'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data && data.length > 0) {
          setMemeUrl(data[0].image)
        //   console.log(data[0].image)
        } else {
          console.error('No memes found');
        }
      } catch (error) {
        console.error('Error fetching meme:', error);
      }
    };

    fetchRandomMeme();
  }, []);

  return (
    <div className="flex flex-col   h-44">
        <h1 className='text-start mb-1'>Random Meme</h1>
    {memeUrl ? (
      <img src={memeUrl} alt="Random Programming Meme" className=" h-36  rounded-md" />
    ) : (
      <p className="text-red-600 font-bold">Failed to fetch meme</p>
    )}
  </div>
  );
};

export default RandomMeme;
