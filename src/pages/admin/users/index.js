import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import SideBar from '../../../component/admin/sidebar';
import TableUsers from '../../../component/admin/userTable';
import reRender from '../../../utils';
import { remove } from '../../../api/user';

const Users = {
  async print() {
    return /* html */ `<div class="min-h-screen flex relative">
      ${SideBar.print()}
      <div class="flex flex-col mx-auto">
          <div class=" font-bold text-2xl my-4 uppercase text-center"><h2>Quản lý tài khoản</h2></div>
          ${await TableUsers.print()}
      </div>
</div>`;
  },
  async afterPrint() {
    // lấy danh sách button sau khi render
    const buttons = document.querySelectorAll('.btn');
    // tạo vòng lặp cho nodelist button
    buttons.forEach((btn) => {
      // lấy ID từ thuộc tính data-id của button
      const { id } = btn.dataset;
      btn.addEventListener('click', () => {
        const confirm = window.confirm('Ban co muon xoa tai khoan nay khong?');
        if (confirm) {
          // gọi hàm delete trong folder API và bắn id vào hàm
          remove(id).then(() => {
            console.log('Da xoa thanh cong');
            reRender(Users, '#app');
            toastr.success('Bạn đã xóa thành công !', { timeout: 3000 });
          });
        }
      });
    });
  },
};
export default Users;
