// app/page.tsx
"use client";

import { useState } from "react";
import AccreditationForm, { DatosBasicos } from "@/components/AccreditationForm";
import Image from "next/image";

export default function Page() {
  const [enviado, setEnviado] = useState<null | { nombre: string; apellido: string }>(null);

  // Como ahora sólo existe prensa, fijamos el área aquí
  const areaFija = "Prensa" as const;

  return (
    <main className="min-h-dvh w-full flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header con banner, logo y título */}
        <header className="mb-8 relative flex flex-col items-center text-center">
          <div className="relative w-full">
            {/* Banner */}
            <Image
              src="/img/banner-nuevo-golatam.jpg"
              alt="Acreditaciones de prensa GO Latam"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Título principal debajo del banner */}
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Acreditaciones Prensa — Go Latam
          </h1>
        </header>

        {/* Ya no hay paso 1/2, sólo un mensaje simple */}
        {!enviado && (
          <>
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
              <span className="px-2 py-1 rounded bg-black text-white">
                Completa tus datos para acreditarte como prensa
              </span>
            </div>

            <AccreditationForm
              area={areaFija}
              onCancel={() => {
                // Antes volvías al selector de área.
                // Ahora no hay nada a lo que "volver", así que lo dejamos vacío.
              }}
              onSuccess={(datos: DatosBasicos) =>
                setEnviado({ nombre: datos.nombre, apellido: datos.apellido })
              }
            />
          </>
        )}

        {enviado && (
          <div className="rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold mb-2">¡Solicitud enviada!</h2>
            <p className="text-gray-700">
              Gracias {enviado.nombre} {enviado.apellido}. Hemos recibido tu solicitud de
              acreditación como prensa.
            </p>
            <button
              className="mt-6 rounded-xl border px-4 py-2 hover:bg-gray-50"
              onClick={() => setEnviado(null)}
            >
              Enviar otra respuesta
            </button>
          </div>
        )}
      </div>
    </main>
  );
}



