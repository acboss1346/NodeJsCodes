const { PrismaClient } = require('@prisma/client');
// Alternative (if generated manually in a custom folder):
// const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient();

async function main() {
  // CREATE
  const product = await prisma.product.create({
    data: {
      name: "Blue T-shirt",
      price: 299.99,
    },
  });
  console.log("Created:", product);

  // READ
  const allProducts = await prisma.product.findMany();
  console.log("All products:", allProducts);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();   // close DB connection
  });
