import { PrismaClient } from '@prisma/client';
import { products, users } from './data';

const prisma = new PrismaClient();

async function main() {
  console.log(`🏎️🏎️🏎️ REMOVING ALLL ...`);
  await prisma.user.deleteMany({});
  await prisma.product.deleteMany({});

  console.log(`✨✨✨ Start seeding ...`);
  console.log(`Creating [${users.length}] users ...`);
  for (const user of users) {
    const u = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        isAdmin: user?.isAdmin ?? false,
      },
    });
    console.log(`🎉🎉 Created user with id: ${u.id}`);
  }

  console.log(`Creating [${products.length}] products ...`);
  for (const product of products) {
    const p = await prisma.product.create({
      data: {
        ...product,
        author: {
          connect: {
            email: 'admin@example.com',
          },
        },
      },
    });
    console.log(`🎉🎉🎉 Created products with id: ${p.id}`);
  }
  console.log(`🏁🏁🏁 Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
