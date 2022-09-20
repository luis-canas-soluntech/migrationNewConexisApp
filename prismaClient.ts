import { PrismaClient } from "@prisma/client";

//en el caso de procesos de larga duracino se recomienda hacerlo asi e importarlo al usarlo para solo crear una instacia

let prisma = new PrismaClient();

//* se puede desconectar el cliente de prisma, pero no se recomienda en aplicaciones que corern continuamente
// .finally(async () => {
//   await prisma.$disconnect();
// });

//* se pueden correr queries con la vairiable prisma , desconectar on finally o on catch
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

export default prisma;
