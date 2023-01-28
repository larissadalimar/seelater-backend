import prisma from "../src/database/db.js";

async function main() {

    const types = await prisma.type.findMany();

    if(!types.length)
    await prisma.type.createMany({
        data: [
            {name: 'video'},
            {name: 'article'},
            {name: 'course'},
            {name: 'podcast'},
            {name: 'music'},
            {name: 'movie'}
        ]
    })

    const contents = await prisma.content.findMany();
    if(!contents.length){
        await prisma.content.create({
            data:{
                title: "Configs do TypeScript",
                link: "https://dev.to/daniel__bernardino/good-configs-for-typescript-1nhf",
                type: {
                    connect: {name: 'article'}
                },
                Label: {
                    create: [
                        { name: 'tech'}
                    ]
                }
            }
        });
        
        await prisma.content.create({
            data: {
                title: "Minicurso Prisma",
                comment: "aula 5, sobre seed",
                link: "https://www.youtube.com/watch?v=qkb9JIYNtu4",
                type: {
                    connect: {name: 'course'}
                },
                Label: {
                    connect: [
                        {name: 'tech'}
                    ], 
                    create: [
                        {name: 'prisma'}
                    ]
                }
            }
        });

        await prisma.content.create({
            data: {
                title: "Minicurso Prisma",
                comment: "aula 3",
                link: "https://www.youtube.com/watch?v=k0BO_H3zTWU",
                type: {
                    connect: {name: 'course'}
                },
                Label: {
                    connect: [
                        {name: 'tech'},
                        {name: 'prisma'}
                    ]
                }
            }
        });

        await prisma.content.create({
            data: {
                title: "English Podcast about the Death of Pele",
                link: "https://open.spotify.com/episode/5qcKvWXm9oZneK2ymtS1Yl?si=c0962c9289dc4d4e",
                type: {
                    connect: {name: 'podcast'}
                },
                Label: {
                    create: [
                        {name: 'english'}
                    ]
                }
            }
        });
    }

}

main().then(() => console.log('Banco populado com sucesso!'))
.catch((e) => {
    console.log("Erro ao popular o banco pelo seed");
    console.error(e);
    process.exit(1);
})
.finally( async () => {
    prisma.$disconnect();
});