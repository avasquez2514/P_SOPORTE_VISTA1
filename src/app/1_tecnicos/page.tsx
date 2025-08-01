"use client";

import React, { useState } from "react";

const TecnicosPage = () => {
  const [enSitio, setEnSitio] = useState("");
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [torre, setTorre] = useState("");
  const [incidente, setIncidente] = useState("");
  const [gestion, setGestion] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [asesoriaTipo, setAsesoriaTipo] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [formExtra, setFormExtra] = useState<Record<string, string>>({});

  const torres = [
    "ANTIOQUIA CENTRO",
    "ANTIOQUIA ORIENTE",
    "ATLANTICO-MAGDALENA-CESAR-LA GUAJIRA-BOLIVAR",
    "BOGOTÁ",
    "EDATEL",
    "SANTANDERES",
  ];
  const gestiones = ["CIERRE", "ENRUTAR", "SOPORTE", "ASESORIA"];
  const tecnologias = ["GPON", "HFC", "FIBRA"];
  const tecnicosGuardados = ["Juan Pérez", "Laura Gómez", "Carlos Díaz"];

  const plantillaCierreGPON = [
    { label: "Fecha", type: "date" },
    { label: "Inc", type: "text" },
    { label: "Reparador", type: "text" },
    { label: "Equipo Sn/Mac", type: "text" },
    { label: "Nombre del contacto en sitio", type: "text" },
    { label: "Teléfono", type: "tel" },
    { label: "Reparación de red externa", type: "text" },
    { label: "Cambio de Drop (cantidad de metros)", type: "text" },
    { label: "Cierre lineal", type: "text" },
    { label: "Conector Óptico", type: "text" },
    { label: "Empalme mecánico", type: "text" },
    { label: "Cantidad de metros de cable instalados", type: "text" },
    { label: "Paso de vías (obstáculos encontrados)", type: "text" },
    { label: "Paso de cámaras (selladas, inundaciones, daños en cableado)", type: "text" },
    { label: "Configuración ONT (Vlan, cambio, puerto)", type: "text" },
    { label: "Tiempo de reparación", type: "text" },
    { label: "Motivo de demora si es más de 2 horas", type: "text" },
    { label: "Actividad realizada", type: "textarea" },
  ];

  const plantillaCierreHFC = [
    { label: "Fecha", type: "date" },
    { label: "Inc", type: "text" },
    { label: "Reparador", type: "text" },
    { label: "Equipo Sn/Mac", type: "text" },
    { label: "Nombre del contacto en sitio", type: "text" },
    { label: "Teléfono", type: "tel" },
    { label: "Actividad realizada", type: "textarea" },
  ];

  const plantillaCierreFIBRA = [
    { label: "Fecha", type: "date" },
    { label: "Inc", type: "text" },
    { label: "Reparador", type: "text" },
    { label: "Equipo Sn/Mac", type: "text" },
    { label: "Nombre del contacto en sitio", type: "text" },
    { label: "Teléfono", type: "tel" },
    { label: "Actividad realizada", type: "textarea" },
  ];

  const plantillaEnrutarGPON = [
    { label: "Fecha", type: "date" },
    { label: "Inc", type: "text" },
    { label: "Reparador", type: "text" },
    { label: "Equipo Sn/Mac", type: "text" },
    { label: "Nombre del contacto en sitio", type: "text" },
    { label: "Teléfono", type: "tel" },
    { label: "Disponibilidad del Cliente", type: "text" },
    { label: "Dirección Cliente", type: "text" },
    { label: "Dirección NAP", type: "text" },
    { label: "Ciudad", type: "text" },
    { label: "OLT", type: "text" },
    { label: "ARPON", type: "text" },
    { label: "NAP", type: "text" },
    { label: "HILO NAP", type: "text" },
    { label: "POTENCIA NAP (1490)", type: "text" },
    { label: "Actividad realizada", type: "textarea" },
  ];

  const plantillaEnrutarHFC = [
    { label: "Fecha", type: "date" },
    { label: "Inc", type: "text" },
    { label: "Reparador", type: "text" },
    { label: "Equipo Sn/Mac", type: "text" },
    { label: "Nombre del contacto en sitio", type: "text" },
    { label: "Teléfono", type: "tel" },
    { label: "Disponibilidad del Cliente", type: "text" },
    { label: "Dirección", type: "text" },
    { label: "Ciudad", type: "text" },
    { label: "TIPO DE TAP", type: "text" },
    { label: "NUMERO", type: "text" },
    { label: "RF ALTOS:     BA (120/135)", type: "text" },
    { label: "RF BAJOS:     BA (2/14/28 RPHY)", type: "text" },
    { label: "CANALES TV 89-45-61", type: "text" },
    { label: "POTENCIA EN UP", type: "text" },
    { label: "POTENCIA EN DOW", type: "text" },
    { label: "MER", type: "text" },
    { label: "BER", type: "text" },
    { label: "DQI", type: "text" },
  ];

  const plantillaEnrutarFIBRA = [
    { label: "Fecha", type: "date" },
    { label: "Inc", type: "text" },
    { label: "Reparador", type: "text" },
    { label: "Equipo Sn/Mac", type: "text" },
    { label: "Nombre del contacto en sitio", type: "text" },
    { label: "Teléfono", type: "tel" },
    { label: "Cambio Módulo Óptico - Nodo (tipo de SFP instalado)", type: "text" },
    { label: "Cambio - Limpieza Módulo Óptico Switch (tipo de SFP instalado)", type: "text" },
    { label: "Actividad realizada", type: "textarea" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enSitio || !nombre || !celular || !torre || !incidente || !gestion) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const data = {
      enSitio,
      nombre,
      celular,
      torre,
      incidente,
      gestion,
      tecnologia: gestion === "ASESORIA" ? asesoriaTipo : tecnologia,
      observaciones,
      plantillaExtra: formExtra,
    };

    try {
      const res = await fetch("/api/tecnico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Formulario enviado correctamente ✅");
        setEnSitio("");
        setNombre("");
        setCelular("");
        setTorre("");
        setIncidente("");
        setGestion("");
        setTecnologia("");
        setAsesoriaTipo("");
        setObservaciones("");
        setFormExtra({});
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Formulario Técnico en Terreno</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ¿Estás en sitio? */}
          <div>
            <label className="font-semibold block mb-1">¿Te encuentras en sitio?</label>
            <div className="flex gap-4">
              <label>
                <input type="radio" value="SI" checked={enSitio === "SI"} onChange={() => setEnSitio("SI")} /> Sí
              </label>
              <label>
                <input type="radio" value="NO" checked={enSitio === "NO"} onChange={() => setEnSitio("NO")} /> No
              </label>
            </div>
          </div>

          {/* Nombre Funcionario */}
          <div>
            <label className="font-semibold block mb-1">Nombre del técnico</label>
            <select
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Selecciona o escribe...</option>
              {tecnicosGuardados.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Celular */}
          <div>
            <label className="font-semibold block mb-1">Número de celular</label>
            <input
              type="tel"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Ej. 3001234567"
            />
          </div>

          {/* Torre Asignada */}
          <div>
            <label className="font-semibold block mb-1">Torre Asignada</label>
            <select
              value={torre}
              onChange={(e) => setTorre(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Selecciona torre</option>
              {torres.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Número INC */}
          <div>
            <label className="font-semibold block mb-1">Número INC</label>
            <input
              type="text"
              value={incidente}
              onChange={(e) => setIncidente(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Ej. INC123456"
            />
          </div>

          {/* Gestión Requerida */}
          <div>
            <label className="font-semibold block mb-1">Gestión Requerida</label>
            <select
              value={gestion}
              onChange={(e) => {
                setGestion(e.target.value);
                setTecnologia("");
                setAsesoriaTipo("");
              }}
              className="w-full border p-2 rounded"
            >
              <option value="">Selecciona gestión</option>
              {gestiones.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Tecnología */}
          {gestion && gestion !== "SOPORTE" && gestion !== "ASESORIA" && (
            <div>
              <label className="font-semibold block mb-1">Tecnología ({gestion})</label>
              <select
                value={tecnologia}
                onChange={(e) => setTecnologia(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Selecciona tecnología</option>
                {tecnologias.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          )}

          {/* Tipo de Asesoría */}
          {gestion === "ASESORIA" && (
            <div>
              <label className="font-semibold block mb-1">Tipo de Asesoría</label>
              <select
                value={asesoriaTipo}
                onChange={(e) => setAsesoriaTipo(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Selecciona una opción</option>
                <option value="PARAMETROS">PARAMETROS</option>
                <option value="INFRAESTRUCTURA">INFRAESTRUCTURA</option>
              </select>
            </div>
          )}

          {/* Observaciones */}
          <div>
            <label className="font-semibold block mb-1">Observaciones</label>
            <textarea
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Ingresa observaciones si aplica..."
            />
          </div>

          {/* ... tus plantillas ya existentes para CIERRE y ENRUTAR van aquí sin cambios ... */}

                    {/* Renderizar plantilla según Gestión y Tecnología */}
          {gestion === "CIERRE" && tecnologia === "GPON" && (
            <PlantillaRender
              titulo="Plantilla Cierre GPON"
              campos={plantillaCierreGPON}
              formExtra={formExtra}
              setFormExtra={setFormExtra}
            />
          )}

          {gestion === "CIERRE" && tecnologia === "HFC" && (
            <PlantillaRender
              titulo="Plantilla Cierre HFC"
              campos={plantillaCierreHFC}
              formExtra={formExtra}
              setFormExtra={setFormExtra}
            />
          )}

          {gestion === "CIERRE" && tecnologia === "FIBRA" && (
            <PlantillaRender
              titulo="Plantilla Cierre FIBRA"
              campos={plantillaCierreFIBRA}
              formExtra={formExtra}
              setFormExtra={setFormExtra}
            />
          )}

          {gestion === "ENRUTAR" && tecnologia === "GPON" && (
            <PlantillaRender
              titulo="Plantilla Enrutar GPON"
              campos={plantillaEnrutarGPON}
              formExtra={formExtra}
              setFormExtra={setFormExtra}
            />
          )}

          {gestion === "ENRUTAR" && tecnologia === "HFC" && (
            <PlantillaRender
              titulo="Plantilla Enrutar HFC"
              campos={plantillaEnrutarHFC}
              formExtra={formExtra}
              setFormExtra={setFormExtra}
            />
          )}

          {gestion === "ENRUTAR" && tecnologia === "FIBRA" && (
            <PlantillaRender
              titulo="Plantilla Enrutar FIBRA"
              campos={plantillaEnrutarFIBRA}
              formExtra={formExtra}
              setFormExtra={setFormExtra}
            />
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
          >
            Enviar formulario
          </button>
        </form>
      </div>
    </div>
  );
};

// PlantillaRender
const PlantillaRender = ({
  titulo,
  campos,
  formExtra,
  setFormExtra,
}: {
  titulo: string;
  campos: { label: string; type: string }[];
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

export default TecnicosPage;
