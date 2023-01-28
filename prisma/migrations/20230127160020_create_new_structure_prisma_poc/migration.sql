-- CreateTable
CREATE TABLE "contents" (
    "id" SERIAL NOT NULL,
    "link" VARCHAR NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'tosee',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT,
    "title" VARCHAR NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "labels" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "labels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContentToLabel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contents_link_key" ON "contents"("link");

-- CreateIndex
CREATE UNIQUE INDEX "types_name_key" ON "types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "labels_name_key" ON "labels"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentToLabel_AB_unique" ON "_ContentToLabel"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentToLabel_B_index" ON "_ContentToLabel"("B");

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToLabel" ADD CONSTRAINT "_ContentToLabel_A_fkey" FOREIGN KEY ("A") REFERENCES "contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToLabel" ADD CONSTRAINT "_ContentToLabel_B_fkey" FOREIGN KEY ("B") REFERENCES "labels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
