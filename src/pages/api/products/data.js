import axios from 'axios';
import LRU from 'lru-cache';

const cache = new LRU({
  max: 100, // The maximum size of the cache
  maxAge: 1000 * 60  // The maximum age in milliseconds
});

export default async function handler(req, res) {
  let url = `https://api.retailys.com/v1/System/Content/Articles?page=0&per_page=16&expanded=false`;

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
    res.status(error.response || 500).json({ message: error.message });
  }
}