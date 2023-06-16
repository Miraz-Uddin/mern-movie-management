import mongoose from "mongoose";
export default function dbConnect() {
  const {
    DB_USERNAME: user,
    DB_PASSWORD: pass,
    DB_CLUSTER: cluster,
    DB_NAME: db,
  } = process.env;
  const OPTIONS = { user, pass, autoIndex: true };
  const URI = `mongodb+srv://<username>:<password>@${cluster}/${db}?retryWrites=true&w=majority`;
  mongoose.connect(URI, OPTIONS).then(
    () => {
      console.log("Database Connected");
    },
    (err) => {
      console.log("Error While Connecting Database !!!");
      console.log(e);
    }
  );
}
