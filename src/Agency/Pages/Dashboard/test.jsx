import React, { useState } from "react";

// Componente del formulario (fila de la tabla)
const FormRow = ({ onRemove, onChange, data }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		onChange(data.id, name, value);
	};

	return (
		<tr>
			<td>
				<input type="text" name="campo1" value={data.campo1} onChange={handleInputChange} />
			</td>
			<td>
				<input type="text" name="campo2" value={data.campo2} onChange={handleInputChange} />
			</td>
			<td>
				<button onClick={() => onRemove(data.id)}>Eliminar</button>
			</td>
		</tr>
	);
};

// Componente de la tabla
const FormTable = () => {
	const [formData, setFormData] = useState([{ id: 1, campo1: "", campo2: "" }]);

	const handleAddRow = () => {
		const newRow = { id: Date.now(), campo1: "", campo2: "" };
		setFormData([...formData, newRow]);
	};

	const handleRemoveRow = (id) => {
		const updatedData = formData.filter((data) => data.id !== id);
		setFormData(updatedData);
	};

	const handleInputChange = (id, name, value) => {
		const updatedData = formData.map((data) =>
			data.id === id ? { ...data, [name]: value } : data,
		);
		setFormData(updatedData);
	};

	const handleSubmit = () => {
		console.log(formData);
		// Aquí puedes realizar cualquier acción con los datos recopilados.
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Campo 1</th>
						<th>Campo 2</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{formData.map((data) => (
						<FormRow
							key={data.id}
							data={data}
							onRemove={handleRemoveRow}
							onChange={handleInputChange}
						/>
					))}
				</tbody>
			</table>
			<button onClick={handleAddRow}>Agregar fila</button>
			<button onClick={handleSubmit}>Enviar</button>
		</div>
	);
};

export default FormTable;
