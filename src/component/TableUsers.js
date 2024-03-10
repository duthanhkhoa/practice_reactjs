import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../Services/UserService'; // import dạng object

import ReactPaginate from 'react-paginate'; // Phân trang

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]); //Khởi tạo biến lưu danh sách, listUsers: danh sách, setListUsers: dùng để cập nhật listUsers
    const [totalUsers, setTotalUsers ] = useState(0); // Biến tổng số users
    const [totalPages, setTotalPages] = useState(0); // Biến tổng số trang

    useEffect(() => {
        // Call apis
        getUsers(1); // Truyền vào 1 mặc định để khi load là trang 1 
    },[])

      // Lấy kết quả (async và await dùng để chờ khi gọi fetchAllUser() )
    const getUsers = async (page) => {
        let res = await fetchAllUser(page); // Gọi api lấy danh sách users bên fetchAllUser

        // Kiểm tra res nếu có tồn tại điều kiện thì setListData
        if(res && res.data){
            console.log(res.data)
            setTotalUsers(res.total) // Cập nhật số lượng users
            setListUsers(res.data) // Cập nhật danh sách người dùng
            setTotalPages(res.total_pages) // Cập nhật số trang 
        }
      }

console.log(listUsers) // Check danh sách 

// Nhấn vào số trang thay đổi dữ liệu theo trang
    const handlePageClick = (even) => {
        // convert string sang number
        getUsers(+even.selected + 1);
    }

    return (
        <> 

        {/* Bảng danh sách user  */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && // Biểu thức kiểm tra xem listUsers có tồn tại và có ít nhất 1 phần tử hay không
                    listUsers.map((item, index) => { // Lặp qua từng phần tử trong mảng listUsers và thực hiện hành động cho mỗi phần tử
                        return (
                            <tr key={`users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>    

        {/* Phân Trang */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}


                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    )
}

export default TableUsers;