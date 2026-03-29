// import { NextResponse } from "next/server";
// import { projects, workExperiences } from "@/constant";
// import dbConnect from "@/lib/mongoose";
// import Project from "@/models/Project";
// import WorkExperience from "@/models/WorkExperience";
// import { v2 as cloudinary } from "cloudinary";
// import path from "path";

// // Initialize Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const dynamic = "force-dynamic";

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const key = searchParams.get("key");

//     if (key !== process.env.SEED_KEY) {
//       return NextResponse.json({ error: "Unauthorized. Pass ?key=YOUR_SEED_KEY" }, { status: 401 });
//     }

//     await dbConnect();

//     // Map projects to their local public folder image paths
//     const imageMap: Record<string, string> = {
//       "Charged": "charged.png",
//       "Cẩm Nang Phố Phường": "cnpp.png",
//       "Experience Point Management System": "epm.png",
//       "Checking Résumé System": "crs.png",
//     };

//     const insertedProjects = [];

//     // Clear existing to avoid duplicates (Optional, but safe for seating)
//     await Project.deleteMany({});
//     await WorkExperience.deleteMany({});

//     for (const project of projects) {
//       const filename = imageMap[project.title];
//       let imageUrl = "";

//       if (filename) {
//         const filePath = path.join(process.cwd(), "public", filename);
//         try {
//           // Upload to Cloudinary
//           const uploadResult = await cloudinary.uploader.upload(filePath, {
//             folder: "portfolio_projects",
//           });
//           imageUrl = uploadResult.secure_url;
//         } catch (uploadError) {
//           console.error(`Failed to upload ${filename}:`, uploadError);
//           imageUrl = ""; // fallback
//         }
//       }

//       // Save to Mongo
//       const newProject = await Project.create({
//         title: project.title,
//         description: project.description,
//         image: imageUrl, // cloudinary url
//         teamSize: project.teamSize,
//         role: project.role,
//         status: project.status,
//         technologies: project.technologies,
//         featured: project.featured,
//         links: project.links,
//       });

//       insertedProjects.push(newProject);
//     }

//     // Insert Work Experiences
//     const insertedWorkExperiences = await WorkExperience.insertMany(
//       workExperiences
//     );

//     return NextResponse.json({
//       success: true,
//       message: "Database seeded successfully with Cloudinary images!",
//       data: {
//         projects: insertedProjects,
//         workExperiences: insertedWorkExperiences,
//       },
//     });
//   } catch (error) {
//     console.error("Seed error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
