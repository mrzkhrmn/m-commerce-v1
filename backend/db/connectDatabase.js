import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database!");

    /* SEEDING DATA TO DATABASE
    const seedDatabase = async () => {
      await Product.deleteMany({}); // Mevcut verileri temizle
      await Product.insertMany(products); // Yeni verileri ekle
      console.log("Veri tabanına ürünler başarıyla yüklendi.");
    }; 
    
    seedDatabase();
    */
  } catch (error) {
    console.log("Error connecting to mongoDB: " + error.message);
  }
}
