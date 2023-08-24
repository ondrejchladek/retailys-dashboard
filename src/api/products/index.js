import { applyPagination } from '../../utils/apply-pagination';
import { deepCopy } from '../../utils/deep-copy';
import axios from 'axios';

class ProductsApi {
  async getProducts(request = {}) {
    const { filters, page, rowsPerPage } = request;

    const result = await axios.get('../api/products/data');

    let data = [];

    result.data.articles.forEach(article => {
      let imageUrl = "";
      let shortCt = "";

      if (article.multidata && article.multidata.length > 0) {
        if (article.multidata[0].images && article.multidata[0].images.length > 0)
          imageUrl = article.multidata[0].images[0].url;

        if (article.multidata[0].short_content)
          shortCt = article.multidata[0].short_content;

        if (imageUrl !== "" && shortCt !== "") {
          data.push({
            id: article.id,
            name: article.default_name,
            category: article.family.id,
            image: imageUrl,
            status: article.state,
            short_content: shortCt,
          });
        }
      }
    });

    let count = data.length;

    if (typeof filters !== 'undefined') {
      data = data.filter((product) => {
        if (typeof filters.name !== 'undefined' && filters.name !== '') {
          const nameMatched = product.name.toLowerCase().includes(filters.name.toLowerCase());

          if (!nameMatched) {
            return false;
          }
        }

        // It is possible to select multiple category options
        if (typeof filters.category !== 'undefined' && filters.category.length > 0) {
          const categoryMatched = filters.category.includes(product.category);

          if (!categoryMatched) {
            return false;
          }
        }

        // It is possible to select multiple status options
        if (typeof filters.status !== 'undefined' && filters.status.length > 0) {
          const statusMatched = filters.status.includes(product.status);

          if (!statusMatched) {
            return false;
          }
        }

        // Present only if filter required
        if (typeof filters.inStock !== 'undefined') {
          const stockMatched = product.inStock === filters.inStock;

          if (!stockMatched) {
            return false;
          }
        }

        return true;
      });
      count = data.length;
    }

    if (typeof page !== 'undefined' && typeof rowsPerPage !== 'undefined') {
      data = applyPagination(data, page, rowsPerPage);
    }

    return Promise.resolve({
      data,
      count
    });
  }
}


export const productsApi = new ProductsApi();