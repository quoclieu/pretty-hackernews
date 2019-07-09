import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  timeout: 5000
});

const ENDPOINTS = Object.freeze({ item: 'item', topstories: 'topstories' });

class HN {
  getItem = itemId => {
    return instance.get(ENDPOINTS.item + '/' + itemId + '.json');
  };

  getTopStories = () => {
    return instance.get(ENDPOINTS.topstories + '.json');
  };
}

export default new HN();
