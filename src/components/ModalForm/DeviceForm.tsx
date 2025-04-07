"use client";
import { useState } from "react";

const simulatedData = {
  customers: [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "María González" },
    { id: 3, name: "Carlos Ramírez" },
  ],
  sellers: [
    { id: 1, name: "Vendedor A" },
    { id: 2, name: "Vendedor B" },
    { id: 3, name: "Vendedor C" },
  ],
  device_types: [
    {
      id: 1,
      type: "Smartphone",
      models: {
        Samsung: ["Galaxy S21", "Note 20", "A52"],
        Apple: ["iPhone 12", "iPhone 13", "iPhone 14"],
        Xiaomi: ["Redmi Note 10", "Mi 11", "Poco X3"],
      },
      attributes: [
        { id_attribute: 1, name: "Capacidad de almacenamiento" },
        { id_attribute: 2, name: "Color" },
        { id_attribute: 3, name: "Estado de la batería" },
      ],
    },
    {
      id: 2,
      type: "Tablet",
      models: {
        Samsung: ["Galaxy Tab S7", "Tab A7"],
        Apple: ["iPad Pro", "iPad Air"],
        Lenovo: ["Tab P11"],
      },
      attributes: [
        { id_attribute: 1, name: "Tamaño de pantalla" },
        { id_attribute: 2, name: "Conectividad" },
      ],
    },
    {
      id: 3,
      type: "Laptop",
      models: {
        Dell: ["XPS 13", "Inspiron 15"],
        Lenovo: ["ThinkPad X1", "IdeaPad 3"],
        HP: ["Spectre x360", "Pavilion 14"],
      },
      attributes: [
        { id_attribute: 1, name: "Tipo de procesador" },
        { id_attribute: 2, name: "Memoria RAM" },
        { id_attribute: 3, name: "Almacenamiento" },
      ],
    },
  ],
  password_types: [
    { type: "None" },
    { type: "PIN" },
    { type: "Pattern" },
    { type: "Password" },
  ],
};

interface DeviceFormData {
  id_customer: number;
  id_seller: number;
  id_device_type: number;
  brand: string;
  device_model: string;
  imei: string;
  password_type: string;
  device_password: string;
  diagnosis_report: string;
  device_condition: string;
  list_attributes: Array<{ id_attribute: number; value: string }>;
}

const DeviceForm: React.FC = () => {
  const [formData, setFormData] = useState<DeviceFormData>({
    id_customer: 0,
    id_seller: 0,
    id_device_type: 0,
    brand: "",
    device_model: "",
    imei: "",
    password_type: "None",
    device_password: "",
    diagnosis_report: "",
    device_condition: "",
    list_attributes: [],
  });

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [attributes, setAttributes] = useState<
    { id_attribute: number; name: string }[]
  >([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      id_customer: Number(value),
    }));
  };

  const handleSellerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      id_seller: Number(value),
    }));
  };

  const handleDeviceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const deviceTypeId = parseInt(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      id_device_type: deviceTypeId,
      brand: "",
      device_model: "",
      imei: "",
    }));

    const selectedType = simulatedData.device_types.find(
      (type) => type.id === deviceTypeId,
    );
    if (selectedType) {
      setBrands(Object.keys(selectedType.models));
      setModels([]);
      setAttributes(selectedType.attributes);
    }
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      brand: selectedBrand,
      device_model: "",
    }));

    const selectedType = simulatedData.device_types.find(
      (type) => type.id === formData.id_device_type,
    );
    if (selectedType) {
      const availableModels = selectedType.models as unknown as Record<
        string,
        string[]
      >;
      setModels(availableModels[selectedBrand] || []);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="w-screen h-screen bg-neutral-800 fixed top-0 left-0 flex justify-center items-center z-[999999] overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-8 bg-neutral-800 rounded-xl shadow-lg border border-gray-700 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">
          Formulario de Dispositivo
        </h2>

        {/*Vendedor */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Cliente
          </label>
          <select
            name="id_seller"
            value={formData.id_seller}
            onChange={handleSellerChange}
            required
            className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
          >
            <option value={0}>Selecciona un Vendedor</option>
            {simulatedData.sellers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Cliente*/}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Cliente
          </label>
          <select
            name="id_customer"
            value={formData.id_customer}
            onChange={handleCustomerChange}
            required
            className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
          >
            <option value={0}>Selecciona un cliente</option>
            {simulatedData.customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Tipo de Dispositivo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo de Dispositivo
            </label>
            <select
              name="id_device_type"
              value={formData.id_device_type}
              onChange={handleDeviceTypeChange}
              required
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            >
              <option value={0}>Selecciona un tipo de dispositivo</option>
              {simulatedData.device_types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>

          {/* Marca */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Marca
            </label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleBrandChange}
              disabled={brands.length === 0}
              required
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            >
              <option value="">Selecciona una marca</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Modelo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Modelo
            </label>
            <select
              name="device_model"
              value={formData.device_model}
              onChange={handleChange}
              disabled={models.length === 0}
              required
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            >
              <option value="">Selecciona un modelo</option>
              {models.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* IMEI - Solo si es celular */}
          {formData.id_device_type === 1 && (
            <div>
              <label
                htmlFor="imei"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                IMEI
              </label>
              <input
                id="imei"
                type="text"
                name="imei"
                value={formData.imei}
                onChange={handleChange}
                placeholder="Ingresa el IMEI"
                className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
              />
            </div>
          )}

          {/* Tipo de Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo de Contraseña
            </label>
            <select
              name="password_type"
              value={formData.password_type}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            >
              <option value="">Selecciona un tipo de contraseña</option>
              {simulatedData.password_types.map((type) => (
                <option key={type.type} value={type.type}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>

          {/* Contraseña del dispositivo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contraseña del Dispositivo
            </label>
            <input
              type="text"
              name="device_password"
              value={formData.device_password}
              onChange={handleChange}
              placeholder="Contraseña del dispositivo"
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            />
          </div>

          {/* Reporte de Diagnóstico */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Reporte de Diagnóstico
            </label>
            <textarea
              name="diagnosis_report"
              value={formData.diagnosis_report}
              onChange={handleChange}
              placeholder="Descripción del reporte"
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            />
          </div>

          {/* Condición del dispositivo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Condición del dispositivo
            </label>
            <textarea
              name="device_condition"
              value={formData.device_condition}
              onChange={handleChange}
              placeholder="Descripción del reporte"
              className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
            />
          </div>

          {/* Atributos según el tipo de dispositivo */}
          {attributes.map((attribute) => (
            <div key={attribute.id_attribute}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {attribute.name}
              </label>
              <input
                type="text"
                name={`attribute-${attribute.id_attribute}`}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    list_attributes: [
                      ...formData.list_attributes.filter(
                        (a) => a.id_attribute !== attribute.id_attribute,
                      ),
                      {
                        id_attribute: attribute.id_attribute,
                        value: e.target.value,
                      },
                    ],
                  })
                }
                className="w-full px-4 py-2 text-sm text-white bg-neutral-800 border border-gray-600 rounded-lg focus:border-[#F5CC00] focus:ring-0 transition-all"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-sm text-white bg-[#F5CC00] rounded-lg focus:ring-4 focus:ring-[#F5CC00] focus:ring-opacity-50 transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default DeviceForm;
