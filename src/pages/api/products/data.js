import axios from 'axios';
import LRU from 'lru-cache';

const cache = new LRU({
  max: 100, // The maximum size of the cache
  maxAge: 1000 * 120  // The maximum age in millisecond
});

export default async function handler(req, res) {
  let url = `https://api.retailys.com/v1/System/Content/Articles?page=0&per_page=16&expanded=false`;

  const data = cache.get(url);

  if (data) {
    return res.status(200).json(data);
  }

  try {
    const result = await axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'token': process.env.API_TOKEN
      }
    });
    res.status(200).json(result.data);
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    const message = error.message;

    res.status(status).json({ message });
  }
}