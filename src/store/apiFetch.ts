import { BASE_URL } from "@/assets/env";
import axios from "axios";

export const apiFetch = async (url: string) => {

    const res = await axios.get(`${BASE_URL}/${url}`);
    if (res) {
        return {
            data: res.data
        }
    } else {
        return {
            data: null
        }
    }
}

// go to vuex and fetch it, then push it to frontend