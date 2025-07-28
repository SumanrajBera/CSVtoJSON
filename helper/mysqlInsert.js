const db = require("../config/db");

async function insertUsers(users) {
  const insertQuery = `
    INSERT INTO users (name, address, age, additional_info)
    VALUES (?, ?, ?, ?)
  `;

  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    for (const user of users) {
      await conn.query(insertQuery, [
        user.name,
        user.address,
        user.age,
        user.additionalInfo
      ]);
    }

    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

module.exports = { insertUsers };
