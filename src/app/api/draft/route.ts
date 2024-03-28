import { draftMode } from 'next/headers';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const secret = searchParams.get('secret');
	const page = searchParams.get('page');
    console.log(page);
    console.log(secret);

	if (secret !== process.env.CMS_TOKEN) {
		return new Response('Invalid token', { status: 401 });
	}

	if (page=="HOME") {
        draftMode().enable();

        return new Response(null, {
            status: 307,
            headers: {
                Location: `/`,
            },
        });
	}
}