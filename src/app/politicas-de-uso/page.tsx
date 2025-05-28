"use client";
import { SubTitle, Title } from "@/components/Elements";
import React from "react";

const page = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      {" "}
      <div className="w-full flex flex-col justify-start items-start bg-[var(--background)] p-20 text-[var(--texts)] gap-5 max-w-5xl">
        <Title value="Políticas de uso" left />
        <p>
          Esta Política de Uso establece los términos y condiciones
          bajo los cuales Aubia Corporation S.A.S con domicilio
          en Capital Federal, Buenos Aires, Argentina, provee acceso y uso de la
          plataforma web FixBee. Esta versión es preliminar y
          podrá ser revisada y actualizada posteriormente con el asesoramiento
          de profesionales legales.
        </p>

        <hr />

        <SubTitle value="1. Partes y Definiciones" />
        <ul>
          <li>
            <strong>Empresa</strong>: Aubia Corporation S.A.S (BeeScend), CUIT:
            30-95917284-7, mail oficial:{" "}
            <a href="mailto:business@aubia.com.ar">business@aubia.com.ar</a>.
          </li>
          <li>
            <strong>Usuario o Cliente</strong>: Persona jurídica o física que
            contrata la suscripción para usar la Plataforma.
          </li>
          <li>
            <strong>Propietario</strong>: Alejandro Biarrieta (CEO), mail:{" "}
            <a href="mailto:alejandrobiarrieta@gmail.com">
              alejandrobiarrieta@gmail.com
            </a>
            .
          </li>
          <li>
            <strong>Plataforma FixBee</strong>: Módulo de gestión de órdenes de
            servicio técnico, control de clientes, empleados y finanzas.
          </li>
          <li>
            <strong>Suscripción</strong>: Plan de acceso a la Plataforma (free
            trial, mensual o anual).
          </li>
        </ul>

        <SubTitle value="2. Objeto" />
        <p>
          La Plataforma FixBee permite a establecimientos de reparación de
          celulares y computadoras gestionar órdenes de trabajo, datos de
          clientes, empleados y finanzas a través de una interfaz web segura.
        </p>

        <SubTitle value="3. Suscripciones y Pago" />
        <ol>
          <li>
            <strong>Planes Disponibles</strong>: Por el momento, se ofrecerá
            únicamente un plan de pre-lanzamiento.
          </li>
          <li>
            <strong>Precio Base</strong>: USD 80.
          </li>
          <li>
            <strong>Facturación</strong>: Se realizará de manera directa por la
            Empresa.
          </li>
          <li>
            <strong>Política de Reembolso</strong>: Las solicitudes de
            devolución deberán realizarse directamente vía correo electrónico.
            Cada caso será evaluado individualmente. No se ofrecen devoluciones
            automáticas en esta etapa.
          </li>
        </ol>

        <SubTitle value="4. Uso de la Plataforma" />
        <ol>
          <li>
            <strong>Registro y Acceso</strong>: El Cliente debe proporcionar
            datos verídicos y mantenerlos actualizados.
          </li>
          <li>
            <strong>Límite de Usuarios</strong>: Según plan contratado; los
            detalles específicos se definen en el contrato de suscripción.
          </li>
          <li>
            <strong>Seguridad</strong>: El Cliente es responsable de mantener la
            confidencialidad de sus credenciales.
          </li>
        </ol>

        <SubTitle value="5. Responsabilidades del Cliente" />
        <ul>
          <li>
            Carga y veracidad de la información (clientes, empleados, finanzas).
          </li>
          <li>
            Uso adecuado de las herramientas y cumplimiento de normativas
            locales de protección de datos.
          </li>
        </ul>

        <SubTitle value="6. Propiedad Intelectual" />
        <ul>
          <li>
            El software, marcas, diseños y documentación son propiedad de
            BeeScend.
          </li>
          <li>
            El Cliente conserva los derechos de sus datos y contenido que
            cargue, otorgando a la Empresa una licencia limitada de uso y
            almacenamiento.
          </li>
        </ul>

        <SubTitle value="7. Limitación de Responsabilidad" />
        <ul>
          <li>Daños indirectos, lucro cesante o pérdida de oportunidad.</li>
          <li>
            Interrupciones del servicio provocadas por mantenimiento o fallos de
            terceros.
          </li>
        </ul>

        <SubTitle value="8. Jurisdicción y Ley Aplicable" />
        <p>
          Estos términos se rigen por las leyes de la República Argentina. Para
          cualquier controversia, las partes se someten a la jurisdicción de los
          tribunales ordinarios de la Ciudad Autónoma de Buenos Aires.
        </p>

        <SubTitle value="9. Modificaciones" />
        <p>
          Los cambios en las políticas podrán realizarse en cualquier momento
          sin previo aviso. En todo caso, se notificará a los usuarios una vez
          que las modificaciones hayan sido implementadas.
        </p>

        <SubTitle value="10. Contacto" />
        <p>
          Para consultas legales o dudas sobre esta Política, escribir a{" "}
          <a href="mailto:business@aubia.com.ar">business@aubia.com.ar</a>.
        </p>

        <p>
          <em>Versión preliminar – Sujeta a revisión legal futura.</em>
        </p>
      </div>
    </div>
  );
};

export default page;
