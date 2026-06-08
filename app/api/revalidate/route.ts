import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Triggers a revalidation of a specific path.
 * Called from the admin dashboard after a successful Firestore write.
 *
 * Note: the home page uses `dynamic = "force-dynamic"`, so this endpoint
 * is mostly a safety net for when caching is added later.
 */
export async function POST(req: Request) {
  const url = new URL(req.url);
  const path = url.searchParams.get("path") ?? "/";

  if (!path.startsWith("/")) {
    return NextResponse.json(
      { error: "Invalid path." },
      { status: 400 },
    );
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
