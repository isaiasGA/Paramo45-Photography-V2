import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID DA0H1prlR7FpJg1MyrKK5JqvhsNkZ80FysReUCNxNJA"
  }
});