import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("http://147.45.163.127:9000/api/projects", {
      headers: {
        Accept: "application/json",
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Ошибка запроса", error: error.message }, { status: 500 });
  }
}
