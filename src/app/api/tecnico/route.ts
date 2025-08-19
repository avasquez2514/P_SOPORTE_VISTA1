import { NextResponse } from "next/server";

// Guardar temporalmente los datos en memoria
let datosRecibidos: any[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();
    datosRecibidos.push(data);
    console.log("Datos recibidos:", data);

    return NextResponse.json({ message: "Formulario recibido ✅", data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(datosRecibidos);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error en GET" }, { status: 500 });
  }
}
