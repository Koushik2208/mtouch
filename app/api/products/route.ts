import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const result = await response.json();
    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
