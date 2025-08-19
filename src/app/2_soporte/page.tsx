"use client";
import React, { useEffect, useState } from "react";

const SoportePage = () => {
  const [datos, setDatos] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/tecnico")
      .then((res) => res.json())
      .then((json) => setDatos(json)) // <-- antes estaba json.data, ahora json contiene directamente el array
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Datos de Soporte</h1>

      {datos.length === 0 ? (
        <p>No hay datos aún</p>
      ) : (
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Celular</th>
              <th className="border p-2">Torre</th>
              <th className="border p-2">Incidente</th>
              <th className="border p-2">Gestión</th>
              <th className="border p-2">Tecnología / Asesoría</th>
              <th className="border p-2">Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((d, i) => (
              <tr key={i}>
                <td className="border p-2">{d.nombre}</td>
                <td className="border p-2">{d.celular}</td>
                <td className="border p-2">{d.torre}</td>
                <td className="border p-2">{d.incidente}</td>
                <td className="border p-2">{d.gestion}</td>
                <td className="border p-2">{d.tecnologia || d.asesoriaTipo}</td>
                <td className="border p-2">{d.observaciones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SoportePage;
