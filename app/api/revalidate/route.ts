import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

type SanityWebhookBody = {
  _type?: string;
  slug?: { current?: string };
};

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "SANITY_REVALIDATE_SECRET is not configured" },
      { status: 500 },
    );
  }

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body: SanityWebhookBody = {};

  try {
    body = (await request.json()) as SanityWebhookBody;
  } catch {
    // Allow empty webhook bodies and revalidate the main content paths.
  }

  revalidatePath("/");
  revalidatePath("/insight");
  revalidatePath("/about");
  revalidatePath("/contact");
  revalidatePath("/services");

  if (body.slug?.current) {
    revalidatePath(`/insight/${body.slug.current}`);
  }

  return NextResponse.json({
    revalidated: true,
    type: body._type ?? "unknown",
  });
}
