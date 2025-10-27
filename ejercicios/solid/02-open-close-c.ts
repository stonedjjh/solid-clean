//import axios from "axios";

export class HttpClient {
  /*
    async get(url: string) {
    const { data, status } = await axios.get(url);
    console.log(`Status: ${status}`);
    return { data, status };
  }*/

  async get(url: string) {
    const response = await fetch(url);
    const { ok, status } = await response;
    console.log("Fetch ok:", ok);
    console.log("Fetch status:", status);
    console.log("Fetch response:", response);
    const data = await response.json();
    console.log(`Status: ${response.status}`);
    return { data, status: response.status };
  }
}
