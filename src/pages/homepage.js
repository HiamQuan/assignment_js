import Banner from '../component/banner';
import News from '../component/news-list';
// eslint-disable-next-line import/no-cycle
import Header from '../component/header';
import Footer from '../component/footer';
import ProductHome from '../component/products-list';

const HomePage = {
  async print() {
    return /* html */ `
            <div id="header">  
                ${Header.print()}
            </div>
            <div class="my-7">
                ${Banner.print()}
            </div>
            <div class="news bg-gray-50">
                ${await News.print()}
                ${await ProductHome.print()}
            </div>
            ${Footer.print()}      
        `;
  },
  afterPrint() {
    Header.afterPrint();
  },
};
export default HomePage;
