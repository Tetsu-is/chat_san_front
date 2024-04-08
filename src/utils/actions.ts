import axios from "axios"

export const getMessage = async (
    offset: number,
    limit: number
) => {
    const res = await axios.get("http://localhost:8080/messages?offset="+ offset + "&limit=" + limit)
    const data = res.data.messages;
    return data;
}

export const postMessage = async(messageBody: string) => {
    console.log("postMessage");
    const data = {
        body: messageBody
    }
    const res = await axios.post("http://localhost:8080/messages", data)
    console.log(res);
    return res;
}