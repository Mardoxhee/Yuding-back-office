export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      // "Content-Type": "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${user}`,
      // Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODUxYzIwM2I1NzIwZTEyODBhM2UyYyIsImlhdCI6MTY1Mjg5MDY1NywiZXhwIjoxNjUzMzIyNjU3fQ.VPgsdTnlpQUQsxvCUdodL1h9M2IUlJT911N3cTv1cZc"}`,
    };
  } else return "no valid token";
}
