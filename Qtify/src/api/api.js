import axios from "axios";
export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";
export const fetchTopAlbum=async()=>{
   try {
    const res= await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data
   } catch (error) {
    console.log(error);
   }
}
export const fetchNewAlbum=async()=>{
   try {
      const res= await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
      return res.data
   } catch (error) {
      console.log(error);
   }
}
export const fetchSong=async()=>{
   try {
      const res= await axios.get(`${BACKEND_ENDPOINT}/songs`);
      return res.data
   } catch (error) {
      console.log(error);
   }
}
