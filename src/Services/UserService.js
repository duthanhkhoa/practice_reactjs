// import axios from "axios";
import axios from "./customize-axios"; // import từ customize-axios tự khởi tạo

const fetchAllUser = (page) => {
    // Gọi api trả về danh sách có 6 users/trang
    return axios.get(`/api/users?page=${page}`);

}

// export dạng object
export { fetchAllUser };