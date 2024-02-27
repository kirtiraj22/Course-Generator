// /api/course/createChapters

import { NextResponse } from "next/server";
import { createChaptersSchema } from "@/validators/course";
import { ZodError } from "zod";

export async function POST(req: Request, res: Response) {
	try {
		const body = req.body;
		const { title, units } = createChaptersSchema.parse(body);

		type outputUnits = {
			title: string;
			// array of objects
			chapters: {
				youtube_search_query: string;
				chapter_title: string;
			}[];
		};
	} catch (error) {
		if (error instanceof ZodError) {
			return new NextResponse("Invalid body", {
				status: 400,
			});
		}
	}
}
