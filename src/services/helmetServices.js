// import { client } from "./apiClient";

// export const fetchHelmets2 = async () => {
//     const { data: items, errors } = await client.models.Helmet.list();
//     console.log(items);
//     console.log(errors);
//     return items;
// };

// export const fetchHelmets = async () => {
//   try {
//     const { data: items, errors } = await client.models.Helmet.list();
//     if (errors) {
//       console.error('Errors fetching helmets:', errors);
//       throw errors;
//     }
//     return items;
//   } catch (error) {
//     console.error('Error fetching helmets:', error);
//     throw error;
//   }
// };

// export const createHelmet = async (helmetData) => {
//     try {
//       const { data: createdHelmet, errors } = await client.models.Helmet.create(helmetData);
//       if (errors) {
//         console.error('Errors creating helmet:', errors);
//         throw errors;
//       }
//       return createdHelmet;
//     } catch (error) {
//       console.error('Error creating helmet:', error);
//       throw error;
//     }
//   };

// const createHelmet = async (id, alias) => {
//   if (id) {
//     try {
//       let result = await client.models.Helmet.create({
//         id: id,
//         alias: alias,
//       });
//       console.log(result);
//       return true; // Indicate success
//     } catch (error) {
//       console.error("Error creating helmet:", error);
//       return false; // Indicate failure
//     }
//   }
//   return false; // No content provided
// };

// export const clearAllHelmets = async () => {
//     try {
//       const { data: helmets } = await client.models.Helmet.list();

//       // Delete all helmets
//       await Promise.all(
//         helmets.map((helmet) => client.models.Helmet.delete({ id: helmet.id }))
//       );

//       // Clear the local state
//       console.log("All helmets cleared successfully");
//     } catch (error) {
//       console.error("Error clearing helmets:", error);
//     }
//   };