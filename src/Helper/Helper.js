import axios from 'axios';

let adminUrl = "http://localhost:2000/api/";
if (process.env?.REACT_APP_ENV === "production") {
    adminUrl = "http://localhost:2000/api/"; 
   }

export const baseURL=adminUrl;
export const course_storagePath=baseURL+'/storage/';
let axiosInstance=axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    async function(config){
        console.log('16',config);
        const token=localStorage.getItem('token') || sessionStorage.getItem('token');
        if(token !== null || token !== undefined){
            config.headers['x-access-token']=token;
        }
        return config;
    },
    function(err){
        return Promise.reject(err)
    }
)

export default axiosInstance;