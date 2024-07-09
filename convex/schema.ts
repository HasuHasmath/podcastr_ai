// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   podcast: defineTable({
//     user: v.id("users"),
//     podcastTitle: v.string(),
//     podcastDescription: v.string(),
//     audioUrl: v.optional(v.string()),
//     audioStorageId: v.optional(v.id("_storage")),
//     imageUrl: v.optional(v.string()),
//     imageStorageId: v.optional(v.id("_storage")),
//     author: v.string(),
//     authorId: v.string(),
//     authorImageUrl: v.string(),
//     voicePrompt: v.string(),
//     imagePrompt: v.string(),
//     voiceType: v.string(),
//     audioDuration: v.number(),
//     views: v.number(),
//   })
//     .searchIndex("search_author", { searchField: "author" })
//     .searchIndex("search_title", { searchField: "podcastTitle" })
//     .searchIndex("search_body", { searchField: "podcastDescription" }),

//   users: defineTable({
//     email: v.string(),
//     imageURL: v.string(),
//     clerkId: v.string(),
//     name: v.string(),
//   }),
//   tasks: defineTable({
//     text: v.string(),
//     // Add any other fields your tasks table should have
//   }),
// });


// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   podcast: defineTable({
//     user: v.id("users"),
//     podcastTitle: v.string(),
//     podcastDescription: v.string(),
//     audioUrl: v.optional(v.string()),
//     audioStorageId: v.optional(v.id("_storage")),
//     imageUrl: v.optional(v.string()),
//     imageStorageId: v.optional(v.id("_storage")),
//     author: v.string(),
//     authorId: v.string(),
//     authorImageUrl: v.string(),
//     voicePrompt: v.string(),
//     imagePrompt: v.string(),
//     voiceType: v.string(),
//     audioDuration: v.number(),
//     views: v.number(),
//   })
//     .searchIndex("search_author", { searchField: "author" })
//     .searchIndex("search_title", { searchField: "podcastTitle" })
//     .searchIndex("search_body", { searchField: "podcastDescription" }),

//   users: defineTable({
//     email: v.string(),
//     imageUrl: v.string(),
//     clerkId: v.string(),
//     name: v.string(),
//   }),

//   tasks: defineTable({
//     text: v.string(),
//     isCompleted: v.boolean(), // Add the isCompleted field here
//   }),
// });

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    user: v.id("users"), // Reference to the user who created the podcast
    podcastTitle: v.string(), // Title of the podcast
    podcastDescription: v.string(), // Description of the podcast
    audioUrl: v.optional(v.string()), // Optional URL to the podcast's audio file
    audioStorageId: v.optional(v.id("_storage")), // Optional ID referencing storage location for the audio file
    imageUrl: v.optional(v.string()), // Optional URL to the podcast's cover image
    imageStorageId: v.optional(v.id("_storage")), // Optional ID referencing storage location for the image
    author: v.string(), // Name of the author/presenter
    authorId: v.string(), // Unique identifier for the author
    authorImageUrl: v.string(), // URL to the author's profile picture
    voicePrompt: v.string(), // Text prompt for the voiceover
    imagePrompt: v.string(), // Text prompt for the image
    voiceType: v.string(), // Type of voice used in the podcast
    audioDuration: v.number(), // Duration of the podcast in seconds
    views: v.number(), // Number of views the podcast has received
  })
    .searchIndex("search_author", { searchField: "author" }) // Search index for author name
    .searchIndex("search_title", { searchField: "podcastTitle" }) // Search index for podcast title
    .searchIndex("search_body", { searchField: "podcastDescription" }), // Search index for podcast description

  users: defineTable({
    email: v.string(), // Email address of the user
    imageUrl: v.string(), // URL to the user's profile picture
    clerkId: v.string(), // Unique identifier for the user, possibly from Clerk
    name: v.string(), // Name of the user
  }),

  tasks: defineTable({
    text: v.string(), // Task description or instructions
    isCompleted: v.boolean(), // Boolean indicating whether the task is completed
  }),
});
