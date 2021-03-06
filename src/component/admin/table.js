import { getAll } from '../../api/posts';

const TableNews = {
  async print() {
    const { data } = await getAll();
    return /* html */ `  <div class="flex flex-col m-auto">
    <button class="text-center rounded-full"> Thêm</button>
    <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-2">
      <div class="py-2 align-middle inline-block sm:px-2 lg:px-0">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="px-8 divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-0 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID/Ảnh
                </th>
                <th scope="col" class="px-0 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tiêu đề
               </th>
                <th scope="col" class="px-0 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mô tả chi tiết
                </th>
                <th scope="col" class="px-0 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tạo lúc
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              ${data.map((post) =>/* html */`<tr>
              <td class="px-2 py-4 whitespace-wrap">
                <div class="flex items-center">
                  <div class=" text-sm font-medium text-gray-900">
                    ${post.id}
                  </div>
                  <div class="flex-shrink-0 h-10 w-10 lg:mx-3">
                    <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                  </div>
                </div>
              </td>
              <td class="lg:px-4 py-4 whitespace-wrap text-center">
                <div class="text-sm text-gray-900">${post.title}</div>
                <div class="text-sm text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-wrap max-w-md">
                <span class="px-4 inline-flex flex-wrap text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  ${post.desc}
                </span>
              </td>
              <td class="px-4 py-4 text-center whitespace-wrap text-sm text-gray-500">
                ${post.createdAt}
              </td>
              <td class="px-4 py-4 whitespace-wrap text-right text-sm font-medium">
                <a href="/admin/news/${post.id}/edit" data-id="${post.id}" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
              </td>
              <td class="px-4 py-4 whitespace-wrap text-right text-sm font-medium">
              <button data-id="${post.id}" class="text-indigo-600 hover:text-indigo-900 btn">Xóa</button>
            </td>
            </tr>`).join('')}
              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
  },
};
export default TableNews;
