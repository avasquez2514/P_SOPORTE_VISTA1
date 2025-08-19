"use client";
import React from "react";

type Campo = {
  label: string;
  type: string;
};

const PlantillaRender = ({
  titulo,
  campos,
  formExtra,
  setFormExtra,
}: {
  titulo: string;
  campos: Campo[];
  formExtra: Record<string, string>;
  setFormExtra: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="space-y-4 bg-blue-50 p-4 rounded border">
      <h2 className="text-lg font-semibold text-blue-700">{titulo}</h2>
      {campos.map((campo) => (
        <div key={campo.label}>
          <label className="block font-medium">{campo.label}</label>
          {campo.type === "textarea" ? (
            <textarea
              className="w-full p-2 border rounded"
              value={formExtra[campo.label] || ""}
              onChange={(e) =>
                setFormExtra({ ...formExtra, [campo.label]: e.target.value })
              }
            />
          ) : (
            <input
              type={campo.type}
              className="w-full p-2 border rounded"
              value={
                campo.label === "Fecha"
                  ? formExtra[campo.label] || today
                  : formExtra[campo.label] || ""
              }
              onChange={(e) =>
                setFormExtra({ ...formExtra, [campo.label]: e.target.value })
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlantillaRender;
