/**
 * Prisma seed script.
 * Run with: npm run prisma:seed
 * Currently a no-op placeholder — services/portfolio/opportunities content
 * lives in src/content/*.ts (a typed data layer), not the database, so there
 * is nothing to seed yet. Add seed logic here if that content is migrated
 * into the database or a CMS later.
 */
async function main() {
  console.log("No seed data required yet — website content lives in src/content/*.ts");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
