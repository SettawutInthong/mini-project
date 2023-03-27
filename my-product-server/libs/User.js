const mysql = require("mysql");

module.exports = {
    createUser: async (pool, username,userTypeId, password, firstName, lastName, email) => {
        var sql = "INSERT INTO users (user_name,user_type_id, user_pwd, first_name, last_name, email) "
            + "VALUES (?, ?, ?, ?,?,?)";
        sql = mysql.format(sql, [username,userTypeId, password, firstName, lastName, email]);

        return await pool.query(sql);
    },
    getByUserId: async (pool, userId) => {
        var sql = "SELECT * FROM users WHERE user_id = ?";
        sql = mysql.format(sql, [userId]);

        return await pool.query(sql);
    },
    updateUser: async (pool, userId, username,userTypeId,password, firstName, lastName, email) => {
        var sql = "UPDATE users SET "
                + "user_name=?,"
                + "user_type_id=?,"
                + "user_pwd=?,"
                + "first_name=?,"
                + "last_name=?,"
                + "email=? "
                + "WHERE user_id = ?";
        sql = mysql.format(sql, [username,userTypeId, password, firstName, lastName, email]);

        return await pool.query(sql);
    },
    deleteUser: async (pool, userId) => {
        var sql = "DELETE FROM users WHERE user_id = ?";
        sql = mysql.format(sql, [userId]);

        return await pool.query(sql);
    },

    getSumUser: async (pool) => {
        var sql = "SELECT a.user_type_id,"
                    + "b.user_type_name,"
                    + "SUM(a.role_id) as user_count "
                    + "FROM users a "
                    + "JOIN user_types b ON a.user_type_id = b.user_type_id "
                    + "GROUP BY a.user_type_id, b.user_type_name";
        
        return await pool.query(sql);
    }
}