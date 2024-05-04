import { connect } from 'mongoose'

main().catch(err => console.log(err));

async function main() {
  await connect(process.env.DATABASE_URL || '');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("Database Connected")
}