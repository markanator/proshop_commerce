/*
  Warnings:

  - You are about to alter the column `rating` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DECIMAL NOT NULL,
    "numReviews" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "countInStock" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("brand", "category", "countInStock", "createdAt", "description", "id", "image", "name", "numReviews", "price", "rating", "updatedAt", "userId") SELECT "brand", "category", "countInStock", "createdAt", "description", "id", "image", "name", "numReviews", "price", "rating", "updatedAt", "userId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
