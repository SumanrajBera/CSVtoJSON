const db = require("../config/db");

async function distribution() {
  const conn = await db.getConnection();

  try {
    const [rows] = await conn.query(`
      SELECT 
        CASE 
          WHEN age < 20 THEN '< 20'
          WHEN age BETWEEN 20 AND 40 THEN '20 - 40'
          WHEN age > 40 AND age <= 60 THEN '40 - 60'
          ELSE '> 60'
        END AS age_group,
        COUNT(*) AS count
      FROM users
      GROUP BY age_group
      ORDER BY 
        CASE 
          WHEN age_group = '< 20' THEN 1
          WHEN age_group = '20 - 40' THEN 2
          WHEN age_group = '40 - 60' THEN 3
          WHEN age_group = '> 60' THEN 4
        END
    `);

    return rows;
  } catch (err) {
    console.error("Error fetching distribution:", err);
    throw err;
  } finally {
    conn.release();
  }
}

module.exports = distribution;
