const mysql = require("mysql");

module.exports = {
    createProduct: async (pool, productName, productTypeId, price, size, stock) => {
        var sql = "INSERT INTO products (product_name, product_type_id, price, size, stock) "
                    + "VALUES (?, ?, ?, ?, ?)";
        sql = mysql.format(sql, [productName, productTypeId, price, size, stock]);

        return await pool.query(sql);
    },

    getByProductId: async (pool, productId) => {
        var sql = "SELECT * FROM products WHERE product_id = ?";
        sql = mysql.format(sql, [productId]);

        return await pool.query(sql);
    },

    updateProduct: async (pool, productId, productName, productTypeId, price, size, stock) => {
        var sql = "UPDATE products SET "
                + "product_name=?,"
                + "product_type_id=?,"
                + "price=?,"
                + "size=?,"
                + "stock=? "
                + "WHERE product_id = ?";
        sql = mysql.format(sql, [productName, productTypeId ,price, size, stock, productId]);

        return await pool.query(sql);
    },

    deleteProduct: async (pool, productId) => {
        var sql = "DELETE FROM products WHERE product_id = ?";
        sql = mysql.format(sql, [productId]);

        return await pool.query(sql);
    },

    updateImage: async (pool, productId, fileName) => {
        var sql = "UPDATE products SET image_url = ? "
                    + "WHERE product_id = ?";
        sql = mysql.format(sql, [fileName, productId]);

        return await pool.query(sql);
    },

    getSumProduct: async (pool) => {
        var sql = "SELECT a.product_type_id,"
                    + "b.product_type,"
                    + "SUM(a.stock) as product_count "
                    + "FROM products a "
                    + "JOIN product_types b ON a.product_type_id = b.product_type_id "
                    + "GROUP BY a.product_type_id, b.product_type";
        
        return await pool.query(sql);
    }
}