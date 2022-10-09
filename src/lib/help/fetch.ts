
let host = "https://rbc.trendercom.net/api/v1";
export const post = (url:string, token:string, body:string)=>{
    return fetch(host + url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Authorization": `Token ${token}`,
          "Content-Type": "application/json",
        }
      })
    }
export const get = (url:string, token:string)=>{
    return fetch(host + url, {
        method: "GET",
        headers: {
          "Authorization": `Token ${token}`,
          "Content-Type": "application/json;charset=utf-8",
        }
      })
    }
    
    export const ask = (method: "POST" | "PUT" | "GET" | "DELETE", url:string, data:any = {}, token:string="")=>{
      return fetch(host + url, {
        method,
        headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
};